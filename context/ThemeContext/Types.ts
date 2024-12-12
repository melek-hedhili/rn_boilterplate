import { PropsWithChildren } from "react";

export type AppearanceProps = "light" | "dark" | null;

export type ThemeProviderProps = PropsWithChildren & {
  defaultTheme: ThemeProps | null;
  darkTheme: ThemeProps | null;
  scheme?: AppearanceProps;
};
export type ThemeState = {
  theme: ThemeComponentsProps;
  appearance?: AppearanceProps;
  loadingTheme: boolean;
};
export interface ThemeValues extends ThemeState {
  switchTheme: () => void;
}
//****************** */
export type ThemeDrawerProps = {
  container: string;
  activatedIcon: string;
  activatedText: string;
  activatedOverlay: string;
  inactiveItem: string;
  overlay: string;
};
export type ThemeAppBarTop = {
  header: string;
  notification: string;
  divider: string;
  icon: string;
  iconSwitched: string;
  text: string;
};
export type ThemeBottomNavigation = {
  container: string;
  activeIconText: string;
  inactiveIconsText: string;
};
export type ThemeTabsProps = {
  container: string;
  activeText: string;
  inactiveText: string;
  indicator: string;
  divider: string;
};
export type ThemeButtonsProps = {
  container: string;
  icon: string;
  text: string;
  divider: string;
  disabled: string;
};
export type ThemeModeButtonsProps = "text" | "outlined" | "contained";
export type ThemeTextFieldsProps = {
  icon: string;
  text: string;
  indicator: string;
  background: string;
  placeholderDivider: string;
};
export type ThemeBackgroundScreenProps = {
  subheading: string;
  title: string;
  paragraph: string;
  caption: string;
};
export type ThemeListsProps = {
  container: string;
  text: string;
  icon: string;
  metadataText: string;
  divider: string;
};
export type ThemeSelectionControlsProps = {
  color: string;
  overlay: string;
  text: string;
};
export type ThemeDividersProps = {
  divider: string;
};
export type ThemeProgressIndicatorsProps = {
  color: string;
};
export type ThemeAppBarBottomProps = {
  container: string;
  icon: string;
};
export type ThemeCardsProps = {
  container: string;
  headerText: string;
  subHeader: string;
  supportingText: string;
  icon: string;
  divider: string;
  button: string;
};
export type ThemeDialogsProps = {
  container: string;
  title: string;
  supportingText: string;
  button: string;
  overlay: string;
};
export type ThemeBannersProps = {
  container: string;
  text: string;
  button: string;
  divider: string;
};
export type ThemeFloatingButtonsProps = {
  container: string;
  icon: string;
  text: string;
  divider: string;
};
export type ThemeChipsProps = {
  selectedContainer: string;
  selectedText: string;
  unselectedText: string;
  unselectedContainer: string;
  divider: string;
};
export type ThemeMenusProps = {
  container: string;
  text: string;
  icon: string;
  overlay: string;
};
export type ThemeSnackbarsProps = {
  container: string;
  buttonText: string;
};
export type ThemeTimePickersProps = {
  container: string;
  text: string;
  overlay: string;
  shape: string;
};
export type ThemeBadgeProps = {
  container: string;
  text: string;
};
export type ThemeEmptyStateProps = {
  title: string;
  supportingText: string;
};
export type ThemeTextProps = {
  primary: string; //purple
  secondary: string; // Black
  secondaryVariant: string; //Secondary Black
};

export type ThemeColorsProps = {
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
  overlay?: string;
  disabled?: string;
  mainBlack?: string;
};
export type ThemeCustomComponentsProps = {
  backgroundScreen?: ThemeBackgroundScreenProps;
  emptyState?: ThemeEmptyStateProps;
  appBarBottom?: ThemeAppBarBottomProps;
  appBarTop?: ThemeAppBarTop;
  banners?: ThemeBannersProps;
  bottomNavigation?: ThemeBottomNavigation;
  buttons?: ThemeButtonsProps;
  floatingButtons?: ThemeFloatingButtonsProps;
  cards?: ThemeCardsProps;
  chips?: ThemeChipsProps;
  dialogs?: ThemeDialogsProps;
  dividers?: ThemeDividersProps;
  lists?: ThemeListsProps;
  menus?: ThemeMenusProps;
  drawer?: ThemeDrawerProps;
  progressIndicators?: ThemeProgressIndicatorsProps;
  selectionControls?: ThemeSelectionControlsProps;
  snackbars?: ThemeSnackbarsProps;
  tabs?: ThemeTabsProps;
  textFields?: ThemeTextFieldsProps;
  timePickers?: ThemeTimePickersProps;
  badge?: ThemeBadgeProps;
  text?: ThemeTextProps;
};
export type ThemeProps = {
  colors: ThemeColorsProps;
  custom?: ThemeCustomComponentsProps;

  isDark: boolean;
};

export type ThemeComponentsProps = ThemeProps & {
  backgroundScreen: () => ThemeBackgroundScreenProps;
  emptyState: () => ThemeEmptyStateProps;
  appBarBottom: () => ThemeAppBarBottomProps;
  appBarTop: () => ThemeAppBarTop;
  banners: () => ThemeBannersProps;
  bottomNavigation: () => ThemeBottomNavigation;
  buttons: (mode?: ThemeModeButtonsProps) => ThemeButtonsProps;
  floatingButtons: () => ThemeFloatingButtonsProps;
  cards: () => ThemeCardsProps;
  chips: () => ThemeChipsProps;
  dialogs: () => ThemeDialogsProps;
  dividers: () => ThemeDividersProps;
  lists: () => ThemeListsProps;
  menus: () => ThemeMenusProps;
  drawer: () => ThemeDrawerProps;
  progressIndicators: () => ThemeProgressIndicatorsProps;
  selectionControls: () => ThemeSelectionControlsProps;
  snackbars: () => ThemeSnackbarsProps;
  tabs: () => ThemeTabsProps;
  textFields: () => ThemeTextFieldsProps;
  timePickers: () => ThemeTimePickersProps;
  badge: () => ThemeBadgeProps;
  text: () => ThemeTextProps;
};
