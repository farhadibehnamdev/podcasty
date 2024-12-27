import { Drawer } from "@/app/_components/drawer";
import Podcast from "./_components/podcast";

const Page = () => {
  return (
    <div className="max-h-screen">
      <Drawer />
      <Podcast />
    </div>
  );
};
export default Page;
