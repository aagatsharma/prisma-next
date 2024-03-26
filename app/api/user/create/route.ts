import prisma from "@/lib/prisma";

export async function POST() {
  const user = await prisma.user.create({
    data: {
      name: "Aagat",
      email: "aagat12@gmail.com",
      role: "ADMIN",
      post: {
        create: [
          {
            title: "Hello world",
            published: false,
            category: {
              //   create: {
              //     name: "programming",
              //   },
              //   connect: [{ id: 1 }, { id: 2 }],
              connectOrCreate: {
                where: {
                  //   name: "big data",
                  id: 1,
                },
                create: {
                  name: "bida ta",
                },
              },
            },
          },
        ],
      },
    },
  });
  return new Response(JSON.stringify(user));
}
