import { NextResponse } from "next/server";
import { demoQuestions } from "@/lib/demo-bank";

export async function GET() {
  return NextResponse.json({
    questions: demoQuestions(),
    count: 10,
  });
}
