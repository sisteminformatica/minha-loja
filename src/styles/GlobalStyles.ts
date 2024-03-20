import { createGlobalStyle } from "styled-components";

//CSS in Js
export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, button {
font-family: 'Poppins', sans-serif;
}

button {
  cursor: pointer;
  transition: filter 0.3;
  
  &:hover {
filter: brightness(1.2);
transition: filter 0.3;
  }
}
`;
