import React from "react";
import { useContextMenu, handleContextMenu, ContextMenu } from "../src/index";

export const App = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className="block cursor-context-menu bg-red-400 p-4"
        onContextMenu={(e) => {
          e.preventDefault();
          console.log("haidee");
          handleContextMenu(e, contextMenuOptions);
        }}
      >
        <p>Hello world!</p>
      </div>
      <ContextMenu className="bg-gray-50" />
    </div>
  );
};

const contextMenuOptions = [
  <a
    className="inline-block w-full p-3 hover:bg-gray-200"
    href="https://dextrac.com"
  >
    Go to DexTrac
  </a>,
  <button
    className="inline-block w-full p-3 hover:bg-gray-200"
    onClick={() => {
      navigator.clipboard.writeText("Hello world!");
    }}
  >
    Copy
  </button>,
];
