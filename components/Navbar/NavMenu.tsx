"use client";
import { useEffect } from "react";
import { useAuth } from "../../atoms/hooks/useAuth";

export default function NavMenu() {
  const { user, fetchUser } = useAuth();

  //! move
  useEffect(() => {
    console.log("trying");
    if (user) {
      console.log("USER ALREADY THERE");
      return;
    }
    //!no suspense
    //!add loading and error
    //!check SSR
    fetchUser();
  }, []);
  return (
    <ul className="flex gap-4 mx-4 ">
      {user ? (
        <>
          <li>Profile</li>
          <li>Cart</li>
          <li>{user.name}</li>
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
