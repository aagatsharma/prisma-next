import prisma from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany({
    where: {
      role: {
        not: "ADMIN",
      },
    },
    take: 2,
    orderBy: {
      name: "asc",
    },
  });
  console.log(users);
  return new Response(JSON.stringify(users));
}
