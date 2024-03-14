import { useState } from "react";
import { GodMothersTabCardContentSubTabOne } from "./subTabOne";
import { GodMothersTabCardContentSubTabTwo } from "./subTabTwo";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();

const GodMothersTabCardContent = ({ title }: { title: string }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const currentLang = useRecoilValue(currentLanguageValue);

  const setTab = (tab: number) => {
    setCurrentTab(tab);
  };

  return (
    <>
      <div className="w-full overflow-hidden relative h-full rounded-2xl px-7 py-5 text-xl md:text-2xl font-bold bg-navyblue text-lilywhite">
        <p className="mb-5">{title}</p>
        <p className="font-sans font-normal text-gray-500 text-base w-full">
          {
            translations[currentLang as "en" | "fr"][
              "navbar-services-godmothers-description"
            ]
          }
        </p>
        <div className={"w-full mt-5 flex flex-col"}>
          <div className="sm:hidden">
            <select
              id="tabs"
              className="block w-full p-2 bg-gray-700 rounded-lg shadow"
              onChange={(e) => setTab(parseInt(e.target.value))}
            >
              <option value={0} selected={currentTab === 0 ? true : false}>
                {
                  translations[currentLang as "en" | "fr"][
                    "services-godmothers-tab-text-tab-one"
                  ]
                }
              </option>
              <option value={1} selected={currentTab === 1 ? true : false}>
                {
                  translations[currentLang as "en" | "fr"][
                    "services-godmothers-tab-text-tab-two"
                  ]
                }
              </option>
            </select>
          </div>
          <ul className="hidden text-sm font-medium text-center text-lilywhite rounded-lg shadow sm:flex divide-gray-700">
            <li
              className="w-full focus-within:z-10 cursor-pointer"
              onClick={() => setTab(0)}
            >
              <b
                className={`
                inline-block w-full p-4 border-r border-gray-500 rounded-l-lg
                ${currentTab === 0 ? "bg-gray-500" : "hover:bg-gray-700"}
                `}
                aria-current="page"
              >
                {
                  translations[currentLang as "en" | "fr"][
                    "services-godmothers-tab-text-tab-one"
                  ]
                }
              </b>
            </li>
            <li
              className="w-full focus-within:z-10 cursor-pointer"
              onClick={() => setTab(1)}
            >
              <b
                className={`
                inline-block w-full p-4 rounded-r-lg
                ${currentTab === 1 ? "bg-gray-500" : "hover:bg-gray-700"}
                `}
              >
                {
                  translations[currentLang as "en" | "fr"][
                    "services-godmothers-tab-text-tab-two"
                  ]
                }
              </b>
            </li>
          </ul>
          <div className="w-full mt-5" />
          {currentTab === 0 && <GodMothersTabCardContentSubTabOne />}
          {currentTab === 1 && <GodMothersTabCardContentSubTabTwo />}
        </div>
      </div>
    </>
  );
};

export { GodMothersTabCardContent };
