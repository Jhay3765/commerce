import React from "react";
import Landing from "./components/Landing";
import Featured from "./components/Featured";
import Newsletter from "./components/Newsletter";
import NavBar from "./components/NavBar";
import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-gameBlack overflow-y-hidden h-screen">
      <nav className=" text-gameWhite  flex px-4 lg:px-24 justify-end relative top-0  w-full z-40  font-valorant bg-gameLightRed py-1 pt-3 text-2xl   ">
        <ul className="flex gap-4  lg:gap-24">
          <Link
            href="/"
            className="hover:text-gameBlack transition-all duration-200"
          >
            {" "}
            Home
          </Link>

          <Link
            href="/agents"
            className="hover:text-gameBlack transition-all duration-200"
          >
            Agents
          </Link>
        </ul>
      </nav>
      <Landing />
    </main>
  );
}
