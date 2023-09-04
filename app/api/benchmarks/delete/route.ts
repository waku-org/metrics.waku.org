import initiateDb from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    id,
  }: {
    id: number;
  } = await request.json();

  const db = await initiateDb();

  await db.from("benchmarks").delete().eq("id", id);

  return NextResponse.json({
    data: (
      await db
        .from("benchmarks")
        .select()
        .order("created_at", { ascending: false })
    ).data,
  });
}
