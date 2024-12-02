"use client";
import { DrawerContext } from "@/context";
import React from "react";

const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
	const [open, setOpen] = React.useState<boolean>(false);
	return (
		<DrawerContext.Provider value={{ open, setOpen }}>
			{children}
		</DrawerContext.Provider>
	);
};

export default DrawerProvider;
