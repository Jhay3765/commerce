import React from "react";
import AgentCard from "./AgentCard";
import type { AgentData } from "./AgentCard";
import Image from "next/image";
import getData from "../../../lib/GetData";

export default async function Page() {
  const ValorantData = await getData();

  return (
    <div className=" flex justify-center items-center bg-gameBlack w-full py-8">
      <ul className="flex gap-8 flex-wrap justify-center max-w-6xl">
        {ValorantData.map((agent: AgentData, index: number) => {
          return <AgentCard data={agent} key={index} />;
        })}
      </ul>
    </div>
  );
}
