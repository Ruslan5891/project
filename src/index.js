import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

const Global = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #FFFFFF;
  font-size: 14px;
  '::-webkit-input-placeholder' {
    color: white,
    };
}
`;

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Global />
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
