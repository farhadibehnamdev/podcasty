import { Time } from "@vidstack/react";
import { ReactNode } from "react";

export function TimeGroup({ children }: { children: ReactNode }) {
  return (
    <div className="ml-1.5 flex items-center text-sm font-medium">
      <Time className="time" type="current" />
      {children}
      <Time className="time" type="duration" />
    </div>
  );
}
