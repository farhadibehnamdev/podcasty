import { WordsSelected } from "@/types/words-selected.interface";
export class UserWords implements WordsSelected {
  wid: number;
  sentense: string;
  start_time: number;
  end_time: number;
  ctype: string;
  cid: string;
  user_id: string;
  status: string;
  constructor({
    wid,
    sentense,
    start_time,
    end_time = 0, // Default value if not provided
    ctype = "", // Default value if not provided
    cid = "", // Default value if not provided
    user_id = "1a20da04-4a6a-495c-bffc-353e806d30a8",
    status = "unknown",
  }: WordsSelected) {
    this.wid = wid;
    this.sentense = sentense;
    this.start_time = start_time;
    this.end_time = end_time;
    this.ctype = ctype;
    this.cid = cid;
    this.user_id = user_id;
    this.status = status;
  }
}
