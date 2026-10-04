import { NextResponse } from "next/server";
import { checkDemoAnswer } from "@/lib/demo-bank";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as {
    questionId?: unknown;
    selectedAnswerIds?: unknown;
  } | null;

  if (typeof body?.questionId !== "string" || !Array.isArray(body.selectedAnswerIds)) {
    return NextResponse.json({ error: "Invalid demo answer." }, { status: 400 });
  }

  try {
    const feedback = checkDemoAnswer(
      body.questionId,
      body.selectedAnswerIds.filter((value): value is string => typeof value === "string"),
    );
    return NextResponse.json({ feedback });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to check demo answer." },
      { status: 400 },
    );
  }
}
