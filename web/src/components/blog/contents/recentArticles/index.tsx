import Image from "next/image";
import { LatestLargeCard } from "./latestLargeCard";
import { LatestMediumCard } from "./latestMediumCard";

const RecentArticles = () => {
  return (
    <>
      <div>
        <div className="relative flex pt-5 pb-10 items-center">
          <span className="flex-shrink mx-4 text-4xl font-bold text-start text-navyblue">
            Recent Articles
          </span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
      </div>
      <section className="relative overflow-hidden">
        <div className="mx-auto px-4 sm:px-8 xl:px-0 relative">
          <div className="flex flex-wrap gap-y-5">
            <LatestLargeCard />

            <div className="w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 md:items-center gap-4">
              <LatestMediumCard />
              <LatestMediumCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { RecentArticles };
