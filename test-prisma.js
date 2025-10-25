import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      clerkUserId: "test_001",
      email: "test@example.com",
      name: "Mostak Ahmed",
      imageUrl: "https://example.com/avatar.png"
    },
  });

  console.log("✅ New user created:", user);

  const record = await prisma.record.create({
    data: {
      text: "Lunch Expense",
      amount: 250.75,
      category: "Food",
      userId: user.clerkUserId,
    },
  });

  console.log("✅ Record added:", record);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
