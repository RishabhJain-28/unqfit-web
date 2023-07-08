import React from "react";

export default function Cart() {
  return (
    <div className="  w-10 h-10 float-right">
      <button className="peer ">CLICK</button>
      <div className="border border-primrary peer-hover:right-0 p-2 m-2 transition-all absolute -right-full h-screen w-64">
        Cart
      </div>
    </div>
  );
}
