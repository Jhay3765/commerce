import React from "react";
import Link from "next/link";
export default function Landing() {
  return (
    <section className="bg-[url('/bg.jpeg')] h-screen bg-cover   bg-bottom -z-10  ">
      <main className="py-14 px-2  lg:px-14">
        <div className="text-4xl mb-16 py-12 lg:py-0 lg:text-6xl font-valorant text-gameWhite">
          Welcome Agent, To{" "}
          <span className="border-b-4 border-gameMiddleRed">Valorant.gg</span>
        </div>
        <Link
          href={"/agents"}
          className="text-2xl text-gameWhite font-valorant bg-gameLightRed px-8 py-2 pt-3 hover:bg-gameBlack transition-all duration-300 hover:-translate-y-2 "
        >
          See Agents
        </Link>
      </main>
    </section>
  );
}
