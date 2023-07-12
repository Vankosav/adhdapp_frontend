export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      white: "#f7f1f8",
      "dark-blue": "#3a6b7e",
      "light-blue": "#82aeb1",
      orange: "#f39b53",
      "dark-orange": "#df7620",
      gray: "#DDDDDD",
    },
  },
};
export const plugins = [
  // eslint-disable-next-line no-undef
  require("flowbite/plugin"),
];
