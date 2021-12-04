import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
}
`;

ReactDOM.render(
    <BrowserRouter>
        <Global />
        <App />
    </BrowserRouter>,

    document.getElementById("root")
);
