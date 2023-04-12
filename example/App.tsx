import { handleContextMenu, ContextMenu } from "../src/index";

export const App = () => {
  const className = "hover:bg-gray-100 p-4 rounded focus:outline-none";
  const contextMenuOptions = [
    {
      name: `Go to DexTrac`,
      href: `https://dextrac.com`,
      className,
    },
    {
      name: `Go home`,
      href: `/home`,
      className,
    },
    {
      name: "Copy",
      onClick: () => {
        navigator.clipboard.writeText("Right click me!");
      },
      className,
    },
  ];

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
