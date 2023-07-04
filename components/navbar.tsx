import SearchBar from "./searchBar";

export default function Navbar() {
  return (
    <nav className="bg-black text-primrary">
      <div className="mx-4 flex h-20 items-center justify-between   ">
        <img src="../next.svg" className="w-20 bg-white" />
        <SearchBar />
        <ul className="flex gap-2">
          <li>home</li>
          <li>login</li>
        </ul>
      </div>
    </nav>
  );
}
