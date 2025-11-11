// src/app/robots.txt/route.ts
export const runtime = "edge";
export async function GET() {
  return new Response(`User-agent: *\nAllow: /`, {
    headers: { "Content-Type": "text/plain" },
  });
}
