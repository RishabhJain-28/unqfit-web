import ProviderWrapper from "../util/ProviderWrapper";
import { UserResponseDto } from "../clientApi/.generated";
import Cart from "../components/Cart";
import Navbar from "../components/Navbar/Navbar";
import "./globals.css";

// const getUser = async (): Promise<UserResponseDto> => {
//   // const res = await fetch("http://localhost:5000/products/1");
//   // return res.json();

//   return {
//     name: "THis is my name ",
//     role: "ADMIN",
//     email: "sdas",
//     id: 1,
//   };
// };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await getUser();
  // console.log(user);
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex min-h-screen flex-col">
        {/* Does Jotai provider being an client comp break or mitigate server components */}
        <ProviderWrapper>
          <Cart />
          <Navbar />

          <main>
            <div className="m-auto">{children}</div>
          </main>
        </ProviderWrapper>
      </body>
    </html>
  );
}
