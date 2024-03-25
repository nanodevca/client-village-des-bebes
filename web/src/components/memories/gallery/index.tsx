"use client";
import {
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/src/components/bottomDrawer";
import IsoTopeGrid from "react-isotope";
import { GalleryImageCard } from "../galleryImageCard";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentFilter, filters } from "@/src/atoms/memoriesFilter";
import { AlbumsFilters } from "@/src/types/memories";
import { getTranslation, mergeStyle } from "@/src/utils/functions";
import {
  albums,
  galleryImages,
  galleryImagesLayout,
} from "@/src/data/memoriesGallery/galleryData";
import { GalleryVideoCard } from "../galleryVideoCard";
import { currentLanguageValue } from "@/src/atoms/language";

const Gallery = ({
  imageFullScreenURLUpdater,
  videoFullScreenURLUpdater,
  imageFullScreenToggler,
  videoFullScreenToggler,
}: {
  imageFullScreenURLUpdater: (url: string) => void;
  videoFullScreenURLUpdater: (url: string) => void;
  imageFullScreenToggler: () => void;
  videoFullScreenToggler: () => void;
}) => {
  const [actualFilter, setCurrentFilter] = useRecoilState(currentFilter);
  const [actualFilters, setFilters] = useRecoilState<AlbumsFilters>(filters);
  const currentLang = useRecoilValue(currentLanguageValue);
  const translations = getTranslation();

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
  };

  const getAlbumTitle = () => {
    const album = albums(currentLang as "en" | "fr").find(
      (album) => album.tag === actualFilter
    );
    return (
      album?.name ??
      `${translations[currentLang as "en" | "fr"]["memories-album-all-albums"]}`
    );
  };

  const getAlbumTag = () => {
    const album = albums(currentLang as "en" | "fr").find(
      (album) => album.tag === actualFilter
    );
    return album?.tag ?? "all";
  };

  return (
    <>
      <DrawerContent className="fixed inset-x-0 bottom-0 z-50 flex w-full items-center justify-center h-[85%] flex-col rounded-t-[10px] border bg-lilywhite">
        <DrawerHeader className="grid gap-1.5 p-4 text-left container mt-5">
          <DrawerTitle className="text-4xl font-medium leading-none tracking-tight">
            {getAlbumTitle()}
          </DrawerTitle>
        </DrawerHeader>
        <div
          className={`container p-5 h-full pl-[2rem] lg:pl-[5rem] flex overflow-y-scroll mt-5`}
        >
          <IsoTopeGrid
            gridLayout={galleryImagesLayout}
            noOfCols={window.innerWidth <= 768 ? 3 : 4}
            unitWidth={
              window.innerWidth <= 768
                ? window.innerWidth / 4
                : window.innerWidth / 5
            }
            unitHeight={window.innerHeight / 4}
            filters={actualFilters}
          >
            {galleryImagesLayout.map((image, x) => (
              <div
                key={image.id}
                className={mergeStyle(
                  "bg-pictonblue w-full rounded-xl border-none shadow-xl",
                  image.filter[0]
                )}
              >
                {galleryImages[x]["type"] === "image" ? (
                  <GalleryImageCard
                    image={galleryImages[x].src}
                    imageFullScreenToggler={imageFullScreenToggler}
                    imageFullScreenURLUpdater={imageFullScreenURLUpdater}
                  />
                ) : (
                  <GalleryVideoCard
                    video={galleryImages[x].src}
                    videoFullScreenToggler={videoFullScreenToggler}
                    videoFullScreenURLUpdater={videoFullScreenURLUpdater}
                  />
                )}
              </div>
            ))}
          </IsoTopeGrid>
        </div>
        <DrawerFooter className="mt-auto flex justify-center items-center w-full bg-transparent z-50 bottom-5 fixed inset-x-0">
          <div className="bg-darkblue py-4 px-4 w-max grid grid-cols-2 gap-2 lg:flex lg:flex-row justify-center items-center lg:space-x-3 rounded-2xl lg:rounded-full shadow-2xl z-50">
            <div
              onClick={() => {
                handleFiltersUpdate("all");
                handleAlbumChange("all");
              }}
              className={`rounded-full w-max h-max px-5 py-4 cursor-pointer ${
                getAlbumTag() === "all" ? "bg-pictonblue" : "bg-lilywhite"
              }`}
            >
              <p
                className={`${
                  getAlbumTag() == "all"
                    ? "text-lilywhite font-semibold"
                    : "text-darkblue font-medium"
                } text-center text-sm`}
              >
                {`${
                  translations[currentLang as "en" | "fr"][
                    "memories-album-all-albums"
                  ]
                }`}
              </p>
            </div>
            {albums(currentLang as "en" | "fr").map((album, x) => (
              <div
                key={x}
                onClick={() => {
                  handleFiltersUpdate(album.tag);
                  handleAlbumChange(album.tag);
                }}
                className={`rounded-full w-[11rem] lg:w-max h-max px-5 py-4 cursor-pointer overflow-hidden ${
                  album.tag === actualFilter ? "bg-pictonblue" : "bg-lilywhite"
                }`}
              >
                <p
                  className={`${
                    album.tag == actualFilter
                      ? "text-lilywhite font-semibold"
                      : "text-darkblue font-medium"
                  } text-center text-sm truncate`}
                >
                  {album.name}
                </p>
              </div>
            ))}
          </div>
        </DrawerFooter>
        <div className="bg-transparent fixed h-[15%] p-10 w-full bottom-0" />
      </DrawerContent>
    </>
  );
};

export { Gallery };
