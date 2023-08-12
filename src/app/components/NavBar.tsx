import React from "react";
import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="border-b text-black border-black flex px-24 justify-end relative top-0  w-full z-40 bg-gameMiddleRed font-valorant   py-4 text-2xl   ">
      <ul className="flex gap-24">
        <Link href="/"> Home</Link>
        <Link href="/store">Shop</Link>
        <Link href="/agents">Agents</Link>
      </ul>
    </nav>
  );
}
