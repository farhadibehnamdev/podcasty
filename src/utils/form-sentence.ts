import { Phrasal, SentenseWords } from "@/types/episode.interface";
const regex = /^[0-9\s\p{P}]+$/u;
export const formSentense = (words: SentenseWords[]) => {
  let sentense = "";
  words.forEach((item) => {
    if (item?.word?.wid) {
      sentense += item.word.text;
    } else if (regex.test(item.text!)) {
      sentense += item.text;
    } else if (item.phrase?.wid) {
      item.phrase.content.forEach((wordContent) => {
        if (wordContent?.word?.wid) {
          sentense += wordContent.word.text;
        } else {
          sentense += wordContent.text;
        }
      });
    }
  });
  return sentense;
};

export const formWordPhrase = (words: Phrasal) => {
  let word = "";
  words.content.forEach((item, index) => {
    word += item?.word?.text ? item.word.text : " ";
  });
  return word;
};
