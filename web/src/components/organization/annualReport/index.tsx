"use client";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();

const AnnualReportContent = () => {
  const currentLang = useRecoilValue(currentLanguageValue);

  return (
    <>
      <div className="w-full grid grid-cols-1">
        <div className="w-full h-[500px]">
          <div className="rounded-md h-full w-full relative">
            <Image
              alt=""
              width={2560}
              height={1440}
              className="w-full h-full object-cover"
              src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870425/pile_of_books_be61aba92f.jpg"
            />
            <div className="absolute inset-0 p-6 lg:py-16 lg:px-28 text-white flex flex-col justify-center bg-slate-700 bg-opacity-70">
              <div className="relative">
                <h1 className="text-6xl font-bold mb-4">
                  {
                    translations[currentLang as "en" | "fr"][
                      "organization-annual-report"
                    ]
                  }
                </h1>
              </div>
              <div className="relative">
                <h1 className="text-xl font-light mb-4">
                  {
                    translations[currentLang as "en" | "fr"][
                      "organization-annual-report-description-part-1"
                    ]
                  }
                  <br />
                  {
                    translations[currentLang as "en" | "fr"][
                      "organization-annual-report-description-part-2"
                    ]
                  }
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto mt-2">
          <div className="mx-auto max-w-7xl px-4 py-10 lg:py-16 lg:px-8">
            <h2
              className="text-4xl lg:text-5xl font-bold text-darkblue mb-7"
              id="story"
            >
              {
                translations[currentLang as "en" | "fr"][
                  "organization-annual-report-recap-title"
                ]
              }
            </h2>
            <div className="w-full py-5 grid grid-cols-1 lg:flex lg:justify-center lg:items-center gap-5">
              <div className="lg:w-[30rem] w-[20rem] flex flex-col p-4 bg-lilywhite rounded-xl cursor-pointer">
                <div className="rounded-md h-full w-full relative">
                  <Image
                    alt=""
                    width={720}
                    height={720}
                    className="w-full object-cover h-72 rounded-xl"
                    src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870420/370845146_621391003455866_507568349657303385_n_8622b620b0.jpg"
                  />
                  <div className="absolute rounded-xl inset-0 text-white flex flex-col justify-center items-center bg-slate-700 bg-opacity-30 hover:bg-opacity-70 transition-all duration-500">
                    <div className="relative text-center">
                      <h1 className="text-4xl font-bold mb-4">
                        {translations[currentLang as "en" | "fr"]["2023"]}
                      </h1>
                    </div>
                  </div>
                </div>
                <p className="text-darkblue text-start text-lg mt-5">
                  {
                    translations[currentLang as "en" | "fr"][
                      "organization-annual-report-recap-2023-description"
                    ]
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AnnualReportContent };
