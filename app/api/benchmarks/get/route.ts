import initiateDb from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const db = await initiateDb();

  return NextResponse.json({
    data: (
      await db
        .from("benchmarks")
        .select()
        .order("created_at", { ascending: false })
    ).data,
  });
}
