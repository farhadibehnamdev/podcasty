"use client";
import React, { useContext } from "react";
import {
  Chip,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Drawer as DrawerNext,
  Tabs,
} from "@nextui-org/react";
import { DrawerContext } from "@/context";
import { TabsUI } from "../tab";

export const Drawer: React.FC = () => {
  const { isOpen, onOpenChange } = useContext(DrawerContext);

  return (
    <DrawerNext
      className="rounded-none"
      isOpen={isOpen}
      placement="right"
      onOpenChange={onOpenChange}
    >
      <DrawerContent>
        <DrawerHeader className="flex flex-col gap-1">
          <Chip size="lg">Details</Chip>
        </DrawerHeader>

        <DrawerBody className="mt-10">
          {/* <div className="flex justify-center gap-3 drop-shadow-md mb-6">
            <Button color="danger">Unknown</Button>
            <Button color="success">Mastered</Button>
            <Button color="warning">Add To SRS</Button>
          </div> */}
          <div className="flex w-full flex-col">
            <TabsUI />
          </div>
        </DrawerBody>
      </DrawerContent>
    </DrawerNext>
  );
};
