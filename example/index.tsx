import React from "react";
import ReactDOM from "react-dom";
import HeadlessContextMenu from "../src/index";

const App = () => {
  return (
    <div>
      <HeadlessContextMenu />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
