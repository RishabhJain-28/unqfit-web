// "use client";
// import { useEffect } from "react";
import axios from "axios";
import Hero from "../../components/Hero";
import ProductCard from "../../components/productCard/ProductCard";

export default function Home() {
  // const data = await getData();
  // console.log(data);

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Hero />
      <div className="flex ">
        <div className="container m-auto">
          <section id="Trending Products" className="m-4">
            <h1 className="py-8 text-4xl ">Trending Products</h1>
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
