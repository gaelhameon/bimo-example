import { Item, ExtendedItemProps } from "@bimo/core-utils-collection";
import { Block } from "./Block";
export interface BlkvehuoirProps extends ExtendedItemProps {
    blkvehuoirRank: number;
    vehuUniqueId: string;
    bimoId?: string;
}
export declare class Blkvehuoir extends Item<Blkvehuoir> {
    blkvehuoirRank: number;
    vehuUniqueId: string;
    bimoId?: string;
    constructor(props: BlkvehuoirProps);
    get block(): Block;
    get vehicleSchedule(): import("./VehicleSchedule").VehicleSchedule;
    get vehicleUnit(): import("./VehicleUnit").VehicleUnit;
}
export default Blkvehuoir;
