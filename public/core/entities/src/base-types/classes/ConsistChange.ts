import { Item, ExtendedItemProps } from "@bimo/core-utils-collection";
import { BlockActivityItem } from "./BlockActivityItem";
import { BlockActivity } from "./BlockActivity";
import { Place } from "./Place";
import { ConsistChangesCollection } from "./ConsistChangesCollection";
import { Trip } from "./Trip";
export interface ConsistChangeProps extends ExtendedItemProps {
  cchgActivity?: string;
  _cchgInternalNumber?: string;
  _cchgBuildTime?: string;
  cchgEvent?: string;
  cchgEventStatus?: string;
  cchgPlaceStart?: string;
  _cchgTimeStart?: string;
  cchgDuration?: string;
  cchgOnTripNo?: string;
  cchgOrigOnTripNo?: string;
  cchgUnitCount?: string;
  cchgOnTrip?: string;
  cchgIsRequired?: string;
  cchgRelatedBlock?: string;
  cchgRelatedBlockIntNo?: string;
  cchgOntrpBlock?: string;
  cchgOntrpBlockIntNo?: string;
  cchgComment?: string;
  cchgPosition?: string;
  cchgTimeSpecified?: string;
  cchgOperatesSun?: string;
  cchgOperatesMon?: string;
  cchgOperatesTue?: string;
  cchgOperatesWed?: string;
  cchgOperatesThu?: string;
  cchgOperatesFri?: string;
  cchgOperatesSat?: string;
  cchgFromNote?: string;
  cchgToNote?: string;
}
export declare class ConsistChange
  extends Item<ConsistChange>
  implements BlockActivityItem<ConsistChange>
{
  cchgActivity?: string;
  _cchgInternalNumber?: string;
  _cchgBuildTime?: string;
  cchgEvent?: string;
  cchgEventStatus?: string;
  cchgPlaceStart: string;
  _cchgTimeStart?: string;
  cchgDuration?: string;
  cchgOnTripNo?: string;
  cchgOrigOnTripNo?: string;
  cchgUnitCount?: string;
  cchgOnTrip?: string;
  cchgIsRequired?: string;
  cchgRelatedBlock?: string;
  cchgRelatedBlockIntNo?: string;
  cchgOntrpBlock?: string;
  cchgOntrpBlockIntNo?: string;
  cchgComment?: string;
  cchgPosition?: string;
  cchgTimeSpecified?: string;
  cchgOperatesSun?: string;
  cchgOperatesMon?: string;
  cchgOperatesTue?: string;
  cchgOperatesWed?: string;
  cchgOperatesThu?: string;
  cchgOperatesFri?: string;
  cchgOperatesSat?: string;
  cchgFromNote?: string;
  cchgToNote?: string;
  parent?: ConsistChangesCollection;
  static blkActIdPropName: string;
  static itemIdPropName: string;
  constructor(props: ConsistChangeProps);
  setNewTrip(newTrip: Trip): void;
  get cchgInternalNumber(): string;
  set cchgInternalNumber(v: string);
  get cchgBuildTime(): string | undefined;
  set cchgBuildTime(v: string | undefined);
  get cchgTimeStart(): string;
  set cchgTimeStart(v: string);
  get shortLoggingOutput(): string;
  get blkactVehicleActivityTypeNo(): string;
  get setOfBlockActivities(): Set<BlockActivity>;
  get blockActivities(): BlockActivity[];
  addBlockActivity(newBlockActivity: BlockActivity): void;
  removeBlockActivity(blockActivity: BlockActivity): void;
  get blockActivity(): BlockActivity;
  get block(): import("./Block").Block | null;
  get vehicleTasks(): import("./VehicleTask").VehicleTask[] | null;
  get vehicleSchedule(): import("./VehicleSchedule").VehicleSchedule | null;
  get startTime(): string;
  get startTimeAsDuration(): any;
  get endTime(): string;
  get endTimeAsDuration(): any;
  get startPlaceId(): string;
  get endPlaceId(): string;
  improveStartPlacePrecision(morePreciseStartPlace: Place): void;
  improveEndPlacePrecision(morePreciseEndPlace: Place): void;
  shiftTimes(shiftInSeconds: number): void;
}
