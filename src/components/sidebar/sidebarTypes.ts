export interface IOption {
  id: string;
  redirectRoute: string;
  activeOnPathes: Array<string>;
  optionText: string;
}

export interface ISidebarOptionProps {
  option: IOption;
  selected?: boolean;
  // allowTooltip?: boolean;
  // customIconPath?: string;
  className?: string;
}
  