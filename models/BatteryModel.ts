import { JsonValue } from "@prisma/client/runtime/library";

export interface IBattery {
  id: number;
  battery_consumed: number;
  battery_level: JsonValue;
  start_voltage: number;
  end_voltage: number;
  raceId: number;
}
