// styled.d.ts
import "styled-components";
interface IPalette {
  main: string;
  contrastText: string;
}
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadiusLarge: string;
    borderRadiusSmall: string;
    fontFamily: string;
    inputFontSize: string;
    palette: {
      strongCyan: string;
      veryDarkCyan: string;
      darkGrayishCyan: string;
      grayishCyan: string;
      lightGrayishCyan: string;
      veryLightGrayishCyan: string;
      white: string;
    };
    mobileBreak: string;
    desktopBreak: string;
  }
}
