"use client";
import { mergeStyle } from "@/src/utils/functions";
import Image from "next/image";

const GalleryVideoCard = ({
  className,
  video,
}: {
  className?: string;
  video: string;
}) => {
  return (
    <div
      className={mergeStyle(
        "w-full h-full rounded-xl cursor-pointer",
        className
      )}
    >
      <div className="rounded-md h-full w-full relative">
        <video
          className="w-full object-cover h-full rounded-xl"
          src={`${video}`}
          controls={true}
          autoPlay={false}
          muted={true}
          loop={true}
        />
      </div>
    </div>
  );
};

export { GalleryVideoCard };
