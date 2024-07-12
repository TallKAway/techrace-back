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
(1, 15.0, 13.5, to_timestamp(1704715188), 1, '[{"date":"2024-07-11 18:00:00", "speed":12.0}, {"date":"2024-07-11 18:02:00", "speed":15.0}]'),
(2, 20.0, 18.0, to_timestamp(1704985188), 2, '[{"date":"2024-07-11 18:00:00", "speed":18.0}, {"date":"2024-07-11 18:05:00", "speed":20.0}]'),
(3, 10.0, 9.0, to_timestamp(1709711888), 3, '[{"date":"2024-07-11 18:00:00", "speed":9.0}, {"date":"2024-07-11 18:10:00", "speed":10.0}]'),
(4, 25.0, 22.5, to_timestamp(1709891988), 4, '[{"date":"2024-07-11 18:00:00", "speed":20.0}, {"date":"2024-07-11 18:15:00", "speed":25.0}]'),
(5, 18.0, 17.0, to_timestamp(1715162388), 5, '[{"date":"2024-07-11 18:00:00", "speed":16.0}, {"date":"2024-07-11 18:05:00", "speed":18.0}]'),
(6, 22.0, 21.0, to_timestamp(1719825768), 6, '[{"date":"2024-07-11 18:00:00", "speed":20.0}, {"date":"2024-07-11 18:10:00", "speed":22.0}]'),
(7, 14.0, 13.0, to_timestamp(1719915768), 7, '[{"date":"2024-07-11 18:00:00", "speed":12.0}, {"date":"2024-07-11 18:05:00", "speed":14.0}]'),
(8, 30.0, 28.0, to_timestamp(1720090368), 8, '[{"date":"2024-07-11 18:00:00", "speed":25.0}, {"date":"2024-07-11 18:15:00", "speed":30.0}]'),
(9, 16.0, 15.0, to_timestamp(1720097888), 9, '[{"date":"2024-07-11 18:00:00", "speed":14.0}, {"date":"2024-07-11 18:05:00", "speed":16.0}]'),
(10, 12.0, 11.0, to_timestamp(1720194288), 10, '[{"date":"2024-07-11 18:00:00", "speed":10.0}, {"date":"2024-07-11 18:10:00", "speed":12.0}]');


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