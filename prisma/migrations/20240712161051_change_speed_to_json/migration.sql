/*
  Warnings:

  - You are about to drop the column `speed` on the `Speed` table. All the data in the column will be lost.
  - Added the required column `speeds` to the `Speed` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Speed" DROP COLUMN "speed",
ADD COLUMN     "speeds" JSONB NOT NULL;
