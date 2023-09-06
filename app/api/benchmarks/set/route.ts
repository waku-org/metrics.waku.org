import initiateDb from "@/utils/db";
import { NextResponse } from "next/server";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const supabase = createRouteHandlerClient({ cookies });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.json(
      {
        error: "Unauthenticated!",
      },
      { status: 401 }
    );
  }

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
