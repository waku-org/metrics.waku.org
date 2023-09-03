import initiateDb from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const name: string = request.body.name;
  const data: object = request.body.data;

  const db = await initiateDb();

  await db.from("saves").insert({ name, data });

  return NextResponse.json({
    data: (
      await db.from("saves").select().order("created_at", { ascending: false })
    ).data,
  });
}
