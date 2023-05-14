import { Item, ExtendedItemProps } from "@bimo/core-utils-collection";
import { PlacesCollection } from "./PlacesCollection";
export interface PlaceProps extends ExtendedItemProps {
  bimoId?: string;
  plcIdentifier?: string;
  plcDescription?: string;
  plcReferencePlace?: string;
  plcType?: string;
  plcDistrict?: string;
  plcAlterName?: string;
  plcNumber?: string;
  plcFlowMethod?: string;
  plcDataGroup?: string;
  locaXCoord?: string;
  locaYCoord?: string;
  locaLocStatus?: string;
  locaSegmentExtId?: string;
  locaDistInter1?: string;
  locaDistInter2?: string;
  locaSegmentSide?: string;
  locaLocMethod?: string;
  locaLocApproved?: string;
  plcLastApprovedSegmentName?: string;
  plcLastApprovedSegmentSide?: string;
  plcLastApprovedIntersect1?: string;
  plcLastApprovedIntersect2?: string;
  plcLastApprovedDistInter1?: string;
  plcLastApprovedDistInter2?: string;
  plcRim?: string;
  relatedPlaces?: Set<Place>;
}
export declare class Place extends Item<Place> {
  bimoId?: string;
  plcIdentifier: string;
  plcDescription?: string;
  plcReferencePlace?: string;
  plcType?: string;
  plcDistrict?: string;
  plcAlterName?: string;
  plcNumber?: string;
  plcFlowMethod?: string;
  plcDataGroup?: string;
  locaXCoord?: string;
  locaYCoord?: string;
  locaLocStatus?: string;
  locaSegmentExtId?: string;
  locaDistInter1?: string;
  locaDistInter2?: string;
  locaSegmentSide?: string;
  locaLocMethod?: string;
  locaLocApproved?: string;
  plcLastApprovedSegmentName?: string;
  plcLastApprovedSegmentSide?: string;
  plcLastApprovedIntersect1?: string;
  plcLastApprovedIntersect2?: string;
  plcLastApprovedDistInter1?: string;
  plcLastApprovedDistInter2?: string;
  plcRim?: string;
  relatedPlaces: Set<Place>;
  parent?: PlacesCollection;
  constructor(props: PlaceProps);
  get veryShortLabel(): string;
  get shortLabel(): string;
  get shortLoggingOutput(): string;
  get mediumLoggingOutput(): string;
  /** @returns the place's reference place, or the place itself if it's a reference place, or null */
  get referencePlace(): Place | null;
  get isRefPlace(): boolean;
  get childrenPlaces(): Place[];
  get isLocated(): boolean;
  get mapZone(): string | null;
  resetRelatedPlaces(): void;
}
export default Place;
