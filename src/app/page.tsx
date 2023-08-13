import React from "react";
import Landing from "./components/Landing";
import Featured from "./components/Featured";
import Newsletter from "./components/Newsletter";
export default function Page() {
  return (
    <main className="bg-gameBlack">
      <Landing />
      <div className="h-4 bg-gameMiddleRed w-full"></div>
      <Featured />
      <Newsletter />
    </main>
  );
}
