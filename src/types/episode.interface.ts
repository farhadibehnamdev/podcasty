export interface TranscriptWord {
  wid?: number;
  text: string;
}

export interface TranscriptJsonb {
  sentense_id: number;
  TranscriptWord: TranscriptWord[];
  start_time_sec: number;
  end_time_sec: number;
}

export interface EpisodeData {
  audio_url: string;
  transcript_timing: TranscriptJsonb;
}
