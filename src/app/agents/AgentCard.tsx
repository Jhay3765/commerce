"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export type AgentData = {
  displayName: string;
  displayIcon: string;
  role: roleData;
  abilities: Abilities[];
};
type roleData = {
  displayName: string;
};
type Abilities = {
  slot: string;
  displayName: string;
  displayIcon: string;
};
interface AgentCardProps {
  data: AgentData;
}

export default function AgentCard({ data }: AgentCardProps) {
  const { displayName, displayIcon, role, abilities } = data;
  const { displayName: roleName } = role || {};

  return (
    <section className="bg-gameMiddleRed w-96 h-48  shadow py-4 px-4  ">
      <main className="grid grid-cols-2 gap-4 ">
        <div className="">
          <h1 className="font-valorant text-4xl pt-2">{displayName}</h1>
          <p className="  text-gameWhite px-2  rounded-md font-thin ">
            {roleName}
          </p>
        </div>

        <div className="flex justify-center">
          <Image alt="img" width={100} height={200} src={displayIcon} />
        </div>

        <article className="flex gap-4">
          {abilities.map((ability) => {
            if (!ability?.displayIcon) {
              return;
            }
            if (ability?.slot === "Passive") {
              return;
            }
            return (
              <div className="border  p-1 h-fit rounded-lg">
                <Image
                  alt="img"
                  width={30}
                  height={20}
                  src={ability?.displayIcon || "/e"}
                />
              </div>
            );
          })}
        </article>
        <div className="flex justify-center">
          <Link
            href={
              displayName == "KAY/O" ? "agents/Kayo" : "agents/" + displayName
            }
            className="py-2 px-2 border rounded-md text-sm text-white w-fit hover:border-2 hover:-m-1 "
          >
            View Agent
          </Link>
        </div>
      </main>
    </section>
  );
}
