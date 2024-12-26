"use client";
import { Card, CardBody } from "@nextui-org/react";
import { BookAudio, Headphones } from "lucide-react";

const CourseMaterial = () => {
  return (
    <div className="w-full">
      <h2 className="font-semibold text-2xl flex-start mb-5 drop-shadow-md ">
        Materials
      </h2>
      <div className="flex justify-center items-center gap-12">
        {/* <p className="text-zinc-700 text-lg text-center mb-3  ">
          Please select the Podcasts or Audiobooks
        </p> */}
        {/* <Button color="secondary">Podcasts and Audiobooks</Button> */}
        <Card className=" border-1 mb-5">
          <div>
            <CardBody className=" w-[200px] h-[200px] justify-center items-center pb-0 bg-blue-50 font-medium ">
              <Headphones
                size={64}
                className="drop-shadow-md text-zinc-500 mb-3"
              />
              <p className="drop-shadow-md text-zinc-800">Podcasts</p>
            </CardBody>
          </div>
        </Card>
        <Card className="border-1 mb-5 font-medium ">
          <CardBody className=" w-[200px] h-[200px] justify-center items-center pb-0 bg-red-50">
            <BookAudio
              size={64}
              className="drop-shadow-md text-zinc-500 mb-3"
            />
            <p className="drop-shadow-md text-zinc-800">Audiobooks</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default CourseMaterial;
