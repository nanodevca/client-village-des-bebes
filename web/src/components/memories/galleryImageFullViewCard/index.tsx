"use client";
import Image from "next/image";

const GalleryImageFullViewCard = ({
  image,
  toggler,
  visible,
}: {
  image: string;
  toggler: () => void;
  visible: boolean;
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black/95 w-full h-screen z-[60] p-10 overflow-hidden flex justify-center items-center pointer-events-auto ${
        visible ? "block" : "hidden"
      }`}
      onClick={toggler}
    >
      <div className="w-3/4 h-3/4 relative">
        <Image
          alt=""
          width={2560}
          height={1440}
          className="w-full h-full object-contain rounded-xl"
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

export { GalleryImageFullViewCard };
