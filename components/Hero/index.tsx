"use client";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../atoms/hooks/useAuth";
import { fakePhotos } from "../../util/fakeData";
import useWindowDimensions from "../../util/hooks/useWindowDimensions";
import isMobile from "../../util/isMobile";
const distanceFromLast = (x: any, y: any, last: any) => {
  return Math.hypot(x - last.x, y - last.y);
};
export default function Hero() {
  const { user } = useAuth();
  //! error here breaks ssr
  //! fix const [onMobile] = useState(isMobile());
  const [onMobile] = useState(false);
  const [last, setLast] = useState({
    x: 200,
    y: 200,
  });
  const indexRef = useRef<number>(0);
  const pathIndex = useRef<number>(0);
  //   const zxc = useRef<{ x: number; y: number }[]>([]);
  const imagesRef = useRef<HTMLCollectionOf<HTMLElement> | null>(null);
  useEffect(() => {
    const images = document.getElementsByClassName("photo-trail");
    // console.log(images);
    imagesRef.current = images as HTMLCollectionOf<HTMLElement>;
    indexRef.current = 0;
  }, []);
  useEffect(() => {
    if (onMobile) {
      animate();
    }
  }, [onMobile]);

  const activate = (index: number, x: number, y: number) => {
    if (!imagesRef.current) return;
    const image = imagesRef.current[index];
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.zIndex = `${index}`;
    image.dataset.status = "active";
    setLast({
      x,
      y,
    });
  };
  const handleMouseMove = ({ x, y }: { x: number; y: number }) => {
    if (imagesRef.current === null || indexRef.current === null) return;
    const images = imagesRef.current;
    if (distanceFromLast(x, y, last) > window.innerWidth / 20) {
      indexRef.current++;
      activate(indexRef.current % images.length, x, y);
      const tail = images[(indexRef.current - 5) % images.length];
      if (tail) tail.dataset.status = "inactive";
    }
  };

  const animate = () => {
    const path = [
      {
        x: 145,
        y: 125,
      },
      {
        x: 183,
        y: 131,
      },
      {
        x: 209,
        y: 137,
      },
      {
        x: 158,
        y: 324,
      },
      {
        x: 139,
        y: 301,
      },
      {
        x: 90,
        y: 228,
      },
      {
        x: 295,
        y: 135,
      },
      {
        x: 327,
        y: 170,
      },
    ];

    if (pathIndex.current != null) {
      let direction = {
        x: Math.random() > 0.5 ? -1 : 1,
        y: Math.random() > 0.5 ? -1 : 1,
      };
      let current = path[pathIndex.current % path.length];
      let x = current.x + direction.x * Math.random() * 100;
      let y = current.y + direction.y * Math.random() * 100;
      handleMouseMove({
        x,
        y,
      });
    }

    setTimeout(() => {
      pathIndex.current++;
      requestAnimationFrame(animate);
    }, 1000 / 6);
  };

  return (
    <div
      onMouseMove={
        onMobile
          ? undefined
          : (e) => handleMouseMove({ x: e.clientX, y: e.clientY })
      }
      //! remove static height
      className=" border- relative h-[70vmin] overflow-hidden border-primrary  text-lg lg:text-7xl"
    >
      <div className="relative  top-20 z-20 m-6 font-semibold lg:top-20 lg:m-20">
        <h1 className="relative max-w-fit rounded-xl bg-primrary p-2 text-font-secondary  lg:p-4">
          UNIQUE STYLES
        </h1>
        <h1 className="relative left-20 mt-1 max-w-fit rounded-xl bg-primrary p-2 text-font-secondary lg:left-80  lg:p-4">
          FITTING YOUR EVERY NEED
        </h1>
      </div>
      {fakePhotos.map((photo, i) => (
        <img
          key={i}
          data-status={"inactive"}
          className="photo-trail -translate-x-[1/2] absolute w-[40vmin] -translate-y-1/2 "
          src={photo}
        ></img>
      ))}
    </div>
  );
}
