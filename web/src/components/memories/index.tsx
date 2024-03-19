"use client";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";
import { PrimaryFilter } from "./primaryFilter";
import { useState } from "react";

const MemoriesContent = () => {
  const currentLang = useRecoilValue(currentLanguageValue);

  const gallery = [
    {
      id: "a",
      row: 0,
      col: 0,
      w: 1,
      h: 1,
      filter: ["test", "chart"],
    },
    {
      id: "b",
      row: 0,

      col: 1,
      w: 1,
      h: 1,
      filter: ["test1", "tile"],
    },
    {
      id: "c",
      row: 0,
      col: 3,
      w: 1,
      h: 1,
      filter: ["test", "chart"],
    },
    {
      id: "d",
      row: 1,
      col: 0,
      w: 1,
      h: 1,
      filter: ["test1", "tile"],
    },
    {
      id: "e",
      row: 1,
      col: 1,
      w: 1,
      h: 1,
      filter: ["test", "tile"],
    },
    {
      id: "f",
      row: 1,
      col: 2,
      w: 1,
      h: 1,
      filter: ["test1", "chart"],
    },
    {
      id: "h",
      row: 2,
      col: 0,
      w: 1,
      h: 1,
      filter: ["test1", "chart"],
    },
    {
      id: "i",
      w: 1,
      h: 2,
      filter: ["test1", "chart"],
    },
  ];

  const baseFilters = [
    { label: "all", isChecked: true },
    { label: "test", isChecked: false },
    { label: "test1", isChecked: false },
    { label: "chart", isChecked: false },
    { label: "tile", isChecked: false },
  ];

  const translations = getTranslation();

  const [filters, setFilters] = useState(baseFilters);

  const updateFilters = (filter: string) => {
    const updatedFilters = filters.map((f) => {
      if (f.label === filter) {
        return { ...f, isChecked: !f.isChecked };
      }
      return { ...f, isChecked: false };
    });
    setFilters(updatedFilters);
  };

  return (
    <>
      <div className="w-full grid grid-cols-1">
        <div className="w-full h-[500px]">
          <div className="rounded-md h-full w-full relative">
            <Image
              alt=""
              width={2560}
              height={1440}
              className="w-full h-full object-cover"
              src="/assets/images/memories/IMG_5650.jpeg"
            />
            <div className="absolute inset-0 p-6 lg:py-16 lg:px-28 text-white flex flex-col justify-center bg-slate-700 bg-opacity-70">
              <div className="relative">
                <h1 className="text-6xl font-bold mb-4">
                  {translations[currentLang as "en" | "fr"]["navbar-photos"]}
                </h1>
              </div>
              <div className="relative max-w-[600px]">
                <h1 className="text-xl font-light mb-4">
                  Checkout these amazing memories from some of our previous
                  events and activities.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto mt-2">
          <div className="mx-auto max-w-7xl px-4 py-10 lg:py-16 lg:px-8">
            <h2
              className="text-4xl lg:text-5xl font-bold text-darkblue mb-7"
              id="story"
            >
              Welcome to the gallery
            </h2>
            <PrimaryFilter galleryData={gallery} filters={filters} />
          </div>
        </div>
      </div>
    </>
  );
};

export { MemoriesContent };
