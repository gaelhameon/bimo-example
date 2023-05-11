import { Item, ExtendedItemProps } from "@bimo/core-utils-collection";
import { Block } from "./Block";
import { Trip } from "./Trip";
import { StringByLanguageCode } from "@bimo/core-global-types";
import BlockActivitiesCollection from "./BlockActivitiesCollection";
import Place from "./Place";
export interface BlockActivityProps extends ExtendedItemProps {
    blkactVehicleActivityTypeNo: string;
    blkactTripNo?: string;
    blkactHasFixedLink?: string;
    blkactCchgNo?: string;
    blkactVehicleStandbyNo?: string;
    blkactMaintenanceNo?: string;
    bimoId?: string;
    activityNameByLanguageCode?: StringByLanguageCode;
}
export type BlockActivityEntityClassKey = "Trip" | "ConsistChange" | "VehicleStandby" | "Maintenance";
export declare class BlockActivity extends Item<BlockActivity> {
    blkactVehicleActivityTypeNo: string;
    blkactTripNo: string;
    blkactHasFixedLink?: string;
    blkactCchgNo: string;
    blkactVehicleStandbyNo: string;
    blkactMaintenanceNo: string;
    bimoId?: string;
    activityEntityClassKey: BlockActivityEntityClassKey;
    activityNameByLanguageCode: StringByLanguageCode;
    parent?: BlockActivitiesCollection;
    constructor(props: BlockActivityProps);
    get block(): Block;
    get vehicleTasks(): import("./VehicleTask").VehicleTask[];
    get blockSections(): import("./BlockSection").BlockSection[];
    setNewTrip(newTrip: Trip): void;
    get vehicleSchedule(): import("./VehicleSchedule").VehicleSchedule;
    get activityEntityItem(): import("./BlockActivityItem").BlockActivityItem<import("./BlockActivityItem").BaseBlockActivityItem>;
    set activityEntityItem(v: import("./BlockActivityItem").BlockActivityItem<import("./BlockActivityItem").BaseBlockActivityItem>);
    get startTime(): string;
    get startTimeAsDuration(): import("luxon").Duration;
    get endTime(): string;
    get endTimeAsDuration(): import("luxon").Duration;
    get startPlaceId(): string;
    get endPlaceId(): string;
    get shortLoggingOutput(): string;
    get mediumLoggingOutput(): string;
    get longLoggingOutput(): string;
    improveEndPlacePrecision(morePreciseEndPlace: Place): void;
    improveStartPlacePrecision(morePreciseStartPlace: Place): void;
    shiftTimes(shiftInSeconds: number): void;
    get _indexInSortedParent(): number;
    getNthActivityFromThisOne(n: number): BlockActivity;
    get nextBlockActivity(): BlockActivity;
    get previousBlockActivity(): BlockActivity;
}
export default BlockActivity;
