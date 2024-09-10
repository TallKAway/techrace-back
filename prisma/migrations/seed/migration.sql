INSERT INTO "Race" ("timestamp", "start_Time", "end_Time", "distance") VALUES
    (to_timestamp(1704715188), to_timestamp(1704715188), to_timestamp(1704725988), 200),
    (to_timestamp(1704985188), to_timestamp(1704985188), to_timestamp(1704992388), 4000),
    (to_timestamp(1709711988), to_timestamp(1709711988), to_timestamp(1709719188), 4000),
    (to_timestamp(1709891988), to_timestamp(1709891988), to_timestamp(1709895588), 1500),
    (to_timestamp(1715162388), to_timestamp(1715162388), to_timestamp(1715165988), 2100),
    (to_timestamp(1719825768), to_timestamp(1719825768), to_timestamp(1719829368), 3000),
    (to_timestamp(1719915768), to_timestamp(1719915768), to_timestamp(1719922968), 1200),
    (to_timestamp(1720009368), to_timestamp(1720009368), to_timestamp(1720010688), 800),
    (to_timestamp(1720097088), to_timestamp(1720097088), to_timestamp(1720107888), 3200),
    (to_timestamp(1720194288), to_timestamp(1720194288), to_timestamp(1720195188), 300);

INSERT INTO "Speed" ("max_Speed", "average_Speed", "timestamp", "raceId", "speeds") VALUES
(15.0, 13.5, to_timestamp(1704715188), 1, '[{"date":"2024-07-11 18:00:00", "speed":12.0}, {"date":"2024-07-11 18:02:00", "speed":15.0}]'),
(20.0, 18.0, to_timestamp(1704985188), 2, '[{"date":"2024-07-11 18:00:00", "speed":18.0}, {"date":"2024-07-11 18:05:00", "speed":20.0}]'),
(10.0, 9.0, to_timestamp(1709711888), 3, '[{"date":"2024-07-11 18:00:00", "speed":9.0}, {"date":"2024-07-11 18:10:00", "speed":10.0}]'),
(25.0, 22.5, to_timestamp(1709891988), 4, '[{"date":"2024-07-11 18:00:00", "speed":20.0}, {"date":"2024-07-11 18:15:00", "speed":25.0}]'),
(18.0, 17.0, to_timestamp(1715162388), 5, '[{"date":"2024-07-11 18:00:00", "speed":16.0}, {"date":"2024-07-11 18:05:00", "speed":18.0}]'),
(22.0, 21.0, to_timestamp(1719825768), 6, '[{"date":"2024-07-11 18:00:00", "speed":20.0}, {"date":"2024-07-11 18:10:00", "speed":22.0}]'),
(14.0, 13.0, to_timestamp(1719915768), 7, '[{"date":"2024-07-11 18:00:00", "speed":12.0}, {"date":"2024-07-11 18:05:00", "speed":14.0}]'),
(30.0, 28.0, to_timestamp(1720090368), 8, '[{"date":"2024-07-11 18:00:00", "speed":25.0}, {"date":"2024-07-11 18:15:00", "speed":30.0}]'),
(16.0, 15.0, to_timestamp(1720097888), 9, '[{"date":"2024-07-11 18:00:00", "speed":14.0}, {"date":"2024-07-11 18:05:00", "speed":16.0}]'),
(12.0, 11.0, to_timestamp(1720194288), 10, '[{"date":"2024-07-11 18:00:00", "speed":10.0}, {"date":"2024-07-11 18:10:00", "speed":12.0}]');


INSERT INTO "Battery" ("battery_consumed", "battery_level", "start_voltage", "end_voltage", "timestamp", "raceId") VALUES (3.0,'[ {
                        "date": "2024-07-13T19:45:34.398Z",
                        "battery": 7.129687309
                    },
                    {
                        "date": "2024-07-13T19:46:34.398Z",
                        "battery": 7.02304697
                    },
                    {
                        "date": "2024-07-13T19:47:34.398Z",
                        "battery": 7.129687309
                    },
                    {
                        "date": "2024-07-13T19:48:34.398Z",
                        "battery": 7.17539072
                    },
                    {
                        "date": "2024-07-13T19:49:34.398Z",
                        "battery": 7.099218845
                    },
                    {
                        "date": "2024-07-13T19:50:34.398Z",
                        "battery": 7.072558403
                    },
                    {
                        "date": "2024-07-13T19:51:34.398Z",
                        "battery": 7.045898438
                    },
                    {
                        "date": "2024-07-13T19:52:34.398Z",
                        "battery": 5.738265363e-39
                    },
                    {
                        "date": "2024-07-13T19:53:34.398Z",
                        "battery": 7.285840034
                    },
                    {
                        "date": "2024-07-13T19:54:34.398Z",
                        "battery": 7.000000477
                    }]',7.129687309,7.095410347,to_timestamp(1704715188),1), (3.0,'[ {
                        "date": "2024-07-13T19:45:34.398Z",
                        "battery": 7.129687309
                    },
                    {
                        "date": "2024-07-13T19:46:34.398Z",
                        "battery": 7.02304697
                    },
                    {
                        "date": "2024-07-13T19:47:34.398Z",
                        "battery": 7.129687309
                    },
                    {
                        "date": "2024-07-13T19:48:34.398Z",
                        "battery": 7.17539072
                    },
                    {
                        "date": "2024-07-13T19:49:34.398Z",
                        "battery": 7.099218845
                    },
                    {
                        "date": "2024-07-13T19:50:34.398Z",
                        "battery": 7.072558403
                    },
                    {
                        "date": "2024-07-13T19:51:34.398Z",
                        "battery": 7.045898438
                    },
                    {
                        "date": "2024-07-13T19:52:34.398Z",
                        "battery": 5.738265363e-39
                    },
                    {
                        "date": "2024-07-13T19:53:34.398Z",
                        "battery": 7.285840034
                    },
                    {
                        "date": "2024-07-13T19:54:34.398Z",
                        "battery": 7.000000477
                    }]',7.129687309,7.095410347,to_timestamp(1704985188),2);


INSERT INTO "OrientationRecord" ("timestamp", "orientation", "speed", "raceId") VALUES
    (to_timestamp(1704715188), 'NORTH', 20, 1),
    (to_timestamp(1704715188), 'SOUTH', 20, 1),
    (to_timestamp(1704715188), 'EAST', 20, 1),

    (to_timestamp(1704985188), 'EAST', 20, 2),
    (to_timestamp(1704985188), 'WEST', 20, 2),
    (to_timestamp(1704985188), 'SOUTH', 20, 2),

    (to_timestamp(1709711988), 'EAST', 20, 3),
    (to_timestamp(1709711988), 'NORTH', 20, 3),
    (to_timestamp(1709711988), 'SOUTH', 20, 3),

    (to_timestamp(1709891988), 'EAST', 20, 4),
    (to_timestamp(1709891988), 'NORTH', 20, 4),
    (to_timestamp(1709891988), 'SOUTH', 20, 4),

    (to_timestamp(1715162388), 'EAST', 20, 5),
    (to_timestamp(1715162388), 'NORTH', 20, 5),
    (to_timestamp(1715162388), 'SOUTH', 20, 5),

    (to_timestamp(1719825768), 'EAST', 20, 6),
    (to_timestamp(1719825768), 'NORTH', 20, 6),
    (to_timestamp(1719825768), 'SOUTH', 20, 6),

    (to_timestamp(1719915768), 'EAST', 20, 7),
    (to_timestamp(1719915768), 'NORTH', 20, 7),
    (to_timestamp(1719915768), 'SOUTH', 20, 7),

    (to_timestamp(1720009368), 'EAST', 20, 8),
    (to_timestamp(1720009368), 'NORTH', 20, 8),
    (to_timestamp(1720009368), 'SOUTH', 20, 8),

    (to_timestamp(1720097088), 'EAST', 20, 9),
    (to_timestamp(1720097088), 'NORTH', 20, 9),
    (to_timestamp(1720097088), 'SOUTH', 20, 9),

    (to_timestamp(1720194288), 'EAST', 20, 10),
    (to_timestamp(1720194288), 'NORTH', 20, 10),
    (to_timestamp(1720194288), 'SOUTH', 20, 10);