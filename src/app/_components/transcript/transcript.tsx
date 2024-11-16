// "use client";
// import React from "react";
// import { useVirtualizer } from "@tanstack/react-virtual";
// import { EpisodeData, TranscriptWord } from "@/types/episode.interface";

// export const Transcript = ({ transcript }: { transcript: EpisodeData }) => {
//   const parentRef = React.useRef<HTMLDivElement>(null);
//   const items = Object.entries(transcript).map((item) => {
//     const transcriptWord = item[1].TranscriptWord.map(
//       (word: TranscriptWord) => {
//         return {
//           wid: word.wid,
//           text: word.text,
//         };
//       }
//     );
//     return {
//       sentense_id: item[0],
//       ...transcriptWord,
//     };
//   });
//   // const items = transcript.transcript_timing.map(
//   //   (sentense: TranscriptJsonb) => {
//   //     return sentense.TranscriptWord.map((word) => {
//   //       return {
//   //         sentense_id: sentense.sentense_id,
//   //         wid: word.wid,
//   //         text: word.text,
//   //       };
//   //     });
//   //   }
//   // );
//   const rowVirtualizer = useVirtualizer({
//     count: items.length,
//     getScrollElement: () => parentRef.current,
//     estimateSize: () => 35,
//     overscan: 5,
//   });

//   // const randomIndex = Math.floor(Math.random() * 10000);

//   return (
//     <div
//       ref={parentRef}
//       className="List container h-screen w-full"
//       style={{
//         width: `600px`,
//         overflow: "auto",
//       }}
//     >
//       <div
//         style={{
//           height: `${rowVirtualizer.getTotalSize()}px`,
//           width: "100%",
//           position: "relative",
//         }}
//       >
//         {rowVirtualizer.getVirtualItems().map((virtualRow) => {
//           console.log("test :: ", items[virtualRow.index]);
//           return (
//             <div
//               key={virtualRow.index}
//               className={virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven"}
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: `${virtualRow.size}px`,
//                 transform: `translateY(${virtualRow.start}px)`,
//               }}
//             >
//               <p data-index={items[virtualRow.index].sentense_id}>
//                 {Object.entries(items[virtualRow.index] as TranscriptWord).map(
//                   (item, index) => {
//                     return <span key={index}>{item[1]?.text}</span>;
//                   }
//                 )}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

"use client";
import React, { useMemo, useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { EpisodeData, TranscriptWord } from "@/types/episode.interface";

export const Transcript = ({ transcript }: { transcript: EpisodeData }) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const items = useMemo(() => {
    return Object.entries(transcript).map(([sentense_id, sentenceData]) => ({
      sentense_id,
      words: sentenceData.TranscriptWord.map(
        ({ wid, text }: TranscriptWord) => ({
          wid,
          text,
        })
      ),
    }));
  }, [transcript]);

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 35,
    overscan: 5,
  });

  return (
    <div
      ref={parentRef}
      className="List container h-screen w-full"
      style={{
        width: `600px`,
        overflow: "auto",
      }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          width: "100%",
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const item = items[virtualRow.index];
          return (
            <div
              key={item.sentense_id}
              className={virtualRow.index % 2 ? "ListItemOdd" : "ListItemEven"}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <p data-index={item.sentense_id}>
                {item.words.map((word, index) => (
                  <span key={index}>{word.text} </span>
                ))}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
