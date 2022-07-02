import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const course = await prisma.courses.update({
    where: {
      id: "a454b2f7-dd2e-482c-8684-73e41cd30f99"
    },
    data: {
      duration: 300
    }
  })

  console.log(course)
}

main()