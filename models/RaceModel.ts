import { IBattery } from './BatteryModel';
import { ISpeed } from './SpeedModel';
export interface IRace {
  id: number;
  timestamp: Date;
  start_Time: Date;
  end_Time: Date;
  distance?: number;
  speeds?: Array<ISpeed>;
  battery?: Array<IBattery>;
}
