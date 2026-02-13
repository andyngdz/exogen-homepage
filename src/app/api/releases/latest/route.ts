import { getLatestRelease } from "@/lib/getLatestRelease";
import { NextResponse } from "next/server";

export async function GET() {
  const latestVersion = await getLatestRelease();

  return NextResponse.json(
    { latestVersion },
    {
      headers: {
        "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      },
    }
  );
}
