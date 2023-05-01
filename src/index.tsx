import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment } from "react";
import { create } from "zustand";
import "./index.css";

type ContextMenuOption =
  | { name: string; onClick?: () => void; className?: string }
  | {
      name: string;
      href: string;
      className?: string;
      wrapper?: React.ComponentType<{
        href: string;
        onClick?: () => void;
        className?: string;
        children?: React.ReactNode;
      }>;
    };

interface ContextMenuState {
  show: boolean;
  location: { x: number; y: number };
  options: Array<ContextMenuOption>;
  setNewShow: (newShow: boolean) => void;
  setNewLocation: (newLocation: { x: number; y: number }) => void;
  setNewOptions: (newOptions: Array<ContextMenuOption>) => void;
  clearContextMenu: () => void;
}

export const useContextMenu = create<ContextMenuState>((set) => ({
  show: false,
  location: { x: 0, y: 0 },
  options: [],
  setNewShow: (newShow: boolean) => set(() => ({ show: newShow })),
  setNewLocation: (newLocation: { x: number; y: number }) =>
    set(() => ({ location: newLocation })),
  setNewOptions: (newOptions: Array<ContextMenuOption>) =>
    set(() => ({ options: newOptions })),
  clearContextMenu: () =>
    set({
      show: false,
      location: { x: 0, y: 0 },
      options: [],
    }),
}));

export function ContextMenu({
  className,
  backgroundClassName,
}: {
  className?: string;
  backgroundClassName?: string;
}) {
  const { show, location, options, clearContextMenu } = useContextMenu();
  if (show) {
    return (
      <Transition.Root show={show} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={clearContextMenu}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={classNames(
                "fixed inset-0 transition-opacity",
                backgroundClassName || ""
              )}
            />
          </Transition.Child>

          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div
              className="relative"
              style={{
                left: location.x,
                top: location.y,
              }}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={classNames(
                    "relative max-w-xs transform overflow-hidden transition-all",
                    className || ""
                  )}
                >
                  {renderOptions(options)}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    );
  }
  return <></>;
}

function renderOptions(options: ContextMenuOption[]) {
  return options.map((option, index) => {
    if ("onClick" in option) {
      return (
        <div
          key={index}
          className={classNames(
            "inline-block w-full cursor-pointer p-2",
            option.className || ""
          )}
          onClick={() => {
            option.onClick?.();
            useContextMenu.getState().clearContextMenu();
          }}
        >
          {option.name}
        </div>
      );
    }
    if ("href" in option) {
      if (option.wrapper) {
        return (
          <option.wrapper
            key={index}
            className={classNames(
              "inline-block w-full cursor-pointer p-2",
              option.className || ""
            )}
            href={option.href}
            onClick={() => {
              useContextMenu.getState().clearContextMenu();
            }}
          >
            {option.name}
          </option.wrapper>
        );
      }
      return (
        <a
          key={index}
          className={classNames(
            "inline-block w-full cursor-pointer p-2",
            option.className || ""
          )}
          href={option.href}
          onClick={() => {
            useContextMenu.getState().clearContextMenu();
          }}
        >
          {option.name}
        </a>
      );
    }
  });
}

export function handleContextMenu(
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  options: ContextMenuOption[]
) {
  const { clientX, clientY } = e;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const newLocation = { x: clientX, y: clientY };

  // TODO these should be dynamic at some point
  const contextMenuSize = { width: 312, height: 98 };
  if (clientX + contextMenuSize.width > windowWidth) {
    newLocation.x -= contextMenuSize.width;
  }
  if (clientY + contextMenuSize.height > windowHeight) {
    newLocation.y -= contextMenuSize.height;
  }

  useContextMenu.getState().setNewShow(true);
  useContextMenu.getState().setNewLocation(newLocation);
  useContextMenu.getState().setNewOptions(options);
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
