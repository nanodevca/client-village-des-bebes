import Image from "next/image";

const LatestLargeCard = () => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row lg:items-center gap-7 lg:gap-11 shadow-1 rounded-xl p-4 lg:p-2 border border-gray-400">
        <div className="lg:max-w-[536px] w-full">
          <a href="blog-single.html">
            <Image
              className="w-full h-full rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
              alt="hero"
              width={1000}
              height={1000}
            />
          </a>
        </div>
        <div className="lg:max-w-[540px] w-full">
          <a
            href="category.html"
            className="inline-flex text-purple-dark bg-green-400/50 font-medium text-sm py-1 px-3 rounded-full mb-4"
          >
            Lifestyle
          </a>
          <h1 className="font-bold text-custom-4 xl:text-heading-4 text-dark mb-4">
            <a href="blog-single.html">
              Begin here to obtain a brief summary encompassing all the
              essential
            </a>
          </h1>
          <p className="max-w-[524px]">
            This comprehensive post serves as your cheat-sheet to swiftly
            familiarize yourself with Ghost. Packed with crucial...
          </p>
          <div className="flex items-center gap-2.5 mt-5">
            <a href="author.html" className="flex items-center gap-3">
              <div className="flex w-6 h-6 rounded-full overflow-hidden">
                <Image
                  className="w-full h-full rounded-xl object-cover"
                  src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
                  alt="hero"
                  width={1000}
                  height={1000}
                />
              </div>
              <p className="text-sm">Adrio Devid</p>
            </a>
            <span className="flex w-[5px] h-[5px] rounded-full bg-navyblue"></span>
            <p className="text-sm">Sep 10, 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { LatestLargeCard };
