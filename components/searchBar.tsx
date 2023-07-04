import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
  return (
    <div className=" flex basis-1/3 items-center  rounded-lg border-2  border-primrary ">
      <input
        placeholder="search"
        className="w-full rounded-lg bg-black p-2 p-2  placeholder:text-primrary placeholder:opacity-50 focus:outline-none"
      />
      <AiOutlineSearch className="w-10 font-bold" />
    </div>
  );
}
