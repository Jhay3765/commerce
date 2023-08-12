import React from "react";
import FeaturedCard from "./FeaturedCard";
export default function Featured() {
  return (
    <div className="px-8 py-12">
      <h1 className="text-5xl text-gameMiddleRed font-bold">
        Shop Our Products{" "}
      </h1>
      <hr className="border border-black my-12" />
      <ul className="flex gap-24 justify-center">
        <FeaturedCard title="Posters" img="/poster/poster.png" />
        <FeaturedCard title="Phone Cases" img="/case.png" size={300} />
        <FeaturedCard title="Clothing" img="/shirt.png" size={300} />
      </ul>
    </div>
  );
}
