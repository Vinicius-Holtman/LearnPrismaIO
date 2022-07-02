import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function findOne() {
  const course = await prisma.courses.findFirst({
    take: -1,
  })
  console.log(course)
}

findOne()