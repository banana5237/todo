import { createGlobalStyle } from "styled-components";

import DotGothicttf from "./font/DotGothic16-Regular.ttf";

const FontStyles = createGlobalStyle`

@font-face {
    font-family:'DotGothic16-Regular';
    src:local('DotGothic16-Regular')
    src: url(${DotGothicttf}) format('truetype');
    font-weight: 300;
    font-style: normal;
}
`;

export default FontStyles;