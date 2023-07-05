"use client";
import React, { useContext } from "react";
import { useAuthContext } from "../../util/context/AuthContext";

export default function NavMenu() {
  const { user } = useAuthContext();

  //   if (user) {
  //     return (
  //       <ul className="">
  //       </ul>
  //     );
  //   }

  return (
    <ul className="flex gap-4 mx-4 ">
      {user ? (
        <>
          <li>Profile</li>
          <li>Cart</li>
        </>
      ) : (
        <>
          <li>Home </li>
          <li>Login</li>
        </>
      )}
    </ul>
  );
}
