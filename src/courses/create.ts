import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function create() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de python",
      duration: 200,
      description: "Curso muito bom",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Vinicius Holtman",
          },
          create: {
            name: "Vinicius Holtman",
          },
        },
      },
    },
  });

  console.log(result);
}

create();
