import { VehicleUnit, VehicleUnitProps } from "./VehicleUnit";

const childClasses = [VehicleUnit];
import { getAllChildClasses } from "@bimo/core-utils-serialization";
import { Collection, ExtendedCollectionProps } from "@bimo/core-utils-collection";

export interface VehicleUnitsCollectionProps
  extends ExtendedCollectionProps<VehicleUnit, VehicleUnitProps> {}

export class VehicleUnitsCollection extends Collection<VehicleUnit, VehicleUnitProps> {
  constructor(props: VehicleUnitsCollectionProps = {}) {
    super({
      itemName: "VehicleUnit",
      ItemConstructor: VehicleUnit,
      idPropName: `vehuInternalNumber`,
      labelPropName: `vehuIdentifierUser`,
      ...props,
    });
  }
}

VehicleUnitsCollection.allChildClasses = getAllChildClasses(childClasses);

export default VehicleUnitsCollection;