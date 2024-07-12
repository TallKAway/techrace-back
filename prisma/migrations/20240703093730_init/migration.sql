-- CreateEnum
CREATE TYPE "Orientation" AS ENUM ('NORTH', 'EAST', 'SOUTH', 'WEST');

-- CreateTable
CREATE TABLE "Race" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "start_Time" TIMESTAMP(3) NOT NULL,
    "end_Time" TIMESTAMP(3) NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Race_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Speed" (
    "id" SERIAL NOT NULL,
    "speed" DOUBLE PRECISION NOT NULL,
    "max_Speed" DOUBLE PRECISION NOT NULL,
    "average_Speed" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "raceId" INTEGER NOT NULL,

    CONSTRAINT "Speed_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrientationRecord" (
    "id" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "orientation" "Orientation" NOT NULL DEFAULT 'NORTH',
    "speed" DOUBLE PRECISION NOT NULL,
    "raceId" INTEGER NOT NULL,

    CONSTRAINT "OrientationRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Speed" ADD CONSTRAINT "Speed_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrientationRecord" ADD CONSTRAINT "OrientationRecord_raceId_fkey" FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE RESTRICT ON UPDATE CASCADE;