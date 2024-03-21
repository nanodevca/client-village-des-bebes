"use client";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";
import { TabsCards } from "../tabsCards";
import { TabCard } from "../tabsCards/tabCard";
import { GodMothersTabCardContent } from "../tabsCards/godMothersTabCardContent";
import { activities } from "@/src/data/activitiesTabs/tabs";

const translations = getTranslation();

const ActivitiesContent = () => {
  const currentLang = useRecoilValue(currentLanguageValue);

  const tabs = [
    {
      title: `${
        translations[currentLang as "en" | "fr"][
          "navbar-services-prenatal-workshops"
        ]
      }`,
      value: "prenatal",
      content: (
        <TabCard
          title={`${
            translations[currentLang as "en" | "fr"][
              "navbar-services-prenatal-workshops"
            ]
          }`}
          activities={activities(currentLang as "en" | "fr")["prenatal"]}
        />
      ),
    },
    {
      title: `${
        translations[currentLang as "en" | "fr"]["navbar-services-well-being"]
      }`,
      value: "wellness",
      content: (
        <TabCard
          title={`${
            translations[currentLang as "en" | "fr"][
              "navbar-services-well-being"
            ]
          }`}
          activities={activities(currentLang as "en" | "fr")["wellness"]}
        />
      ),
    },
    {
      title: `${
        translations[currentLang as "en" | "fr"]["navbar-services-awakening"]
      }`,
      value: "awakening",
      content: (
        <TabCard
          title={`${
            translations[currentLang as "en" | "fr"][
              "navbar-services-awakening"
            ]
          }`}
          activities={activities(currentLang as "en" | "fr")["awakening"]}
        />
      ),
    },
    {
      title: `${
        translations[currentLang as "en" | "fr"]["navbar-services-food"]
      }`,
      value: "nutrition",
      content: (
        <TabCard
          title={`${
            translations[currentLang as "en" | "fr"]["navbar-services-food"]
          }`}
          activities={activities(currentLang as "en" | "fr")["nutrition"]}
        />
      ),
    },
    {
      title: `${
        translations[currentLang as "en" | "fr"][
          "navbar-services-educational-workshops"
        ]
      }`,
      value: "educational",
      content: (
        <TabCard
          title={`${
            translations[currentLang as "en" | "fr"][
              "navbar-services-educational-workshops"
            ]
          }`}
          activities={activities(currentLang as "en" | "fr")["educational"]}
        />
      ),
    },
    {
      title: `${
        translations[currentLang as "en" | "fr"]["navbar-services-chats"]
      }`,
      value: "talks",
      content: (
        <TabCard
          title={`${
            translations[currentLang as "en" | "fr"]["navbar-services-chats"]
          }`}
          activities={activities(currentLang as "en" | "fr")["talks"]}
        />
      ),
    },
    {
      title: `${
        translations[currentLang as "en" | "fr"]["navbar-services-support"]
      }`,
      value: "support",
      content: (
        <TabCard
          title={`${
            translations[currentLang as "en" | "fr"]["navbar-services-support"]
          }`}
          activities={activities(currentLang as "en" | "fr")["support"]}
        />
      ),
    },
    {
      title: `${
        translations[currentLang as "en" | "fr"]["navbar-services-big-events"]
      }`,
      value: "bigEvents",
      content: (
        <TabCard
          title={`${
            translations[currentLang as "en" | "fr"][
              "navbar-services-big-events"
            ]
          }`}
          activities={activities(currentLang as "en" | "fr")["bigEvents"]}
        />
      ),
    },
    {
      title: `${
        translations[currentLang as "en" | "fr"]["navbar-services-godmothers"]
      }`,
      value: "godmothers",
      content: (
        <GodMothersTabCardContent
          title={`${
            translations[currentLang as "en" | "fr"][
              "navbar-services-godmothers"
            ]
          }`}
        />
      ),
    },
  ];

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
              src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870279/IMG_0214_cb3afef14e.jpg"
            />
            <div className="absolute inset-0 p-6 lg:py-16 lg:px-28 text-white flex flex-col justify-center bg-slate-700 bg-opacity-70">
              <div className="relative">
                <h1 className="text-6xl font-bold mb-4">
                  {
                    translations[currentLang as "en" | "fr"][
                      "activities-service-page-title"
                    ]
                  }
                </h1>
              </div>
              <div className="relative max-w-[600px]">
                <h1 className="text-xl font-light mb-4">
                  {
                    translations[currentLang as "en" | "fr"][
                      "activities-service-page-subtitle"
                    ]
                  }
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto mt-2">
          <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
            <h2
              className="text-4xl lg:text-5xl font-bold text-darkblue mb-7"
              id="story"
            >
              {
                translations[currentLang as "en" | "fr"][
                  "activities-service-page-activities-title"
                ]
              }
            </h2>
            <p className="mb-3 text-gray-500 lg:max-w-[1000px] max-w-[600px]">
              {
                translations[currentLang as "en" | "fr"][
                  "activities-service-page-activities-subtitle-part-1"
                ]
              }
              <br />
              <br />
              {
                translations[currentLang as "en" | "fr"][
                  "activities-service-page-activities-subtitle-part-2"
                ]
              }
            </p>
          </div>
        </div>
        <div className="w-full h-auto bg-lilywhite">
          <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
            <div className="w-full p-5">
              <TabsCards tabs={tabs} />
            </div>
          </div>
        </div>
        <div className="w-full h-auto mt-2">
          <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8 flex justify-center items-center">
            <p className="mb-3 text-gray-500 lg:max-w-[1000px] max-w-[600px] text-center text-2xl">
              {
                translations[currentLang as "en" | "fr"][
                  "activities-service-page-activities-subtitle-part-3"
                ]
              }
              <br /> <br />
              {
                translations[currentLang as "en" | "fr"][
                  "activities-service-page-activities-subtitle-part-4"
                ]
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { ActivitiesContent };
