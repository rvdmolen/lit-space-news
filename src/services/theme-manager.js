import { THEMES } from '../model/constants.js';

const isDarkMode = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;


function setInitialTheme() {
  const themeFromSessionStorage = sessionStorage.getItem("current-color-theme");
  let colorMode;
  if (themeFromSessionStorage) {
    colorMode = themeFromSessionStorage;
    document.querySelector('html').style['color-scheme'] = colorMode;
    return colorMode;
  }

  colorMode = isDarkMode() ? THEMES.DARK : THEMES.LIGHT;
  document.querySelector('html').style['color-scheme'] = colorMode;
  sessionStorage.setItem("current-color-theme", colorMode);
  return colorMode;
}


function handleThemeChange(theme) {
  sessionStorage.setItem("current-color-theme", theme);
  return theme;
}


export const themeManager  = {
  setInitialTheme,
  handleThemeChange
}
