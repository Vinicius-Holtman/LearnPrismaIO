import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


async function main() {
  const result = await prisma.courses.create({
    data: {
      duration: 200,
      name: "Curso de node",
      description: "Curso muito bom"
    }
  })

  console.log(result)
}

main()