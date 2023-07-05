import Navbar from "../components/Navbar/Navbar";
import { AuthProvider } from "../util/context/AuthContext";
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
        <AuthProvider>
          <Navbar />
          <main className="">
            <div className="m-auto  ">{children}</div>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
