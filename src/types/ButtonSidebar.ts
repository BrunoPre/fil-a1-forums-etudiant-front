export interface ButtonSidebar {
  buttonName: string;
  label: string;
  iconPath: string;
  iconBoxIcon: string; // if no icon is available in the `assets` folder, icon from BoxIcons is fetched
  route: string;
}
