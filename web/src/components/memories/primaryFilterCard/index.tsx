"use client";
import Image from "next/image";

import { DrawerTrigger } from "@/src/components/bottomDrawer";
import { AlbumsFilters } from "@/src/types/memories";
import { useRecoilState } from "recoil";
import { currentFilter, filters } from "@/src/atoms/memoriesFilter";

const PrimaryFilterCard = ({
  name,
  albumCover,
  filterKey,
}: {
  name: string;
  albumCover: string;
  filterKey: string;
}) => {
  const [actualFilter, setCurrentFilter] = useRecoilState(currentFilter);
  const [actualFilters, setFilters] = useRecoilState<AlbumsFilters>(filters);

  const handleAlbumChange = (filter: string) => {
    setCurrentFilter(filter);
  };

  const handleFiltersUpdate = (filter: string) => {
    const updatedFilters = actualFilters.map((f) => {
      if (f.label === filter) {
        return { ...f, isChecked: f.isChecked ? false : true };
      }
      return { ...f, isChecked: false };
    });
    setFilters(updatedFilters);
    console.log("FILTERSSSSS UPDATED", updatedFilters);
  };

  return (
    <>
      <DrawerTrigger>
        <div
          onClick={() => {
            handleFiltersUpdate(filterKey);
            handleAlbumChange(filterKey);
          }}
          className="w-[11rem] lg:w-[15rem] h-full flex space-y-2 flex-col p-4 bg-lilywhite rounded-xl cursor-pointer"
        >
          <div className="rounded-md h-full w-full relative">
            <Image
              alt=""
              width={500}
              height={500}
              className="w-full object-cover h-50 rounded-xl"
              src={`${albumCover}`}
            />
          </div>
          <p className="text-darkblue text-center text-lg">{name}</p>
        </div>
      </DrawerTrigger>
    </>
  );
};

export { PrimaryFilterCard };
