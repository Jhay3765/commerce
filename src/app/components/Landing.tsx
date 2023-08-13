import React from "react";

export default function Landing() {
  return (
    <section className="bg-[url('/Valgif.gif')] pb-80  bg-center -z-10  ">
      <h1
        className="font-valorant absolute text-6xl -z-20 text-gameBlack/10 bottom-0"
        style={{ writingMode: "vertical-lr" }}
      >
        WELCOME{" "}
      </h1>
      <main className="py-14 px-2  lg:px-14">
        <div className="text-4xl    lg:text-6xl font-valorant text-gameBlack">
          Welcome Agent, To{" "}
          <span className="border-b-4 border-gameMiddleRed">Valorant.gg</span>
        </div>
        <button className="bg-gameLightRed px-8 py-2 pt-3 text-3xl my-8 font-valorant">
          Join
        </button>
      </main>
    </section>
  );
}
