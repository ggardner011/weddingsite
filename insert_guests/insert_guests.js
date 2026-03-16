const { PrismaClient } = require("@prisma/client");
const fs = require("fs");

const prisma = new PrismaClient();

async function main() {
  const guests = JSON.parse(fs.readFileSync("./guests.json", "utf-8"));
  let insertedCount = 0;
  let skippedCount = 0;

  for (const guest of guests) {
    const exists = await prisma.guests.findFirst({
      where: {
        groupcode: guest.groupcode,
        firstname: guest.firstname,
        lastname: guest.lastname,
      },
    });

    if (!exists) {
      await prisma.guests.create({
        data: guest,
      });
      insertedCount++;
      console.log(`✅ Inserted: ${guest.firstname} ${guest.lastname}`);
    } else {
      skippedCount++;
      console.log(
        `⏭️ Skipped (already exists): ${guest.firstname} ${guest.lastname}`
      );
    }
  }

  console.log(
    `\n✅ Done. Inserted: ${insertedCount}, Skipped: ${skippedCount}`
  );
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
