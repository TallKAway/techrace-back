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

INSERT INTO "Race" VALUES
    (1, to_timestamp(1704715188), to_timestamp(1704715188), to_timestamp(1704725988), 200),
    (2, to_timestamp(1704985188), to_timestamp(1704985188), to_timestamp(1704992388), 4000),
    (3, to_timestamp(1709711988), to_timestamp(1709711988), to_timestamp(1709719188), 4000),
    (4, to_timestamp(1709891988), to_timestamp(1709891988), to_timestamp(1709895588), 1500),
    (5, to_timestamp(1715162388), to_timestamp(1715162388), to_timestamp(1715165988), 2100),
    (6, to_timestamp(1719825768), to_timestamp(1719825768), to_timestamp(1719829368), 3000),
    (7, to_timestamp(1719915768), to_timestamp(1719915768), to_timestamp(1719922968), 1200),
    (8, to_timestamp(1720009368), to_timestamp(1720009368), to_timestamp(1720010688), 800),
    (9, to_timestamp(1720097088), to_timestamp(1720097088), to_timestamp(1720107888), 3200),
    (10, to_timestamp(1720194288), to_timestamp(1720194288), to_timestamp(1720195188), 300);

INSERT INTO "Speed" VALUES
    (1, 20, 50, 30, to_timestamp(1704715188), 1),
    (2, 30, 50, 30, to_timestamp(1704715188), 1),
    (3, 40, 50, 30, to_timestamp(1704715188), 1),

    (4, 20, 50, 30, to_timestamp(1704985188), 2),
    (5, 25, 50, 30, to_timestamp(1704985188), 2),
    (6, 50, 50, 30, to_timestamp(1704985188), 2),

    (7, 20, 50, 30, to_timestamp(1709711988), 3),
    (8, 20, 50, 30, to_timestamp(1709711988), 3),
    (9, 20, 50, 30, to_timestamp(1709711988), 3),

    (10, 20, 50, 30, to_timestamp(1709891988), 4),
    (11, 20, 50, 30, to_timestamp(1709891988), 4),
    (12, 20, 50, 30, to_timestamp(1709891988), 4),

    (13, 20, 50, 30, to_timestamp(1715162388), 5),
    (14, 20, 50, 30, to_timestamp(1715162388), 5),
    (15, 20, 50, 30, to_timestamp(1715162388), 5),

    (16, 20, 50, 30, to_timestamp(1719825768), 6),
    (17, 20, 50, 30, to_timestamp(1719825768), 6),
    (18, 20, 50, 30, to_timestamp(1719825768), 6),

    (19, 20, 50, 30, to_timestamp(1719915768), 7),
    (20, 20, 50, 30, to_timestamp(1719915768), 7),
    (21, 20, 50, 30, to_timestamp(1719915768), 7),

    (22, 20, 50, 30, to_timestamp(1709891988), 8),
    (23, 20, 50, 30, to_timestamp(1709891988), 8),
    (24, 20, 50, 30, to_timestamp(1709891988), 8),

    (25, 20, 50, 30, to_timestamp(1720009368), 9),
    (26, 20, 50, 30, to_timestamp(1720009368), 9),
    (27, 20, 50, 30, to_timestamp(1720009368), 9),

    (28, 20, 50, 30, to_timestamp(1720097088), 10),
    (29, 20, 50, 30, to_timestamp(1720097088), 10),
    (30, 20, 50, 30, to_timestamp(1720097088), 10);

INSERT INTO "OrientationRecord" VALUES
    (1, to_timestamp(1704715188), 'NORTH', 20, 1),
    (2, to_timestamp(1704715188), 'SOUTH', 20, 1),
    (3, to_timestamp(1704715188), 'EAST', 20, 1),

    (4, to_timestamp(1704985188), 'EAST', 20, 2),
    (5, to_timestamp(1704985188), 'WEST', 20, 2),
    (6, to_timestamp(1704985188), 'SOUTH', 20, 2),

    (7, to_timestamp(1709711988), 'EAST', 20, 3),
    (8, to_timestamp(1709711988), 'NORTH', 20, 3),
    (9, to_timestamp(1709711988), 'SOUTH', 20, 3),

    (10, to_timestamp(1709891988), 'EAST', 20, 4),
    (11, to_timestamp(1709891988), 'NORTH', 20, 4),
    (12, to_timestamp(1709891988), 'SOUTH', 20, 4),

    (13, to_timestamp(1715162388), 'EAST', 20, 5),
    (14, to_timestamp(1715162388), 'NORTH', 20, 5),
    (15, to_timestamp(1715162388), 'SOUTH', 20, 5),

    (16, to_timestamp(1719825768), 'EAST', 20, 6),
    (17, to_timestamp(1719825768), 'NORTH', 20, 6),
    (18, to_timestamp(1719825768), 'SOUTH', 20, 6),

    (20, to_timestamp(1719915768), 'EAST', 20, 7),
    (21, to_timestamp(1719915768), 'NORTH', 20, 7),
    (22, to_timestamp(1719915768), 'SOUTH', 20, 7),

    (23, to_timestamp(1720009368), 'EAST', 20, 8),
    (24, to_timestamp(1720009368), 'NORTH', 20, 8),
    (25, to_timestamp(1720009368), 'SOUTH', 20, 8),

    (26, to_timestamp(1720097088), 'EAST', 20, 9),
    (27, to_timestamp(1720097088), 'NORTH', 20, 9),
    (28, to_timestamp(1720097088), 'SOUTH', 20, 9),

    (29, to_timestamp(1720194288), 'EAST', 20, 10),
    (30, to_timestamp(1720194288), 'NORTH', 20, 10),
    (31, to_timestamp(1720194288), 'SOUTH', 20, 10);