import React from "react";
import Link from "next/link";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";
import Featured from "./components/Featured";
export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Landing />
      <Featured />
    </main>
  );
}
