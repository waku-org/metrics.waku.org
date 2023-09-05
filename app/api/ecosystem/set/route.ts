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

  const db = await initiateDb();

  const body = await request.formData();
  let data = {};

  body.forEach((field, key) => (data[key] = field));

  const {
    id,
    name,
    description,
    url,
    image,
  }: {
    id: number | boolean | null;
    name: string;
    description: string;
    url: string;
    image: any;
  } = data;

  if (id !== "false") {
    await db.from("ecosystem").update({ name, description, url }).eq("id", id);

    if (image) {
      await db.storage.from("public").update(`public/${id}.png`, image);
    }
  } else {
    const { data } = await db
      .from("ecosystem")
      .upsert({ name, description, url })
      .select();

    if (image) {
      await db.storage.from("public").upload(`public/${data[0].id}.png`, image);
    }
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
