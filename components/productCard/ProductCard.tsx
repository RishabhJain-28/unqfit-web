import { fakePhotos } from "../../util/fakeData";

export default function ProductCard() {
  return (
    <div className="">
      {/* <div className="max-w-md w-full bg-gray-900 shadow-lg rounded-xl p-6"> */}
      <div className=" w-full rounded-xl border-primrary   bg-transparent shadow-lg ">
        <div className="flex flex-col ">
          <div className="">
            <div className="relative  mb-3">
              {/* wishlist */}
              <div className="absolute top-0 right-0 flex flex-col p-3">
                <button className="bg-t h-8 w-8 rounded-full  p-1 text-center text-accent shadow transition duration-300 ease-in hover:text-purple-500 hover:shadow-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
              </div>
              {/* wishlist end */}

              {/* image */}
              <div className="max-w-[35vmin]">
                <img
                  src={fakePhotos[0]}
                  alt="Just a flower"
                  className="  rounded-2xl object-cover  object-center"
                />
              </div>
              {/* image end */}
            </div>

            <div className="flex-auto justify-evenly">
              <div className="flex flex-wrap ">
                {/* Rating */}
                <div className="flex w-full flex-none items-center text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-1 h-4 w-4 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="mr-3 whitespace-nowrap text-gray-400">
                    4.60
                  </span>
                  <span className="mr-2 text-gray-400">India</span>
                </div>
                {/* Rating end*/}

                <div className="flex w-full min-w-0 items-center justify-between ">
                  <h2 className="mr-auto cursor-pointer truncate text-xl text-gray-200 hover:text-secondary ">
                    Mustard Jacket
                  </h2>
                </div>
              </div>

              <div className="mt-1 text-xl font-semibold text-white">
                $240.00
              </div>

              <div className="flex  pt-4  text-sm text-gray-600">
                <div className="inline-flex flex-1 items-center ">
                  <span className="mr-3 whitespace-nowrap text-secondary">
                    Size
                  </span>
                  <div className="cursor-pointer text-gray-400 ">
                    <span className="p-1 py-0 hover:text-secondary">S</span>
                    <span className="p-1 py-0 hover:text-secondary">M</span>
                    <span className="p-1 py-0 hover:text-secondary">L</span>
                    <span className="p-1 py-0 hover:text-secondary">XL</span>
                  </div>
                </div>
                <button className="mb-2 inline-flex items-center rounded-full bg-primrary px-5 py-2 text-sm font-medium tracking-wider  text-font-secondary transition duration-300 ease-in hover:bg-accent hover:shadow-lg md:mb-0">
                  <span>Add Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
