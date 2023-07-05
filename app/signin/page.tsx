"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useAuthContext } from "../../util/context/AuthContext";

export default function Signin() {
  const { signIn, user } = useAuthContext();
  const [email, setEmail] = useState("abc@gmail.com");
  const [password, setPassword] = useState("Abc@12345");
  // const getData = async () => {
  //   try {
  //     const data = await axios
  //       .get("http://localhost:5000/products/all", {
  //         withCredentials: false,
  //       })
  //       .then((data) => data.data);
  //     console.log(data);
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(())

  useEffect(() => {
    console.log("user", user);
  }, [user]);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg rounded-lg border-2 border-cyan-500 p-4">
        <h1 className="text-center text-2xl font-bold text-cyan-500 sm:text-3xl">
          Enter the world of fashion
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-cyan-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p>

        <div
          // onSubmit={(e) => e.preventDefault()}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 text-black"
        >
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="pe-12 w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                className="pe-12 w-full rounded-lg border-gray-200 p-4 text-sm shadow-sm"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span className="end-0 absolute inset-y-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            // type="submit"
            onClick={() => {
              signIn({
                email,
                password,
              });
            }}
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>

          <p className="text-center text-sm text-gray-500">
            No account?
            <a className="underline" href="">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
