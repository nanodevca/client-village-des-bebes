"use client";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";
import { Contents } from "./contents";
import { RecentArticles } from "./contents/recentArticles";
import { SideItems } from "./sideItems";
import { PopularArticlesCard } from "./sideItems/popularArticlesCard";
import { PopularArticleCard } from "./sideItems/popularArticlesCard/popularArticleCard";
import { TopicsCard } from "./sideItems/topicsCard";
import { TopicCard } from "./sideItems/topicsCard/topicCard";
import { MoreArticles } from "./contents/moreArticles";
import { SearchCard } from "./sideItems/searchCard";

const translations = getTranslation();

const BlogContent = () => {
  const currentLang = useRecoilValue(currentLanguageValue);

  return (
    <>
      <div className="w-full grid grid-cols-1">
        <div className="w-full h-[300px]">
          <div className="rounded-md h-full w-full relative">
            <Image
              alt=""
              width={2560}
              height={1440}
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870425/typing_machine_4aa7a6a7d6.jpg"
            />
            <div className="absolute inset-0 p-6 lg:py-16 lg:px-28 text-white flex flex-col justify-center bg-slate-700 bg-opacity-70">
              <div className="relative w-full text-center">
                <h1 className="text-3xl lg:text-6xl font-bold mb-4">
                  Quick Reads
                </h1>
              </div>
              <div className="relative w-full text-center text-wrap">
                <h1 className="text-base lg:text-xl font-light mb-4">
                  We write punctually about our family stories and advices, our
                  projects, events and more... <br />
                  So don't hesitate to take a look at our blog posts and leave a
                  comment if you want to share your thoughts with us.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="flex flex-col">
          <div className="py-10">
            <div className="container mx-auto flex flex-col lg:flex-row lg:gap-x-4">
              <Contents>
                <RecentArticles />
                <div className="w-full h-[50px]" />
                <MoreArticles />
              </Contents>
              <SideItems>
                <SearchCard />
                <PopularArticlesCard>
                  <PopularArticleCard />
                  <PopularArticleCard />
                  <PopularArticleCard />
                </PopularArticlesCard>
                <TopicsCard>
                  <TopicCard />
                  <TopicCard />
                  <TopicCard />
                  <TopicCard />
                  <TopicCard />
                </TopicsCard>
              </SideItems>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export { BlogContent };
