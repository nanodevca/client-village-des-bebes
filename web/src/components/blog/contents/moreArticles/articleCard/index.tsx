import Image from "next/image";
import Link from "next/link";

const ArticleCard = () => {
  return (
    <>
      <div className="group">
        <div className="mb-4 overflow-hidden rounded-xl transition-all group-hover:scale-105">
          <Link href="#">
            <Image
              className="w-full h-full rounded-xl object-cover"
              src="https://images.unsplash.com/photo-1506157786151-b8491531f063"
              alt="hero"
              width={1000}
              height={1000}
            />
          </Link>
        </div>
        <h3>
          <Link href="#" className="block text-navyblue font-bold text-xl mb-2">
            <span className="bg-gradient-to-r from-pictonblue to-pelorous bg-[length:0px_100%] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_100%] text-wrap text-ellipsis line-clamp-3">
              Stylish Kitchen And Dining Room With Functional Ideas for your
              average home where you can choose to do whtever you would like
            </span>
          </Link>
        </h3>
        <p className="text-wrap text-ellipsis line-clamp-3">
          Lorem Ipsum is simply dummy text of the print and typesetting industry
          Lorem Ipsum has been the industrys standard dummy text ever Lorem
          Ipsum has been the industrys standard dummy text everLorem Ipsum has
          been the industrys standard dummy text ever
        </p>
        <div className="flex flex-wrap gap-3 items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <a href="author.html" className="flex items-center gap-3">
              <p className="text-sm">By Adrio Devid</p>
            </a>
            <span className="flex w-[5px] h-[5px] rounded-full bg-navyblue"></span>
            <p className="text-sm">Sep 10, 2025</p>
          </div>
          <a
            href="category.html"
            className="inline-flex text-blue bg-blue-400/40 font-medium text-sm py-1 px-3 rounded-full"
          >
            Technology
          </a>
        </div>
      </div>
    </>
  );
};

export { ArticleCard };
