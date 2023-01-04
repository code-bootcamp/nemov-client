interface Theme {
  backgroundColor: string;
  color: string;
}

interface ThemeGroup {
  themeGroup01: Theme;
  themeGroup02: Theme;
  themeGroup03: Theme;
  themeGroup04: Theme;
}

export const theme = {
  colors: {
    white: "#fff",
    black: "#222",
    gray: "#999",
    deepGreen: "#1f3d31",
    pastelGray: "#cbd4b9",
    amazon: "#436f59",
  },
};

export const themeGroup01: Theme = {
  backgroundColor: "#1f3d31",
  color: "#fff",
};

export const themeGroup02: Theme = {
  backgroundColor: "#fff",
  color: "#222",
};

export const themeGroup03: Theme = {
  backgroundColor: "#436f59",
  color: "#fff",
};

export const themeGroup04: Theme = {
  backgroundColor: "#fff",
  color: "#436f59",
};
