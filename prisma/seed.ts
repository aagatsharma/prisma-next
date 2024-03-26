import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Aagat",
    email: "aagats72@gmail.com",
    post: {
      create: [
        {
          title: "Javascript is best",
          published: true,
          category: {
            create: [
              {
                name: "JS",
              },
              {
                name: "React",
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Aagaman",
    email: "aagaman2@gmail.com",
    post: {
      create: [
        {
          title: "Python is best",
          published: true,
          category: {
            create: [
              {
                name: "python",
              },
              {
                name: "Django",
              },
            ],
          },
        },
      ],
    },
  },
  {
    name: "Sanam",
    email: "sanam@gmail.com",
    post: {
      create: [
        {
          title: "Java is best",
          published: true,
          category: {
            create: [
              {
                name: "java",
              },
            ],
          },
        },
      ],
    },
  },
];

async function main() {
  console.log("Start seeding....");
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log("Finished seeding");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
