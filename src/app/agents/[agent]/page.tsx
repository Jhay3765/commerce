import React from "react";
import type { Metadata } from "next";
import Hero from "./hero";
import getData from "../../../../lib/GetData";
import Image from "next/image";
import { AgentVids } from "../../../../lib/Agentvids";
import { FaQuestion } from "react-icons/fa";

const agentPlace = {
  Gekko: 0,
  Fade: 1,
  Breach: 2,
  Deadlock: 3,
  Raze: 4,
  Chamber: 5,
  Kayo: 6,
  Skye: 7,
  Cypher: 8,
  Sova: 9,
  Killjoy: 10,
  Harbor: 11,
  Viper: 12,
  Phoenix: 13,
  Astra: 14,
  Brimstone: 15,
  Neon: 16,
  Yoru: 17,
  Sage: 18,
  Reyna: 19,
  Omen: 20,
  Jett: 21,
};
type AgentDat = {
  displayName: string;
  displayIcon?: string;
};
type Params = {
  params: {
    agent: keyof typeof agentPlace;
  };
};
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const metadata = params.agent;

  return {
    title: metadata,
  };
}
export default async function AgentPage({ params: { agent } }: Params) {
  const ValorantDataArray = await getData();
  const CurrentAgent = ValorantDataArray[agentPlace[agent]];

  if (!CurrentAgent) {
    return (
      <div className="text-4xl    lg:text-6xl text-center w-full flex justify-center items-center flex-col  py-48">
        <FaQuestion size={200} />
        <p className="py-4"> You have searched for an unknown agent</p>
      </div>
    );
  }
  console.log(CurrentAgent);
  const agentVideo = AgentVids[agent as keyof typeof AgentVids];
  return (
    <div className="bg-gray-100/90">
      <div className="absolute right-0 top-0 hidden lg:block">
        <figure className=" w-[500px] h-[1000px] ">
          <Image
            src={CurrentAgent?.fullPortrait}
            alt={agent}
            className=""
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </figure>
      </div>

      <Hero data={CurrentAgent} />
      <div className="z-40 relative ">
        <div className="flex flex-wrap py-12 gap-4  px-4 2xl:px-48 text-2xl ">
          <p className="max-w-2xl w-full py-12 text-left">
            {CurrentAgent?.description}
          </p>
          <iframe
            className="p-2 rounded-sm bg-black w-full max-w-3xl"
            height="500"
            src={agentVideo}
          ></iframe>
        </div>
      </div>
      <h2
        className="text-black/30 text-[300px] font-valorant fixed bottom-0  lg:px-48 -z-40"
        style={{ writingMode: "vertical-rl" }}
      >
        GEKKO
      </h2>
    </div>
  );
}
