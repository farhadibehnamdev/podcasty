import Dexie, { type EntityTable } from "dexie";

interface UserWordSelected {
  wid: number;
  text: string;
}

const db = new Dexie("UserWordSelected") as Dexie & {
  userWordSelected: EntityTable<UserWordSelected, "wid">;
};

db.version(1).stores({
  userWorSelected: "++wid, text", // primary key "id" (for the runtime!)
});

export type { UserWordSelected };
export { db };
