import React from "react";
import Image from "next/image";
type Props = {
  title?: string;
  img: string;
  size?: number;
};
export default function FeaturedCard(props: Props) {
  return (
    <div className="rounded-2xl  w-fit flex flex-col gap-8 ">
      <div className="relative w-60 h-72">
        <Image
          src={props.img}
          alt=""
          className="rounded-xl shadow-lg p-1"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <h2 className="text-center bg-gameBlack text-gameWhite py-4 rounded-sm font-bold tracking-wider text-xl">
        {props.title}
      </h2>
    </div>
  );
}
