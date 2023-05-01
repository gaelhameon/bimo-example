import { TripShift, TripShiftProps } from "./TripShift";

const childClasses = [TripShift];
import { getAllChildClasses } from "@bimo/core-utils-serialization";
import { Collection, ExtendedCollectionProps } from "@bimo/core-utils-collection";

export interface TripShiftsCollectionProps
  extends ExtendedCollectionProps<TripShift, TripShiftProps> {}

export class TripShiftsCollection extends Collection<TripShift, TripShiftProps> {
  constructor(props: TripShiftsCollectionProps = {}) {
    super({
      itemName: "TripShift",
      ItemConstructor: TripShift,
      items: props.items,
      parent: props.parent,
    });
  }
}

TripShiftsCollection.allChildClasses = getAllChildClasses(childClasses);

export default TripShiftsCollection;