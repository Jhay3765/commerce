import React from "react";

export default function Newsletter() {
  return (
    <div className="flex justify-center py-24 ">
      <section className="px-8 py-14 bg-gameMiddleRed max-w-2xl ">
        <h1 className="font-bold  text-white text-2xl lg:text-4xl py-12   lg:whitespace-nowrap ">
          Sign Up For Our Newsletter
        </h1>
        <form
          action=""
          className=" flex flex-col gap-8 [&>*]:py-2  [&>*]:px-2 max-w-lg"
        >
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Nickname" />
          <select name="" id="" placeholder="Favorite Agent">
            <option value="" className="text-gray-600">
              Pick a Favorite Agent
            </option>
            <option value="">Breach</option>
          </select>
          <div className="text-white">
            <input type="checkbox" value="" id="confirm" />
            <label htmlFor="confirm" className="px-4">
              I agree to receive emails about valorant news and updates
            </label>
          </div>

          <button className="bg-gameBlack text-white text-3xl  ">
            SUBSCRIBE
          </button>
        </form>
      </section>
    </div>
  );
}
