"use client";
import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();

const BlogPreview = () => {
  const currentLang = useRecoilValue(currentLanguageValue);

  return (
    <>
      <div className="" id="blog-preview">
        <div className="mx-auto max-w-2xl py-5 px-4 sm:max-w-7xl sm:px-8">
          <h3 className="text-3xl sm:text-5xl font-semibold text-left mt-5 lh-81">
            {translations[currentLang as "en" | "fr"]["home-blog-title"]}{" "}
            <Link
              href={"/blog"}
              className="bg-gradient-to-r from-pictonblue to-pelorous bg-bottom bg-no-repeat bg-[length:100%_6px] hover:bg-[length:100%_100%] transition-[background-size] px-4 hover:text-white hover:font-bold"
            >
              {translations[currentLang as "en" | "fr"]["articles"]}
            </Link>{" "}
            ?
          </h3>
          <p className="text-lg sm:text-2xl font-normal text-left text-bluegray mt-6 mb-3">
            {translations[currentLang as "en" | "fr"]["home-blog-description"]}
          </p>
          <div className="flex justify-center items-center">
            <div className="2xl:mx-auto 2xl:container sm:px-10 sm:py-2 md:py-9 md:px-4 py-9 px-4 w-96 sm:w-auto">
              <div className="sm:flex items-stretch mt-2">
                <div className="sm:w-1/2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 xl:gap-x-8 gap-x-6 gap-y-4">
                    <div
                      className="w-full h-full relative col-span-1 row-span-1 sm:row-span-2 cursor-pointer"
                      onClick={() => {}}
                    >
                      <div>
                        <p className="p-5 text-xs font-medium leading-3 text-white absolute top-0 right-0 bg-pelorous rounded-tr-xl rounded-bl-xl">
                          {new Date().toLocaleDateString(
                            Intl.DateTimeFormat().resolvedOptions().locale,
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h2 className="text-xl font-semibold 5 text-white">
                            Title here
                          </h2>
                          <p className="text-base leading-4 text-white mt-2">
                            Really short description here
                          </p>
                          <Link
                            href="#"
                            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                          >
                            <p className="pr-2 text-sm font-medium leading-none">
                              Read
                            </p>
                            {" > "}
                          </Link>
                        </div>
                      </div>
                      <Image
                        src="https://images.unsplash.com/photo-1521480259767-07c6e39fe142?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-full object-cover rounded-xl"
                        alt=""
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div
                      className="w-full h-full relative col-span-1 row-span-1 sm:row-span-2 cursor-pointer"
                      onClick={() => {}}
                    >
                      <div>
                        <p className="p-5 text-xs font-medium leading-3 text-white absolute top-0 right-0 bg-pelorous rounded-tr-xl rounded-bl-xl">
                          {new Date().toLocaleDateString(
                            Intl.DateTimeFormat().resolvedOptions().locale,
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h2 className="text-xl font-semibold 5 text-white">
                            Title here
                          </h2>
                          <p className="text-base leading-4 text-white mt-2">
                            Really short description here
                          </p>
                          <Link
                            href="javascript:void(0)"
                            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                          >
                            <p className="pr-2 text-sm font-medium leading-none">
                              Read
                            </p>
                            {" > "}
                          </Link>
                        </div>
                      </div>
                      <Image
                        src="https://images.unsplash.com/photo-1537819191377-d3305ffddce4?q=80&w=3442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-full object-cover rounded-xl"
                        alt=""
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                  <div className="relative cursor-pointer" onClick={() => {}}>
                    <div>
                      <p className="p-5 text-xs font-medium leading-3 text-white absolute top-0 right-0 bg-pelorous rounded-tr-xl rounded-bl-xl">
                        {new Date().toLocaleDateString(
                          Intl.DateTimeFormat().resolvedOptions().locale,
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">
                          Title here
                        </h2>
                        <p className="text-base leading-4 text-white mt-2">
                          Really short description here
                        </p>
                        <Link
                          href="javascript:void(0)"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            Read
                          </p>
                          {" > "}
                        </Link>
                      </div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1537819191377-d3305ffddce4?q=80&w=3442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="sitting place"
                      className="w-full mt-8 md:mt-6 hidden sm:block rounded-xl"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full mt-4 sm:hidden rounded-xl"
                      src="https://images.unsplash.com/photo-1537819191377-d3305ffddce4?q=80&w=3442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="sitting place"
                    />
                  </div>
                </div>
                <div className="sm:w-1/2 xl:ml-8 sm:ml-4 sm:mt-0 md:mt-6 mt-4 sm:flex flex-col justify-between">
                  <div className="relative cursor-pointer" onClick={() => {}}>
                    <div>
                      <p className="p-5 text-xs font-medium leading-3 text-white absolute top-0 right-0 bg-pelorous rounded-tr-xl rounded-bl-xl">
                        {new Date().toLocaleDateString(
                          Intl.DateTimeFormat().resolvedOptions().locale,
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-xl font-semibold 5 text-white">
                          Title here
                        </h2>
                        <p className="text-base leading-4 text-white mt-2">
                          Really short description here
                        </p>
                        <Link
                          href="javascript:void(0)"
                          className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
                          <p className="pr-2 text-sm font-medium leading-none">
                            Read
                          </p>
                          {" > "}
                        </Link>
                      </div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1537819191377-d3305ffddce4?q=80&w=3442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="sitting place"
                      className="w-full sm:block hidden rounded-xl"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full sm:hidden rounded-xl"
                      src="https://images.unsplash.com/photo-1537819191377-d3305ffddce4?q=80&w=3442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="sitting place"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 xl:gap-x-8 gap-x-6 gap-y-4 mt-4">
                    <div
                      className="w-full h-full relative col-span-1 row-span-1 sm:row-span-2 cursor-pointer"
                      onClick={() => {}}
                    >
                      <div>
                        <p className="p-5 text-xs font-medium leading-3 text-white absolute top-0 right-0 bg-pelorous rounded-tr-xl rounded-bl-xl">
                          {new Date().toLocaleDateString(
                            Intl.DateTimeFormat().resolvedOptions().locale,
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h2 className="text-xl font-semibold 5 text-white">
                            Title here
                          </h2>
                          <p className="text-base leading-4 text-white mt-2">
                            Really short description here
                          </p>
                          <Link
                            href="javascript:void(0)"
                            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                          >
                            <p className="pr-2 text-sm font-medium leading-none">
                              Read
                            </p>
                            {" > "}
                          </Link>
                        </div>
                      </div>
                      <Image
                        src="https://images.unsplash.com/photo-1521480259767-07c6e39fe142?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-full object-cover rounded-xl"
                        alt=""
                        width={1000}
                        height={1000}
                      />
                    </div>
                    <div
                      className="w-full h-full relative col-span-1 row-span-1 sm:row-span-2 cursor-pointer"
                      onClick={() => {}}
                    >
                      <div>
                        <p className="p-5 text-xs font-medium leading-3 text-white absolute top-0 right-0 bg-pelorous rounded-tr-xl rounded-bl-xl">
                          {new Date().toLocaleDateString(
                            Intl.DateTimeFormat().resolvedOptions().locale,
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>
                        <div className="absolute bottom-0 left-0 p-6">
                          <h2 className="text-xl font-semibold 5 text-white">
                            Title here
                          </h2>
                          <p className="text-base leading-4 text-white mt-2">
                            Really short description here
                          </p>
                          <Link
                            href="javascript:void(0)"
                            className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                          >
                            <p className="pr-2 text-sm font-medium leading-none">
                              Read
                            </p>
                            {" > "}
                          </Link>
                        </div>
                      </div>
                      <Image
                        src="https://images.unsplash.com/photo-1521480259767-07c6e39fe142?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full h-full object-cover rounded-xl"
                        alt=""
                        width={1000}
                        height={1000}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { BlogPreview };
