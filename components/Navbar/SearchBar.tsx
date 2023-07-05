import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <div className="font-semibold flex basis-1/4 items-center  rounded-full border-2  border-primrary-variant ">
      <input
        placeholder="search"
        className="w-full rounded-full bg-black py-2 px-4   placeholder:text-primrary placeholder:opacity-50 focus:outline-none text-lg"
      />
      <AiOutlineSearch className="w-10 font-bold" />
    </div>
  );
}
