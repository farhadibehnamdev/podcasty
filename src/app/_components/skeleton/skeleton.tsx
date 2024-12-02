"use client";
import { Skeleton } from "@nextui-org/react";

export const LineSkeleton = () => {
	return (
		<div className=" max-w-[400px] flex justify-center items-center container ">
			<div className="w-full justify-center items-center flex flex-col gap-10">
				<Skeleton className="h-3 w-2/3 rounded-lg" />
				<Skeleton className="h-3 w-2/3 rounded-lg" />
				<Skeleton className="h-3 w-2/3 rounded-lg" />
				<Skeleton className="h-3 w-2/3 rounded-lg" />
				<Skeleton className="h-3 w-2/3 rounded-lg" />
				<Skeleton className="h-3 w-2/3 rounded-lg" />
				<Skeleton className="h-3 w-2/3 rounded-lg" />
				<Skeleton className="h-3 w-2/3 rounded-lg" />
			</div>
		</div>
	);
};
