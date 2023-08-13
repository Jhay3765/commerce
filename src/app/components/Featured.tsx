import React from "react";
import FeaturedCard from "./FeaturedCard";
export default function Featured() {
  return (
    <div className="px-8 py-12 bg-gameWhite ">
      <h1 className="text-5xl text-gameBlack font-bold font-valorant border-b-4 py-4 w-fit border-gameMiddleRed my-8 ">
        Shop Our Products{" "}
      </h1>

      <ul className="flex gap-24  font-valorant">
        <FeaturedCard title="Posters" img="/poster/poster.png" />
        <FeaturedCard title="Phone Cases" img="/case.png" size={200} />
        <FeaturedCard title="Clothing" img="/shirt.png" size={200} />
      </ul>
    </div>
  );
}
