import { JsonValue } from '@prisma/client/runtime/library';

export interface ISpeed {
  id: number;
  speeds: JsonValue;
  max_Speed: number;
  average_Speed: number;
  timestamp: Date;
  raceId: number;
}
