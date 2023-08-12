import React from "react";

export default function Landing() {
  return (
    <section className="bg-[url('/Valgif.gif')] h-[800px] bg-black/20 bg-blend-multiply">
      <main className="py-14 px-14">
        <div className="text-6xl font-valorant">
          Welcome Agent, To{" "}
          <span className="border-b-4 border-gameMiddleRed">Valorant.gg</span>
        </div>
        <button className="bg-gameLightRed px-8 py-2 text-3xl font-valorant">
          Join
        </button>
      </main>
    </section>
  );
}
