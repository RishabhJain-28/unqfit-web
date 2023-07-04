import Navbar from "../components/navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="">
          <div className="m-auto  ">{children}</div>
        </main>
      </body>
    </html>
  );
}
