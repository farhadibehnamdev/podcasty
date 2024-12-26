import { API_KEY, API_LOCAL, API_URL } from "@/configs/globals";
import { db } from "@/core/db";
import { createData, readData } from "@/core/http-service";
import { UserWords } from "@/core/models/user-words";
import { RawAxiosRequestHeaders } from "axios";

interface UserWordsType {
  userWords: UserWords[];
}

// export const syncUserWord = async (data: UserWords) => {
//   const url = `${API_LOCAL}/word-status/${}`;
//   const unsynced_userWords = await createData<UserWords, UserWords>(url, data, {
//     Authorization: `Bearer ${API_KEY}`,
//     apiKey: API_KEY,
//   });
// };

// export const syncWithServer = async () => {
//   try {
//     const unsynced_userWords = await db.user_words
//       .filter((userWord) => userWord.is_synced === false)
//       .toArray();
//     console.log("unsynced_userWords :: ", unsynced_userWords.length);
//     if (unsynced_userWords.length === 0) {
//       console.log("No new or modified items to sync.");
//       return;
//     }
//     const id = unsynced_userWords[0].wid;
//     const url = `http://127.0.0.1:54321/functions/v1/sync-data/${id}`;
//     const headers: RawAxiosRequestHeaders = {
//       Authorization: `Bearer ${API_KEY}`,
//       apiKey: API_KEY,
//     };
//     const response = await createData<UserWordsType, string>(
//       url,
//       { userWords: unsynced_userWords },
//       headers
//     );
//     if (response) {
//       const wids = unsynced_userWords.map((word) => word.wid);
//       await db.user_words.where("wid").anyOf(wids).modify({ is_synced: true });
//       console.log("Successfully synced items with the server.");
//     }
//   } catch (error) {
//     console.error("Error during sync:", error);
//   }
// };
