"use client";
import {
  Card,
  CardBody,
  CardFooter,
  Chip,
  CircularProgress,
  Divider,
  Image,
} from "@nextui-org/react";
import { BookA, Flame } from "lucide-react";

export const ProgressTracking = () => {
  return (
    <div className="my-8 relative">
      <h2 className="text-2xl font-semibold drop-shadow-md ">
        Learning Status
      </h2>
      <Card
        className="mt-3 p-5  shadow-none inset-0 w-full h-full !bg-gray-300 border-1 border-slate-100"
        shadow="sm"
      >
        <CardBody className="flex flex-row justify-around items-center">
          <Card className="h-32 w-32 border-1 border-slate-300 bg-white shadow-none">
            <CardBody className="justify-center items-center pb-0">
              {/* <Image
                    src="./2.svg"
                    alt=""
                    className="flex justify-center items-center w-28 h-28 "
                  /> */}
              <BookA className=" font-semibold stroke-zinc-400" size={80} />
            </CardBody>
            <CardFooter className="justify-center items-center pt-0">
              <Chip
                classNames={{
                  base: "border-1 border-white/30",
                  content: "text-black/90 text-small font-semibold",
                }}
                variant="solid"
              >
                500 Words
              </Chip>
            </CardFooter>
          </Card>

          <Card className=" justify-center items-center pb-0 border-none ">
            <CardBody className="rounded-full h-32 w-32 shadow-lg bg-white container flex justify-center items-center">
              <Image
                src="./pencil.svg"
                alt=""
                className="flex justify-center items-center "
              />
            </CardBody>
            <CardFooter className="justify-center items-center pt-0">
              <Chip
                classNames={{
                  base: "border-1 border-white/30",
                  content: "text-white/90 text-small font-semibold",
                }}
                variant="bordered"
              >
                100 Phrasal Verbs
              </Chip>
            </CardFooter>
          </Card>

          <Card>
            <CardBody className="rounded-full relative h-32 w-32 shadow-lg  container flex justify-center items-center">
              {/* <CircularProgress
                  classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-white",
                    track: "stroke-white/10",
                    value: "text-3xl font-semibold text-white",
                  }}
                  value={70}
                  strokeWidth={4}
                  showValueLabel={true}
                /> */}
              <Flame size={100} className="drop-shadow-md stroke-zinc-400" />
            </CardBody>
            <CardFooter className="justify-center items-center pt-0">
              <Chip
                classNames={{
                  base: "border-1 border-white/30",
                  content: "text-white/90 text-small font-semibold",
                }}
                variant="solid"
                color="warning"
              >
                4 Week Streak
              </Chip>
            </CardFooter>
          </Card>
        </CardBody>
        <Divider className="mb-5" />
        <CardFooter className="flex justify-between items-center font-semibold">
          <span className="flex flex-col items-center">
            Mon
            <div className="flex flex-col justify-center items-center">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-badge-check fill-zinc-400 stroke-white"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path className="stroke-white" d="m9 12 2 2 4-4" />
              </svg> */}
              <CircularProgress
                classNames={{
                  svg: "h-16 w-16 drop-shadow-md",
                  indicator: "stroke-red-400",
                  track: "stroke-gray-400",
                  value: "text-sm font-semibold text-black",
                }}
                formatOptions={{ style: "unit", unit: "hour" }}
                value={2}
                strokeWidth={4}
                showValueLabel={true}
              />
              {/* <Chip color="warning" size="sm">
                <span>2h</span>
              </Chip> */}
            </div>
          </span>
          <span className="flex flex-col items-center">
            Tue
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-badge-check fill-red-400 stroke-white "
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <line x1="15" x2="9" y1="9" y2="15" />
                <line x1="9" x2="15" y1="9" y2="15" />
              </svg>
            </div>
          </span>
          <span className="flex flex-col items-center">
            Wed
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-badge-check fill-zinc-400 stroke-white "
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path className="stroke-white" d="m9 12 2 2 4-4" />
              </svg>
            </div>
          </span>
          <span className="flex flex-col items-center">
            Thu
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-badge-check fill-green-400 stroke-white "
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path className="stroke-white" d="m9 12 2 2 4-4" />
              </svg>
            </div>
          </span>
          <span className="flex flex-col items-center">
            Fri
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-badge-check fill-zinc-400 stroke-white "
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path className="stroke-white" d="m9 12 2 2 4-4" />
              </svg>
            </div>
          </span>
          <span className="flex flex-col items-center">
            Sat
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-badge-check fill-green-400 stroke-white "
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path className="stroke-white" d="m9 12 2 2 4-4" />
              </svg>
            </div>
          </span>
          <span className="flex flex-col items-center">
            Sun
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-badge-check fill-green-400 stroke-white "
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path className="stroke-white" d="m9 12 2 2 4-4" />
              </svg>
            </div>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
};
