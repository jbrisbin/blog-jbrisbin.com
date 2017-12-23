import { injectGlobal } from "styled-components";
import bg from "../../static/DSCF3950.jpg";

injectGlobal`

  * {
    box-sizing: border-box;
    -webkit-overflow-scrolling: touch;
  }
  body {
    background: black url(${bg}) no-repeat fixed center;
    font-family: "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Oxygen",
    "Ubuntu",
    "Cantarell",
    "Fira Sans",
    "Droid Sans",
    "Helvetica Neue",
    "sans-serif";
  }
  
  *::-webkit-scrollbar {
    width: 6px;
  }
  *::-webkit-scrollbar-track {
    background: #eee;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #ccc;
  }

  [data-whatintent="mouse"] *:focus {
    outline: none;
  }
  
`;
