-- CreateTable
CREATE TABLE "Battery" (
    "id" SERIAL NOT NULL,
    "battery_consumed" DOUBLE PRECISION NOT NULL,
    "battery_level" JSONB NOT NULL,
    "start_voltage" DOUBLE PRECISION NOT NULL,
    "end_voltage" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "raceId" INTEGER NOT NULL,

    CONSTRAINT "Battery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Battery_raceId_key" ON "Battery"("raceId");

-- AddForeignKey
ALTER TABLE "Battery" ADD CONSTRAINT "Battery_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
