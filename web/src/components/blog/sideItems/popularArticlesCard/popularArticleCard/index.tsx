import Image from "next/image";

const PopularArticleCard = () => {
  return (
    <>
      <div className="group grid grid-cols-5 gap-x-3 max-h-[100px] min-h-[100px] mb-5">
        <div className="w-full rounded-xl col-span-2 h-full">
          <Image
            width={500}
            height={500}
            className="rounded-xl w-full max-h-[100px] min-h-[100px] object-cover"
            src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
            alt="post"
          />
        </div>
        <div className="flex flex-col justify-between items-start col-span-3 h-full">
          <h5 className="font-medium text-sm text-navyblue line-clamp-3 text-ellipsis">
            The Most Beautiful Green Field on Earth where grass is dank and
            whatever happens we just want to get out of that place for good and
            to be never be seen around because we dont like the place.
          </h5>
          <div className="flex flex-col items-start justify-between gap-1 text-navyblue font-normal">
            <p className="text-xs">Sep 10, 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { PopularArticleCard };
