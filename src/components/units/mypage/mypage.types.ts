import { IQuery, IUseditem } from "../../../commons/types/generated/types";

export interface IMypageUIProps {
  data: Pick<IQuery, "fetchUseditemsISold"> | undefined;
}

export interface IMypageItemProps {
  el: IUseditem;
}
