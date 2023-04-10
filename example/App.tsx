import React from "react";
import { useContextMenu, handleContextMenu, ContextMenu } from "../src/index";

export const App = () => {
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


const contextMenuOptions = [
  <a href="https://dextrac.com">Go to DexTrac</a>,
  <div onClick={() => {
    navigator.clipboard.writeText("Hello world!");
  }
  }>Copy</div>,
];