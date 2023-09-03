import axios from "axios";
import addOAuthInterceptor from "axios-oauth-1.0a";
import { NextResponse } from "next/server";

export async function GET() {
  const client: axios = axios.create();
  const options: object = {
    algorithm: "HMAC-SHA1",
    key: process.env.TWITTER_CONSUMER_KEY,
    secret: process.env.TWITTER_CONSUMER_SECRET,
    token: process.env.TWITTER_ACCESS_TOKEN,
    tokenSecret: process.env.TWITTER_TOKEN_SECRET,
  };

  addOAuthInterceptor(client, options);

  const { data } = await client.get(
    "https://api.twitter.com/2/users/me?user.fields=public_metrics",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

  return NextResponse.json(data.data.public_metrics);
}
