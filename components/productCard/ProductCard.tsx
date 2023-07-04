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
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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

                {/* Title */}
                <div className="flex w-full min-w-0 items-center justify-between ">
                  <h2 className="mr-auto cursor-pointer truncate text-xl text-gray-200 hover:text-secondary ">
                    Mustard Jacket
                  </h2>
                </div>
                {/* Title end */}
              </div>
              {/* Price */}
              <div className="mt-1 text-xl font-semibold text-white">
                $240.00
              </div>
              {/* Price end */}
              {/* Size and color grp */}

              <div className="flex  pt-4  text-sm text-gray-600">
                {/* Color */}
                {/* <div className="flex-1 inline-flex items-center  mb-3">
                  <div className="w-full flex-none text-sm flex items-center text-gray-600">
                    <ul className="flex flex-row justify-center items-center space-x-2">
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                          <a
                            href="#blue"
                            className="block w-3 h-3 bg-blue-600 rounded-full"
                          ></a>
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                          <a
                            href="#yellow"
                            className="block w-3 h-3  bg-yellow-400 rounded-full"
                          ></a>
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                          <a
                            href="#red"
                            className="block w-3 h-3  bg-red-500 rounded-full"
                          ></a>
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                          <a
                            href="#green"
                            className="block w-3 h-3  bg-green-500 rounded-full"
                          ></a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* Color end */}

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
                <button className="mb-2 inline-flex items-center rounded-full bg-primrary px-5 py-2 text-sm font-medium tracking-wider text-white text-font-secondary transition duration-300 ease-in hover:bg-accent hover:shadow-lg md:mb-0">
                  <span>Add Cart</span>
                </button>
              </div>

              {/* Size and color grp emd */}

              {/* Btn grp */}
              <div className="my-4 flex justify-between space-x-2 text-sm font-medium ">
                {/* <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                  <span>Add Cart</span>
                </button> */}
                {/* <button className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button> */}
                {/* <div className=" flex flex-col top-0 right-0 ">
                  <button className="transition ease-in duration-300 bg-secondary  hover:text-purple-500 shadow hover:shadow-md text-font-secondary rounded-full w-8 h-8 text-center p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div> */}
              </div>
              {/* Btn grp end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
