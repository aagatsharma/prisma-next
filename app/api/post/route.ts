import prisma from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.post.findMany({
    where: {
      User: {
        is: {
          name: "Aagat",
        },
      },
    },
    // include: {
    //   User: true,
    // },
    select: {
      title: true,
      User: {
        select: {
          name: true,
          email: true,
        },
      },
    },
  });
  return new Response(JSON.stringify(posts));
}
