import React from "react";
import { useContextMenu, handleContextMenu, ContextMenu } from "../src/index";

export const App = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div
        className="block cursor-context-menu bg-red-400 p-4 font-bold text-white"
        onContextMenu={(e) => {
          e.preventDefault();
          console.log("haidee");
          handleContextMenu(e, contextMenuOptions);
        }}
      >
        Right click me!
      </div>
      <ContextMenu
        className="rounded bg-white"
        backgroundClassName="bg-black bg-opacity-10"
      />
    </div>
  );
};

const contextMenuOptions = [
  <a
    className="inline-block w-full p-3 text-left hover:bg-gray-100"
    href="https://dextrac.com"
  >
    Go to DexTrac
  </a>,
  <button
    className="inline-block w-full p-3 text-left hover:bg-gray-100"
    onClick={() => {
      navigator.clipboard.writeText("Hello world!");
    }}
  >
    Copy
  </button>,
];
