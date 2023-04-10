import React from "react";
import ReactDOM from "react-dom";
import { useContextMenu, handleContextMenu, ContextMenu } from "../src/index";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="block bg-red-400" onContextMenu={(e)=> {
        e.preventDefault();
        console.log("haidee")
        handleContextMenu(e, contextMenuOptions);
        }}>Hello world!</div>
      <ContextMenu />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

const contextMenuOptions = [
  <a href="https://dextrac.com">Go to DexTrac</a>,
  <div onClick={() => {
    navigator.clipboard.writeText("Hello world!");
  }
  }>Copy</div>,
];