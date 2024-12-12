import { ThemeProps } from "@/context/ThemeContext/Types";

export const lightTheme: ThemeProps = {
  colors: {
    primary: "#6D48FF",
    primaryVariant: "#5A44D2",
    secondary: "#2B2E33",
    secondaryVariant: "#797979",
    background: "#FFFFFF",
    surface: "#FFFFFF",
    error: "#B00020",
    onPrimary: "#FFFFFF",
    onSecondary: "#FFFFFF",
    onBackground: "#2B2E33",
    onSurface: "#2B2E33",
    onError: "#FFFFFF",
    disabled: "#9F86FF",
    mainBlack: "#242424",
  },
  custom: {
    progressIndicators: {
      color: "#6D48FF",
    },
    selectionControls: {
      color: "#6D48FF",
      overlay: "#EFEFF0",
      text: "#797979",
    },
    appBarTop: {
      header: "#6D48FF",
      notification: "#F374AC",
      divider: "#00000012",
      icon: "#FFFFFF",
      iconSwitched: "#2B2E33",
      text: "#FFFFFF",
    },

    bottomNavigation: {
      container: "#ffffff",
      activeIconText: "#6D48FF",
      inactiveIconsText: "#797979",
    },
    tabs: {
      container: "#ffffff",
      activeText: "#6D48FF",
      indicator: "#6D48FF",
      inactiveText: "#797979",
      divider: "#6D48FF",
    },
    chips: {
      selectedContainer: "#6D48FF",
      selectedText: "#FFFFFF",
      unselectedContainer: "#F6F6F6",
      unselectedText: "#797979",
      divider: "#6D48FF",
    },

    backgroundScreen: {
      caption: "#6D48FF",
      title: "#242424",
      paragraph: "#797979",
      subheading: "#6D48FF",
    },

    buttons: {
      container: "#6D48FF",
      icon: "#FFFFFF",
      text: "#FFFFFF",
      divider: "#6D48FF",
      disabled: "#9F86FF",
    },
    textFields: {
      text: "#797979",
      background: "#F6F6F6",
      icon: "#242424",
      indicator: "#6D48FF",
      placeholderDivider: "#F6F6F6",
    },
    text: {
      primary: "#6D48FF",
      secondary: "#242424",
      secondaryVariant: "#797979",
    },
  },
  isDark: false,
};
export const darkTheme: ThemeProps = {
  colors: {
    primary: "#6D48FF",
    primaryVariant: "#9175FB",
    secondary: "#CFD0D8",
    secondaryVariant: "#797979",
    background: "#2B2E33",
    surface: "#343739",
    error: "#CF6679",
    onPrimary: "#FFFFFF",
    onSecondary: "#2B2E33",
    onBackground: "#F8F8F9",
    onSurface: "#F8F8F9",
    onError: "#343030",

    mainBlack: "#242424",
  },
  custom: {
    progressIndicators: {
      color: "#6D48FF",
    },
    selectionControls: {
      color: "#6D48FF",
      overlay: "#2B2E33",
      text: "#CFD0D8",
    },
    appBarTop: {
      header: "#343739",
      notification: "#F374AC",
      divider: "#00000012",
      icon: "#6D48FF",
      iconSwitched: "#F8F8F9",
      text: "#6D48FF",
    },
    bottomNavigation: {
      container: "#343739",
      activeIconText: "#F8F8F9",
      inactiveIconsText: "#797979",
    },
    tabs: {
      container: "#343739",
      activeText: "#6D48FF",
      indicator: "#6D48FF",
      inactiveText: "#797979",
      divider: "#6D48FF",
    },
    chips: {
      selectedContainer: "#6D48FF",
      selectedText: "#FFFFFF",
      unselectedContainer: "#3E3E3E",
      unselectedText: "#CFD0D8",
      divider: "#6D48FF",
    },
    backgroundScreen: {
      caption: "#6D48FF",
      title: "#F8F8F9",
      paragraph: "#CFD0D8",
      subheading: "#6D48FF",
    },
    buttons: {
      container: "#6D48FF",
      icon: "#FFFFFF",
      text: "#FFFFFF",
      divider: "#6D48FF",
      disabled: "#797979",
    },
    textFields: {
      text: "#CFD0D8",
      background: "#2B2E33",
      icon: "#F8F8F9",
      indicator: "#6D48FF",
      placeholderDivider: "#797979",
    },
    drawer: {
      activatedIcon: "#F8F8F9",
      activatedText: "#F8F8F9",
      inactiveItem: "#797979",
      container: "#2B2E33",
      overlay: "#2B2E33",
      activatedOverlay: "#2B2E33",
    },
    text: {
      primary: "#6D48FF",
      secondary: "#F8F8F9",
      secondaryVariant: "#797979",
    },
  },
  isDark: true,
};
