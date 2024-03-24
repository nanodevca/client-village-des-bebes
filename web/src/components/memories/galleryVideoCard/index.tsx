"use client";
import { mergeStyle } from "@/src/utils/functions";
import Image from "next/image";

const GalleryVideoCard = ({
  className,
  video,
  videoFullScreenURLUpdater,
  videoFullScreenToggler,
}: {
  className?: string;
  video: string;
  videoFullScreenURLUpdater: (url: string) => void;
  videoFullScreenToggler: () => void;
}) => {
  return (
    <div
      className={mergeStyle(
        "w-full h-full rounded-xl cursor-pointer",
        className
      )}
      onClick={() => {
        videoFullScreenURLUpdater(video);
        videoFullScreenToggler();
      }}
    >
      <div className="rounded-md h-full w-full relative">
        <video
          className="w-full object-cover h-full rounded-xl"
          src={`${video}`}
          controls={false}
          autoPlay={true}
          muted={true}
          loop={true}
        />
      </div>
    </div>
  );
};

export { GalleryVideoCard };
