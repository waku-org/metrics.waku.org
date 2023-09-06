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

  const { name, data }: { name: string; data: object } = await request.json();

  const db = await initiateDb();

  await db.from("saves").insert({ name, data });

  return NextResponse.json({
    data: (
      await db.from("saves").select().order("created_at", { ascending: false })
    ).data,
  });
}
