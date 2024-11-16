"use client";

import { NextUIProvider } from "@nextui-org/react";

const NextUIProviderClient = ({ children }: { children: any }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextUIProviderClient;
