import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "./articleCard";

const MoreArticles = () => {
  return (
    <>
      <div>
        <div className="relative flex pt-5 pb-10 items-center">
          <span className="flex-shrink mx-4 text-4xl font-bold text-start text-navyblue">
            More Articles
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>

      <section className="relative overflow-hidden p-4">
        <div className="mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
        <button className="flex justify-center font-medium text-navyblue border border-navyblue rounded-md py-3 px-7 hover:bg-navyblue hover:text-white ease-in duration-200 mx-auto mt-12 lg:mt-17">
          Browse all Posts
        </button>
      </section>
    </>
  );
};

export { MoreArticles };
