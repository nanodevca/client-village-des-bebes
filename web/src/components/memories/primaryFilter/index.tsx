"use client";
import { albums } from "@/src/data/memoriesGallery/galleryData";
import { PrimaryFilterCard } from "../primaryFilterCard";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";

const PrimaryFilter = () => {
  const currentLang = useRecoilValue(currentLanguageValue);

  return (
    <>
      <div className="w-full lg:px-10 py-5 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-y-10 lg:gap-x-5">
        {albums(currentLang as "en" | "fr").map((album, x) => (
          <PrimaryFilterCard
            key={album.tag}
            name={album.name}
            albumCover={album.cover}
            filterKey={album.tag}
          />
        ))}
      </div>
    </>
  );
};

export { PrimaryFilter };
