import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Vinicius",
      books: {
        create: {
          name: "Codigo limpo"
        }
      }
    }
  })

  console.log(result)
}

main()