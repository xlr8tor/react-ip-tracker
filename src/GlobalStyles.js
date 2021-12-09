import { createGlobalStyle } from "styled-components";
import Background from "./images/pattern-bg.png";

export const GlobalStyles = createGlobalStyle`
    :root {
        --Very-Dark-Gray: hsl(0, 0%, 17%);
        --Dark-Gray: hsl(0, 0%, 59%);
        --Font-Size: 18px;
        font-size: var(--Font-Size);
    }

    *,
    ::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        height: 100%;
        min-height: 100%;
    }

    body {
        background: url(${Background}) no-repeat top center;
        ${"" /* background-size: contain; */}
        font-family: 'Rubik', sans-serif;
        -webkit-font-smoothing: antialiased;

        @media (min-width: 425px) {
            overflow: hidden;
            }
    }

    input {
        font: inherit;
    }

    p,h1,h2,h3,h4,h5,h6 {
        overflow-wrap: break-word;
    }
`;
