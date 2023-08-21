import React from "react";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className=" text-gameWhite  flex px-4 lg:px-24 justify-end relative top-0  w-full z-40  font-valorant bg-gameBlack  py-2 pt-3 text-2xl   ">
      <ul className="flex gap-4  lg:gap-24">
        <Link href="/" className="">
          {" "}
          Home
        </Link>

        <Link href="/agents">Agents</Link>
      </ul>
    </nav>
  );
}
