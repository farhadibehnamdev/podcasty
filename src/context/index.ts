// components/DrawerContext.tsx

"use client"; // Ensure this is a client component

import { createContext } from "react";

// Define the shape of the context
interface DrawerContextProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onOpenChange: (open: boolean) => void;
}

// Create the context with default values
export const DrawerContext = createContext<DrawerContextProps>(
  {} as DrawerContextProps
);
