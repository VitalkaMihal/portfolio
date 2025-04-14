import {createGlobalStyle} from "styled-components";
import {theme} from "./theme.ts";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${theme.colors.font};
    }
    a {
        text-decoration: none;
        color: ${theme.colors.font};
    }
`