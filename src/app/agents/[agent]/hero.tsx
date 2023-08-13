"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
type Agent = {
  displayName: string;
  role: roleData;
  abilities: Abilities[];
  fullPortrait: string;
};
type Abilities = {
  slot: string;
  displayName: string;
  displayIcon: string;
  description: string;
};
type roleData = {
  displayName: string;
};

type AgentData = {
  data: Agent;
};

export default function Hero({ data }: AgentData) {
  const { displayName, role, abilities, fullPortrait } = data;

  const [open, setOpen] = useState(false);
  const items = [1, 2, 3, 4];

  return (
    <section className="bg-gameMiddleRed -z-10 ">
      <article className="leading-3 max-w-7xl sm:px-48 text-center sm:text-left ">
        <p className="font-valorant text-5xl    2xl:text-9xl pt-12 ">
          {displayName.toUpperCase()}
        </p>
        <p className=" text-2xl   md:text-4xl font-bold px-1 pb-4 whitespace-nowrap">
          {role?.displayName}
        </p>
      </article>

      <main className="bg-gameBlack py-4  ">
        <figure className="relative lg:hidden flex justify-center ">
          <Image
            src={fullPortrait}
            alt="agent"
            className=""
            width={400}
            height={400}
          />
        </figure>
        <section className="text-white max-w-md 2xl:ml-48 flex justify-between px-12 text-2xl py-4 z-40">
          <h1>ABILITIES</h1>
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <AiOutlineMinusCircle size={30} />
            ) : (
              <AiOutlinePlusCircle size={30} />
            )}
          </button>
        </section>
        {open && (
          <div className="    shadow max-w-5xl    px-2   2xl:px-48 ">
            {abilities.map((ability, index) => {
              if (!ability?.displayIcon) {
                return;
              }
              if (ability?.slot === "Passive") {
                return;
              }
              return (
                <div
                  key={index}
                  className="flex-col flex sm:flex-row  sm:gap-8 flex-wrap  border-b border-gameMiddleRed items-center "
                >
                  <p className="   text-gameLightRed font-valorant text-2xl py-4 sm:[writing-mode:vertical-lr]">
                    {ability?.displayName}
                  </p>
                  <div className="flex items-center ">
                    <Image
                      width={100}
                      height={100}
                      color="black"
                      src={ability?.displayIcon}
                      alt=""
                    />
                  </div>

                  <p className="text-white text-xs max-w-sm py-4 lg:py-0">
                    {ability?.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </section>
  );
}
