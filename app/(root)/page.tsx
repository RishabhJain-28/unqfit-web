import { Inter } from "@next/font/google";
import Hero from "../../components/Hero";
import ProductCard from "../../components/productCard/ProductCard";
import SearchBar from "../../components/searchBar";
import { fakePhotos } from "../../util/fakeData";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const handleMouseMove = (e: MouseEvent) => {
  //   console.log(e);
  //   if (imagesRef.current == null) return;
  //   console.log("next");
  //   const images = imagesRef.current;
  //   if (distanceFromLast(e.clientX, e.clientY, last) > window.innerWidth / 20) {
  //     const lead = images[index % images.length],
  //       tail: any = images[(index - 5) % images.length];
  //     activate(lead, e.clientX, e.clientY);
  //     if (tail) tail.dataset.status = "inactive";
  //     setIndex(index + 1);
  //   }
  // };

  return (
    <div className="">
      <Hero />
      {/* <div className="grid grid-cols-6 grid-row-2">
        <div className="bg-purple-600 w-[300px] h-[300px] relative">
          <div className="absolute top-0 left-0 bg-black p-2 text-3xl">
            Name
          </div>
          <div className="absolute top-0 right-0 bg-black p-2">Price</div>
          <div className="w-full h-full flex justify-center items-center">
            Img
          </div>
        </div>
      </div> */}
      <div className="flex ">
        <div className="container m-auto">
          <section id="Trending Products" className="m-4">
            <h1 className="py-8 text-4xl "> Trending Products</h1>
            <div className="flex flex-wrap gap-4 lg:flex-nowrap lg:justify-between">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
