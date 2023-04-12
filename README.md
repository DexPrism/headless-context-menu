# Headless Context Menu

A versatile and customizable headless context menu React component built with TypeScript, Tailwind CSS, and Zustand. NPM package [here](https://www.npmjs.com/package/headless-context-menu?activeTab=readme).

## Features

- Headless: Create your own styles and markup with full control over appearance
- Built with TypeScript and Tailwind CSS for flexibility and ease of use
- Zustand for simple state management

## Installation

Install the `headless-context-menu` package using Yarn:

```bash
yarn add headless-context-menu
```

## Usage

To see an example of usage check the `./example` folder. You can customize the appearance and behavior of the context menu by providing your own markup and styles.

## How it works

The `headless-context-menu` UI kit is built using the following technologies:

- React for the UI
- TypeScript for type safety
- Tailwind CSS for styling
- Zustand for state management
- Headless UI's `Transition` and `Dialog` components for handling animations and focus management

The small UI kit is comprised of a few parts:

1. **ContextMenu**: The main component that renders the context menu when the `show` state is `true`. It uses the `Transition` and `Dialog` components from Headless UI to handle animations and focus management. The component takes optional `className` and `backgroundClassName` properties to customize the appearance.

2. **useContextMenu**: A Zustand store that manages the state of the context menu, including its visibility, location, and options. The store provides several methods to update the state and clear the context menu.

3. **handleContextMenu**: A function that handles the context menu logic when a context menu is requested. It calculates the position of the context menu based on the mouse event and ensures that the menu stays within the viewport. It then updates the `useContextMenu` state with the new location and options.

4. **renderOptions**: A helper function that takes an array of `ContextMenuOption` objects and renders them as either buttons or anchor tags, depending on the provided properties. Each option can have a custom `className` for styling.

5. **ContextMenuOption**: A type representing an individual option in the context menu. It can be either an object with a `name` property and an `onClick` callback function, or an object with a `name` property and an `href` string for navigation. Optionally, you can provide a `className` property for custom styling.

6. **ContextMenuState**: An interface that defines the shape of the Zustand state for the context menu, which includes properties like `show`, `location`, and `options`, along with methods for updating the state, such as `setNewShow`, `setNewLocation`, `setNewOptions`, and `clearContextMenu`.

To use the component in your application, simply import and render the `ContextMenu` component, and use the `handleContextMenu` function to show the context menu when desired.

```tsx
import React from "react";
import { ContextMenu, handleContextMenu } from "headless-context-menu";

const App = () => {
  // Define your context menu options here
  const options = [
    {
      name: "Option 1",
      onClick: () => console.log("Option 1 clicked"),
    },
    {
      name: "Option 2",
      href: "https://dextrac.com",
    },
  ];

  return (
    <div>
      <ContextMenu />
      <div
        onContextMenu={(e) => {
          e.preventDefault();
          handleContextMenu(e, options);
        }}
      >
        Right click me!
      </div>
    </div>
  );
};

export default App;
```

You can customize the appearance and behavior of the context menu by providing your own styles. See `./example`.
