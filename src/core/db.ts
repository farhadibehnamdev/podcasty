import { WordSelected, WordSelectedState } from "@/stores/word-selected.store";
import { VersionTable, WordsSelected } from "@/types/words-selected.interface";
import Dexie, { type EntityTable } from "dexie";
import { UserWords } from "./models/user-words";

type AddSelectedWord = (word: WordSelected) => void;
const db = new Dexie("syncDB") as Dexie & {
  user_words: EntityTable<WordsSelected, "wid">;
  version: EntityTable<VersionTable, "id">;
};

db.version(1).stores({
  user_words: "wid,start_time,end_time,ctype,cid,has_update,sentense", // primary key "id" (for the runtime!)
  version: "id", // primary key "id" (for the runtime!)
});

export const getWordById = async (wid: number) => {
  const word = await db.user_words.where("wid").equals(wid);
  return word;
};

export const updateWord = async (wid: number, updates: UserWords) => {
  updates.last_modified = new Date();
  updates.is_synced = false;
  await db.user_words.update(wid, updates);
};

export const addOrUpdateWordById = async ({
  wordSelected,
}: {
  wordSelected: WordsSelected;
}) => {
  try {
    const userword = new UserWords({ ...wordSelected });
    return await db.user_words.add(userword);
  } catch (error) {
    console.log("error :: ", error);
  }
};

export const syncWithStore = ({
  addSelectedWord,
}: {
  addSelectedWord: AddSelectedWord;
}) => {
  db.user_words.each((item) => {
    addSelectedWord({ wid: item.wid });
  });
};

export const deleteWordById = async (wid: number) => {
  await db.user_words.delete(wid);
};

export { db };
