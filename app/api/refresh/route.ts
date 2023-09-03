import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const refresh_token: string | string[] = request.query.token;

  const { data } = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      refresh_token,
      grant_type: "refresh_token",
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
