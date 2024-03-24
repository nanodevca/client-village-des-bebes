"use client";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";
import { PrimaryFilter } from "./primaryFilter";

import { Drawer } from "@/src/components/bottomDrawer";
import { Gallery } from "./gallery";
import { useEffect, useState } from "react";
import { GalleryImageFullViewCard } from "./galleryImageFullViewCard";
import { GalleryVideoFullViewCard } from "./galleryVideoFullViewCard";

const MemoriesContent = () => {
  const currentLang = useRecoilValue(currentLanguageValue);
  const translations = getTranslation();
  const [imageFullView, setImageFullView] = useState(false);
  const [videoFullView, setVideoFullView] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [videoURL, setVideoURL] = useState("");

  const toggleImageFullView = () => {
    setVideoFullView(false);
    setImageFullView(!imageFullView);
  };

  const toggleVideoFullView = () => {
    setImageFullView(false);
    setVideoFullView(!videoFullView);
  };

  const handleImageURLUpdate = (url: string) => {
    setImageURL(url);
  };

  const handleVideoURLUpdate = (url: string) => {
    setVideoURL(url);
  };

  useEffect(() => {
    if (imageFullView || videoFullView) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [imageFullView, videoFullView]);

  return (
    <>
      <GalleryImageFullViewCard
        toggler={toggleImageFullView}
        image={imageURL}
        visible={imageFullView}
      />

      <GalleryVideoFullViewCard
        toggler={toggleVideoFullView}
        video={videoURL}
        visible={videoFullView}
      />
      <Drawer dismissible={false}>
        <div className="w-full grid grid-cols-1">
          <div className="w-full h-[500px]">
            <div className="rounded-md h-full w-full relative">
              <Image
                alt=""
                width={2560}
                height={1440}
                className="w-full h-full object-cover"
                src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870392/IMG_5650_cc0009e559.jpg"
              />
              <div className="absolute inset-0 p-6 lg:py-16 lg:px-28 text-white flex flex-col justify-center bg-slate-700 bg-opacity-70">
                <div className="relative">
                  <h1 className="text-6xl font-bold mb-4">
                    {translations[currentLang as "en" | "fr"]["navbar-photos"]}
                  </h1>
                </div>
                <div className="relative max-w-[600px]">
                  <h1 className="text-xl font-light mb-4">
                    {
                      translations[currentLang as "en" | "fr"][
                        "memories-banner-description"
                      ]
                    }
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto mt-2">
            <div className="mx-auto max-w-7xl px-4 py-10 lg:py-16 lg:px-8">
              <h2
                className="text-4xl lg:text-5xl font-bold text-darkblue mb-7 text-center lg:text-start"
                id="story"
              >
                {`${
                  translations[currentLang as "en" | "fr"][
                    "memories-subtitle-1"
                  ]
                }`}
              </h2>
              <PrimaryFilter />
            </div>
          </div>
        </div>
        <Gallery
          imageFullScreenToggler={toggleImageFullView}
          imageFullScreenURLUpdater={handleImageURLUpdate}
          videoFullScreenToggler={toggleVideoFullView}
          videoFullScreenURLUpdater={handleVideoURLUpdate}
        />
      </Drawer>
    </>
  );
};

export { MemoriesContent };
