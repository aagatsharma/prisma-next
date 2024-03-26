import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// offset pagination
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const pgnum = +(searchParams.get("pgnum") ?? 0);
  const pgSize = +(searchParams.get("pgsize") ?? 10);
  const posts = await prisma.post.findMany({
    skip: pgnum * pgSize,
    take: pgSize,
  });
  const totalPosts = await prisma.post.count();
  const totalPages = Math.ceil((totalPosts - 1) / pgSize);
  return NextResponse.json({ posts, totalPosts, totalPages });
}

// cursor pagination (lets say cursor=2 & pgsize=6 then it shows result from 2 to 7)
// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);

//   const cursor = +(searchParams.get("cursor") ?? 0);
//   const pgSize = +(searchParams.get("pgsize") ?? 10);
//   const posts = await prisma.post.findMany({
//     cursor: {
//       id: cursor,
//     },
//     take: pgSize,
//   });
//   return new Response(JSON.stringify(posts));
// }
