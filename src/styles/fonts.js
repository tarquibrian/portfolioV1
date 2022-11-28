import { css } from "styled-components"
import font from "../fonts/Neuemontreal/NeueMontreal-Regular.otf"
import Aspekta200 from "../fonts/Aspekta/Aspekta-200.woff2"
import Aspekta400 from "../fonts/Aspekta/Aspekta-400.woff2"
import Aspekta800 from "../fonts/Aspekta/Aspekta-800.woff2"

import Calibre400 from "../fonts/Calibre/CalibreRegular.otf"

const Fonts = css`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Oswald:wght@200;300;400;500;600;700&family=Raleway:wght@200;300;400;500;600;700;800;900&display=swap");

  @font-face {
    font-family: "Neue Montreal";
    src: url(${font});
    font-weight: 400;
    font-size: normal;
  }

  @font-face {
    font-family: "Aspekta";
    src: url(${Aspekta200});
    font-weight: 200;
    font-size: normal;
  }
  @font-face {
    font-family: "Aspekta";
    src: url(${Aspekta400});
    font-weight: 400;
    font-size: normal;
  }
  @font-face {
    font-family: "Aspekta";
    src: url(${Aspekta800});
    font-weight: 800;
    font-size: normal;
  }

  @font-face {
    font-family: "Calibre";
    src: url(${Calibre400});
    /* font-weight: 400; */
    /* font-size: normal; */
  }
`
export default Fonts
