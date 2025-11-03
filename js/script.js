function changeTheme(theme) {
  theme === "light"
    ? (document.documentElement.dataset.theme = "light")
    : (document.documentElement.dataset.theme = "dark");
}

document.documentElement.dataset.theme = "dark";
