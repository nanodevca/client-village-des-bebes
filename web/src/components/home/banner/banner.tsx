"use client";
import { InvolvedButton } from "../../button/involvedButton";
import { MemberButton } from "../../button/memberButton";
import { getTranslation } from "../../../utils/functions";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "../../../atoms/language";

const translations = getTranslation();

const Banner = () => {
  const currentLang = useRecoilValue(currentLanguageValue);

  return (
    <main>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-6xl pt-16 sm:pt-20 banner-image">
          <div className="text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
              {translations[currentLang as "en" | "fr"]["home-banner-title"]}
            </h1>
            <p className="mt-5 text-xl leading-8 text-bluegray w-4/5">
              {
                translations[currentLang as "en" | "fr"][
                  "home-banner-description"
                ]
              }
            </p>
          </div>

          <div className="w-full flex justify-center mb-5">
            <div className="text-center mt-5 flex lg:items-center lg:justify-between lg:w-1/2 w-full justify-between flex-col lg:flex-row h-40 lg:h-auto">
              <MemberButton />
              <InvolvedButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Banner };
