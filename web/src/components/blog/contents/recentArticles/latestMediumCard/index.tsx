import Image from "next/image";

const LatestMediumCard = () => {
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row sm:items-center gap-6 shadow-1 rounded-xl p-4 border border-gray-400">
        <div className="lg:max-w-[238px] w-full">
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
        <div className="lg:max-w-[272px] w-full">
          <a
            href="category.html"
            className="inline-flex text-blue bg-sky-400/50 font-medium text-sm py-1 px-3 rounded-full mb-4"
          >
            Technology
          </a>
          <h2 className="font-semibold text-custom-lg text-dark mb-3">
            <a href="blog-single.html">
              14 Innovative Architectural Designs to Create a Vast Interior
              Space
            </a>
          </h2>
          <div className="flex items-center gap-2.5">
            <p className="text-sm">
              <a href="author.html">By Adrio Devid</a>
            </p>
            <span className="flex w-[5px] h-[5px] rounded-full bg-navyblue"></span>
            <p className="text-sm">Sep 10, 2025</p>
          </div>
        </div>
      </div>
    </>
  );
};

export { LatestMediumCard };
