import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura limpa",
      author_id: "256b197e-3b7d-4595-abc4-3c7820a96fa5"
    }
  })

  console.log(result)
}

main()