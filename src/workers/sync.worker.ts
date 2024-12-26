// addEventListener("message", (event: MessageEvent<number>) => {
//   console.log("mess", event);
//   if (event?.data.toString() === "end worker") {
//     self.close();
//   }
//   if (event.data.toString() === "start") {
//     setInterval(() => {
//       self.postMessage("Sync");
//     }, 8000);
//   }
// });
