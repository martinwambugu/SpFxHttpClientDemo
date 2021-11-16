import { ButtonClickedCallBack, ICountryListItem } from "../../../models";

export interface ISpFxHttpClientDemoProps {
  spListItems: ICountryListItem[];
  onGetListItems?: ButtonClickedCallBack;
  onAddListItem?: ButtonClickedCallBack;
  onUpdateListItem?: ButtonClickedCallBack;
  onDeleteListItem?: ButtonClickedCallBack;
}
