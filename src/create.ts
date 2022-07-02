import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function create() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: "Curso de python",
      description: "Curso muito bom"
    }
  })

  console.log(result)
}

create()