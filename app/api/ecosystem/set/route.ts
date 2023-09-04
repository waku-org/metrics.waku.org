import initiateDb from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    id,
    name,
    description,
    url,
  }: {
    id: number | boolean | null;
    name: string;
    description: string;
    url: string;
  } = await request.json();

  const db = await initiateDb();

  if (id) {
    await db.from("ecosystem").update({ name, description, url }).eq("id", id);
  } else {
    await db.from("ecosystem").insert({ name, description, url });
  }

  return NextResponse.json({
    data: (
      await db
        .from("ecosystem")
        .select()
        .order("created_at", { ascending: false })
    ).data,
  });
}
