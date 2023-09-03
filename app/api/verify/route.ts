import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const code: string | string[] = request.query.code;

  const { data } = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      code,
      client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
    },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  return NextResponse.json(data);
}
