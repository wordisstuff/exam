import { entitlementEnforcementEnabled } from "./stripe-server.ts";
import { listUserEntitlements } from "./supabase-rest-admin.ts";

export interface AccessState {
  enforcement: boolean;
  paid: boolean;
  productCode: string | null;
  startsAt: string | null;
  endsAt: string | null;
}

export async function getAccessState(userId: string, now = new Date()): Promise<AccessState> {
  const enforcement = entitlementEnforcementEnabled();
  if (!enforcement) {
    return {
      enforcement: false,
      paid: true,
      productCode: "preview",
      startsAt: null,
      endsAt: null,
    };
  }

  const entitlements = await listUserEntitlements(userId);
  const active = entitlements.find(entitlement => {
    if (entitlement.status !== "active") return false;
    if (!entitlement.starts_at || !entitlement.ends_at) return false;
    return new Date(entitlement.starts_at) <= now && new Date(entitlement.ends_at) > now;
  });

  return {
    enforcement: true,
    paid: Boolean(active),
    productCode: active?.product_code ?? null,
    startsAt: active?.starts_at ?? null,
    endsAt: active?.ends_at ?? null,
  };
}

export async function requirePaidAccess(userId: string) {
  const access = await getAccessState(userId);
  if (!access.paid) {
    const error = new Error("Paid access is required.");
    (error as Error & { code?: string }).code = "PAYMENT_REQUIRED";
    throw error;
  }
  return access;
}
