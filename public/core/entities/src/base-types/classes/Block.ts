import { Item, ExtendedItemProps } from "@bimo/core-utils-collection";
import { BlkvehuoirsCollection } from "./BlkvehuoirsCollection";
import { BlockActivitiesCollection } from "./BlockActivitiesCollection";
import { VehicleTask } from "./VehicleTask";
import { VehicleUnit } from "./VehicleUnit";
import { VehicleSchedule } from "./VehicleSchedule";
import { Trip } from "./Trip";
export interface BlockProps extends ExtendedItemProps {
  blkIntNumber?: string;
  blkNumber?: string;
  blkRouteUser?: string;
  blkPrepOutUser?: string;
  blkPrepInUser?: string;
  blkStartUpAtStationUser?: string;
  blkShutDownAtStationUser?: string;
  blkVehicleGroup?: string;
  blkVehicleType?: string;
  blkGarageUser?: string;
  blkVehicleNumber?: string;
  blkGroup?: string;
  blkIsFixed?: string;
  blkVehUnitCount?: number | string;
  blkRelTypeStrt?: string;
  blkRelTypeEnd?: string;
  blkConsistPatternUser?: string;
  blkNumOperation?: string;
  blkvehuoirs?: BlkvehuoirsCollection;
  blockActivities?: BlockActivitiesCollection;
}
export declare class Block extends Item<Block> {
  blkIntNumber?: string;
  blkNumber?: string;
  blkRouteUser?: string;
  blkPrepOutUser?: string;
  blkPrepInUser?: string;
  blkStartUpAtStationUser?: string;
  blkShutDownAtStationUser?: string;
  blkVehicleGroup?: string;
  blkVehicleType?: string;
  blkGarageUser?: string;
  blkVehicleNumber?: string;
  blkGroup?: string;
  blkIsFixed?: string;
  blkVehUnitCount: number;
  blkRelTypeStrt?: string;
  blkRelTypeEnd?: string;
  blkConsistPatternUser?: string;
  blkNumOperation?: string;
  blkvehuoirs: BlkvehuoirsCollection;
  blockActivities: BlockActivitiesCollection;
  constructor(props: BlockProps);
  get vehicleTasks(): VehicleTask[] | undefined;
  get vehicleUnitsAtStart(): VehicleUnit[] | undefined;
  get vehicleSchedule(): VehicleSchedule | undefined;
  get startTimeAsDuration(): import("luxon").Duration | undefined;
  get endTimeAsDuration(): import("luxon").Duration | undefined;
  sortBlockActivitiesByTime(): void;
  addTrip(trip: Trip): void;
  addVehuAtStart(vehu: VehicleUnit): void;
  removeTrip(trip: Trip): void;
  addTrips(...trips: Trip[]): void;
  get shortLoggingOutput(): string;
  get mediumLoggingOutput(): string;
  get longLoggingOutput(): string;
}
