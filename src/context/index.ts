import { DrawerContextType } from "@/types/drawer-context.type";
import { createContext } from "react";

export const DrawerContext = createContext<DrawerContextType>(
	{} as DrawerContextType,
);
