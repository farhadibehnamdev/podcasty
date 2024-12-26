"use client";
import React, { ReactNode, useContext, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  Chip,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  Drawer as DrawerNext,
  Tab,
  Tabs,
} from "@nextui-org/react";
import { DrawerContext } from "@/context";
import { CircleCheck, Heart, Volume1 } from "lucide-react";
import { useWordExplanationStore } from "@/stores/word-explanation.store";
import { Mutation, useMutationState } from "@tanstack/react-query";

interface ResponseMutationWordExplanation {
  word: string;
  level: string;
  synonyms: string[];
  examples: string[];
  explanation: string;
  translation: string;
  phonetic: string;
  audio: string;
}

export const Drawer: React.FC = () => {
  const { isOpen, onOpenChange } = useContext(DrawerContext);

  const data = useMutationState({
    filters: { mutationKey: ["word-explain"] },
    select: (mutation: Mutation) => mutation.state.data,
  });
  const latest = data[data.length - 1] as ResponseMutationWordExplanation;
  console.log("latest :: ", latest?.word);
  const playPronunce = () => {
    const word = new Audio(
      `https://dict.youdao.com/dictvoice?type=0&audio=${latest?.word}`
    );
    word.play();
  };
  return (
    <DrawerNext
      className="rounded-none"
      isOpen={isOpen}
      placement="right"
      onOpenChange={onOpenChange}
    >
      <DrawerContent>
        <DrawerHeader className="flex flex-col gap-1">
          <Chip size="lg">Details</Chip>
        </DrawerHeader>

        <DrawerBody className="mt-10">
          {/* <div className="flex justify-center gap-3 drop-shadow-md mb-6">
            <Button color="danger">Unknown</Button>
            <Button color="success">Mastered</Button>
            <Button color="warning">Add To SRS</Button>
          </div> */}
          <div className="flex w-full flex-col">
            <Tabs aria-label="Options" size="lg" fullWidth>
              <Tab key="dictionary" title="Dictionary">
                {!!latest?.word ? (
                  <iframe
                    src={`https://api.s1.zabanshenas.com/api/v1/dictionary?dictionary=cambridgeen&word=${latest?.word}`}
                    width="100%"
                    className="h-[80vh]"
                  ></iframe>
                ) : (
                  "Loading..."
                )}
              </Tab>
              <Tab key="ai" title="AI">
                <Card
                  className="rounded-md bg-zinc-200 ring-1 ring-zinc-300 mb-10"
                  shadow="sm"
                >
                  <CardBody>
                    <div className="flex justify-between p-3">
                      <div className="flex justify-between gap-3">
                        <span className="font-semibold text-lg drop-shadow-sm">
                          {latest?.word}
                        </span>
                        <span className="rounded-sm ring-1 ring-zinc-600 p-1 text-sm">
                          US
                        </span>
                      </div>
                      <div className="flex justify-start gap-3">
                        <span>{latest?.phonetic}</span>
                        <Volume1
                          onClick={playPronunce}
                          type="button"
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <div className="flex w-full flex-col">
                  <Tabs aria-label="Options">
                    <Tab key="meaning" title="Meaning">
                      <Card
                        as="div"
                        shadow="none"
                        className="border-1 border-zinc-300"
                      >
                        <CardBody as="div">{latest?.explanation}</CardBody>
                      </Card>
                    </Tab>
                    <Tab key="synonym" title="Synonym">
                      <Card
                        as="div"
                        shadow="none"
                        className="border-1 border-zinc-300"
                      >
                        <CardBody as="div">
                          <ul>
                            {latest?.synonyms?.map((syn, index) => {
                              return (
                                <li className="mb-3" key={syn}>
                                  <span className="font-semibold">
                                    {++index}.{" "}
                                  </span>
                                  <span className="font-sm">{syn}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="examples" title="Example">
                      <Card
                        as="div"
                        shadow="none"
                        className="border-1 border-zinc-300"
                      >
                        <CardBody as="div">
                          <ul>
                            {latest?.examples?.map((ex, index) => {
                              return (
                                <li className="mb-3" key={index}>
                                  <span className="font-semibold">
                                    {++index}.{" "}
                                  </span>
                                  <span className="font-sm">{ex}</span>
                                </li>
                              );
                            })}
                          </ul>
                        </CardBody>
                      </Card>
                    </Tab>
                    <Tab key="translation" title="Translation">
                      <Card
                        as="div"
                        shadow="none"
                        className="border-1 border-zinc-300 text-center font-semibold "
                      >
                        <CardBody
                          as="div"
                          className="text-center font-bold text-lg"
                        >
                          <span>{latest?.translation}</span>
                        </CardBody>
                      </Card>
                    </Tab>
                  </Tabs>
                </div>
              </Tab>
            </Tabs>
          </div>
        </DrawerBody>
      </DrawerContent>
    </DrawerNext>
  );
};
