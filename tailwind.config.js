/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        mainColor: "#6F51EC",
        mainColorVariant1: "#8068E3",
        mainColorVariant2: "#A394E4",
        stateColorInfo1: "#0063F7",
        stateColorInfo2: "#5B8DEF",
        stateColorInfo3: "#9DBFF9",
        stateColorSucess1: "#06C270",
        stateColorSucess2: "#39D98A",
        stateColorSucess3: "#57EBA1",
        stateColorWarning1: "#FFCC00",
        stateColorWarning2: "#FDDD48",
        stateColorWarning3: "#FDED72",
        stateColorErro1: "#FF3B3B",
        stateColorErro2: "#FF5C5C",
        stateColorErro3: "#FF8080",
        grayColor1: "#4F4F4F",
        grayColor2: "#828282",
        grayColor3: "#BDBDBD",
        grayColor4: "#E0E0E0",
        blackColor1: "#1D1D1D",
        blackColor2: "#282828",
      }
    },
  },
  plugins: [],
}