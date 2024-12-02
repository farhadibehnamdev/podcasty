import { UserSelectedWords } from "@/types/user-selected-words.interface";
import Dexie, { type EntityTable } from "dexie";

interface WordsSelected extends UserSelectedWords {
	id: number;
	sentense: string;
	start_time: number;
	end_time: number;
	episode_id: string;
	podcast_id: string;
	has_update: Date;
}

const db = new Dexie("syncDB") as Dexie & {
	userWordSelected: EntityTable<WordsSelected, "id">;
};

db.version(1).stores({
	userWordSelected: "++id,wid, text", // primary key "id" (for the runtime!)
});

export const getWordById = async (wid: number) => {
	const word = await db.userWordSelected.where("wid").equals(wid);
	return word;
};

export const addOrUpdateWordById = async (wid: number, text: string) => {
	try {
		return await db.userWordSelected.add({ wid: wid, text: text });
	} catch (error) {
		console.log("error :: ", error);
	}
};

export const deleteWordById = async (wid: number) => {
	await db.userWordSelected.delete(wid);
};

export { db };
