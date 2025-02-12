/*
  Warnings:

  - Made the column `groupcode` on table `Guests` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Guests" ALTER COLUMN "groupcode" SET NOT NULL;

-- CreateIndex
CREATE INDEX "Guests_groupcode_idx" ON "Guests"("groupcode");
