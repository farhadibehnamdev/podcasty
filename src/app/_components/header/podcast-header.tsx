"use client";
import React, { useContext } from "react";
import { Button, Navbar, NavbarContent } from "@nextui-org/react";
import { EllipsisVertical, Undo2 } from "lucide-react";
import { DrawerContext } from "@/context";
export const PodcastHeader: React.FC = () => {
  const { onOpen } = useContext(DrawerContext);

  return (
    <Navbar
      isBordered
      height="70px"
      className="shadow-md flex justify-around w-full items-center"
    >
      <NavbarContent justify="end" className="max-w-fit">
        <Button
          onPress={onOpen} // Trigger the onOpen function from context
          isIconOnly
          color="default"
          aria-label="Open Drawer"
        >
          <EllipsisVertical />
        </Button>
      </NavbarContent>
      <NavbarContent justify="start" className="max-w-fit">
        <Button isIconOnly color="default" aria-label="Undo">
          <Undo2 />
        </Button>
      </NavbarContent>
    </Navbar>
  );
};
