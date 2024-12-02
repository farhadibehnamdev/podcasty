export interface SentenseWords {
  word: Words;
  text?: string;
  phrase?: Phrasal;
}
export interface Sentense {
  sentense_id: number;
  sentense_words: SentenseWords[];
  start_time_sec: number;
  end_time_sec: number;
}

export interface EpisodeData {
  audio_url: string;
  transcript_timing: Sentense[];
}

export type Words = {
  wid?: number;
  text: string;
};

export type PhraseSentense = {
  word: Words;
  text?: string;
};

export type Phrasal = {
  wid: number;
  content: PhraseSentense[];
};
