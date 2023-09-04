import initiateDb from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    id,
    name,
    value,
  }: {
    id: number | boolean | null;
    name: string;
    value: object;
  } = await request.json();

  const db = await initiateDb();

  if (id) {
    await db.from("benchmarks").update({ name, value }).eq("id", id);
  } else {
    await db.from("benchmarks").insert({ name, value });
  }

  return NextResponse.json({
    data: (
      await db
        .from("benchmarks")
        .select()
        .order("created_at", { ascending: false })
    ).data,
  });
}
