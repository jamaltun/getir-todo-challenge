import React from "react";
import ReactDOM from "react-dom";
import ToDoApp from "./ToDoApp";

import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <ToDoApp />
  </Provider>,
  document.getElementById("root")
);
