import { usePathname } from "next/navigation";
import React from "react";

export const useContentDetails = () => {
  const pathname = usePathname();
  const [contentType, contentId] = React.useMemo(() => {
    const parts = pathname.split(/[ /]+/).filter(Boolean);
    return [parts[0], parts[1]];
  }, [pathname]);
  return { contentType, contentId: Number(contentId) };
};
