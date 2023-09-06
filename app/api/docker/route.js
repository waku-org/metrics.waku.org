import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      `https://hub.docker.com/v2/repositories/statusteam/nim-waku`
    );

    return NextResponse.json(response.data);
  } catch (error) {
    throw new Error("Failed to fetch Docker Hub image data");
  }
}
