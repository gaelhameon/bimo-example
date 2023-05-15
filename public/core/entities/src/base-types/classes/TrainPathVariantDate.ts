import { Item, ExtendedItemProps } from "@bimo/core-utils-collection";
export interface TrainPathVariantDateProps extends ExtendedItemProps {
  trnpdDate?: string;
  trnpdEffectiveDate?: string;
  trnpdStatus?: string;
  trnpdStatusOir?: string;
  trnpdIsCanceledOrInfeasible?: string;
}
export declare class TrainPathVariantDate extends Item<TrainPathVariantDate> {
  trnpdDate?: string;
  trnpdEffectiveDate?: string;
  trnpdStatus?: string;
  _trnpdStatusOir?: string;
  trnpdIsCanceledOrInfeasible?: string;
  constructor(props: TrainPathVariantDateProps);
  get shortLoggingOutput(): string;
  get trnpdStatusOir(): string | undefined;
  set trnpdStatusOir(v: string | undefined);
}
