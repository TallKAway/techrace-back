/*
  Warnings:

  - A unique constraint covering the columns `[raceId]` on the table `Speed` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Speed_raceId_key" ON "Speed"("raceId");
