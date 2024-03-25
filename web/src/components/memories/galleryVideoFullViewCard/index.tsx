"use client";

const GalleryVideoFullViewCard = ({
  video,
  toggler,
  visible,
}: {
  video: string;
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

export { GalleryVideoFullViewCard };
