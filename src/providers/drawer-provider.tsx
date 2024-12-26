"use client";
import { DrawerContext } from "@/context";
import { useDisclosure } from "@nextui-org/react";
import React from "react";

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

  return (
    <DrawerContext.Provider value={{ isOpen, onOpen, onClose, onOpenChange }}>
      {children}
    </DrawerContext.Provider>
  );
};
