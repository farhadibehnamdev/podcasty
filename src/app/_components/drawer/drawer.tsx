"use client";
import React, { useContext } from "react";
import { clsx } from "clsx";
import { DrawerContext } from "@/context";
import { Checkbox, Chip, Divider, Switch } from "@nextui-org/react";
import { ClipboardType, Settings2 } from "lucide-react";

export const Drawer = () => {
  const { open, setOpen } = useContext(DrawerContext);
  return (
    <div
      className="relative z-50 container"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(!open)}
    >
      {open ? (
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
          aria-hidden="true"
        ></div>
      ) : (
        ""
      )}

      <div className={clsx({ "fixed inset-0 overflow-hidden": open })}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 left-0 flex">
            <div
              className={clsx(
                "pointer-events-auto relative w-full h-full flex-col transform transition ease-in-out duration-500  bg-white py-6 shadow-xl",
                { "translate-x-0": open },
                { "-translate-x-full": !open }
              )}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <div className="px-4 sm:px-6">
                <h2
                  className="text-base font-semibold text-gray-900 mb-5 content-center text-center container"
                  id="slide-over-title"
                >
                  <span className="text-center container flex justify-center items-center gap-2">
                    <Chip className=" flex justify-center items-center">
                      Settings
                    </Chip>
                  </span>
                </h2>
                <div className="grid grid-cols[1fr_1fr] container text-center  rounded-md shadow-sm  ring-1 ring-zinc-300 p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-3 text-center flex justify-center">
                    <span className="text-center flex justify-center items-center gap-2">
                      <ClipboardType />
                      Vocabulary Levels
                    </span>
                  </h3>
                  <Divider orientation="horizontal" className=" mb-5" />
                  <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 mb-5">
                    <Checkbox
                      color="success"
                      defaultSelected
                      radius="lg"
                      size="lg"
                    >
                      A1
                    </Checkbox>
                    <Checkbox
                      defaultSelected
                      size="lg"
                      color="secondary"
                      radius="md"
                    >
                      A2
                    </Checkbox>
                    <Checkbox
                      defaultSelected
                      size="lg"
                      color="danger"
                      radius="md"
                    >
                      B1
                    </Checkbox>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr_1fr] gap-2">
                    <Checkbox
                      defaultSelected
                      size="lg"
                      color="warning"
                      radius="md"
                    >
                      B2
                    </Checkbox>
                    <Checkbox
                      defaultSelected
                      classNames={{ wrapper: "after:bg-orange-600" }}
                      radius="md"
                      size="lg"
                    >
                      C1
                    </Checkbox>
                    <Checkbox
                      defaultSelected
                      classNames={{ wrapper: "after:bg-cyan-600" }}
                      radius="md"
                      size="lg"
                    >
                      C2
                    </Checkbox>
                    <Checkbox
                      defaultSelected
                      classNames={{ wrapper: "after:bg-indigo-600" }}
                      radius="md"
                      size="lg"
                    >
                      All
                    </Checkbox>
                  </div>

                  <Divider orientation="horizontal" className="my-4" />
                  <Switch className="text-lg font-semibold">
                    Phrasal Verbs
                  </Switch>
                </div>
              </div>
              <div className="relative mt-6 flex-1 px-4 sm:px-6">
                <div className="grid grid-cols[1fr_1fr] container text-center  rounded-md shadow-sm  ring-1 ring-zinc-300 p-4">
                  <h3 className="text-base font-semibold text-gray-900 mb-3 text-center flex justify-center">
                    <span className="text-center flex justify-center items-center gap-2">
                      <Settings2 />
                      Player Settings
                    </span>
                  </h3>
                  <Divider orientation="horizontal" className=" mb-5" />
                  <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 mb-5">
                    <Checkbox
                      color="success"
                      defaultSelected
                      radius="lg"
                      size="lg"
                    >
                      A1
                    </Checkbox>
                    <Checkbox
                      defaultSelected
                      size="lg"
                      color="secondary"
                      radius="md"
                    >
                      A2
                    </Checkbox>
                    <Checkbox
                      defaultSelected
                      size="lg"
                      color="danger"
                      radius="md"
                    >
                      B1
                    </Checkbox>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr_1fr] gap-2">
                    <Checkbox
                      defaultSelected
                      size="lg"
                      color="warning"
                      radius="md"
                    >
                      B2
                    </Checkbox>
                    <Checkbox
                      defaultSelected
                      classNames={{ wrapper: "after:bg-orange-600" }}
                      radius="md"
                      size="lg"
                    >
                      C1
                    </Checkbox>
                    <Checkbox
                      defaultSelected
                      classNames={{ wrapper: "after:bg-cyan-600" }}
                      radius="md"
                      size="lg"
                    >
                      C2
                    </Checkbox>
                    <Checkbox
                      defaultSelected
                      classNames={{ wrapper: "after:bg-indigo-600" }}
                      radius="md"
                      size="lg"
                    >
                      All
                    </Checkbox>
                  </div>

                  <Divider orientation="horizontal" className="my-4" />
                  <Switch className="text-lg font-semibold">
                    Phrasal Verbs
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
