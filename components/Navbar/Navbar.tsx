import { Suspense } from "react";
import NavMenu from "./NavMenu";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="bg-black text-primrary">
      <div className="mx-4 flex h-20 items-center justify-between   ">
        <img src="../next.svg" className="w-20 bg-white" />
        <SearchBar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <NavMenu />
        </Suspense>
      </div>
    </nav>
  );
}
