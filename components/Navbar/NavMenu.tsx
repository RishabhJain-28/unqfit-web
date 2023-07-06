"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useAuth } from "../../atoms/hooks/useAuth";
import Menu from "../Menu";
import MenuItem from "../Menu/MenuItem";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function NavMenu() {
  const { user, fetchUser, signOut } = useAuth();
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
    <div className="flex gap-5 mx-4 ">
      {user ? (
        <>
          <Menu
            renderToggleButton={
              <button className="flex justify-center items-center rounded-full">
                <FaRegUserCircle size={30} className="rounded-full text-xl  " />
              </button>
            }
          >
            <div
              className=""
              onClick={() => {
                console.log("Profile");
              }}
            >
              Profile
            </div>
            <div>My orders</div>
            <div
              onClick={() => {
                console.log("SDa");
                signOut();
                //!add alert
              }}
            >
              Logout
            </div>
          </Menu>
          <button className="flex justify-center items-center">
            <AiOutlineShoppingCart className="text-xl  w-10 " size={30} />
          </button>
        </>
      ) : (
        <>
          {/* <div> */}
          <Link href="/signin"> Sign In </Link>
          <Link href="/signup"> Sign Up </Link>
          {/* </div> */}
          {/* <li>Signup </li> */}
        </>
      )}
    </div>
  );
}
