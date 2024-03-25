"use client";
import { mergeStyle } from "@/src/utils/functions";
import Image from "next/image";

const GalleryImageCard = ({
  className,
  image,
  imageFullScreenURLUpdater,
  imageFullScreenToggler,
}: {
  className?: string;
  image: string;
  imageFullScreenURLUpdater: (url: string) => void;
  imageFullScreenToggler: () => void;
}) => {
  return (
    <div
      className={mergeStyle(
        "w-full h-full rounded-xl cursor-pointer",
        className
      )}
      onClick={() => {
        imageFullScreenURLUpdater(image);
        imageFullScreenToggler();
      }}
    >
      <div className="rounded-md h-full w-full relative">
        <Image
          alt=""
          width={500}
          height={500}
          className="w-full object-cover h-full rounded-xl"
          src={`${image}`}
          placeholder="blur"
          blurDataURL={
            "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870348/logo_0b2e1d2d69.png"
          }
        />
      </div>
    </div>
  );
};

export { GalleryImageCard };
