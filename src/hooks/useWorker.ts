// "use client";
// import { db } from "@/core/db";
// import { useEffect, useState } from "react";

// export const useWorker = () => {
//   const WORKER_URL = "../workers/sync.worker.ts";

//   useEffect(() => {
//     const worker = new Worker(new URL(WORKER_URL, import.meta.url));
//     worker.onmessage = (ev) => {
//       syncWithServer();
//     };
//     worker.postMessage("start");
//     return () => {
//       worker.postMessage("end worker");
//       worker.terminate();
//       URL.revokeObjectURL(WORKER_URL);
//     };
//   }, []);
// };
