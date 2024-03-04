"use client";
import { CalendarView } from "./calendar";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();

const EventsCalendar = () => {
  const currentLang = useRecoilValue(currentLanguageValue);

  return (
    <div className="" id="events-calendar">
      <div className="mx-auto max-w-2xl py-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-4xl lg:text-6xl font-semibold text-left my-5 lh-81">
          {translations[currentLang as "en" | "fr"]["home-calendar-title"]}
        </h3>

        <div className="w-full flex justify-center items-center mt-10">
          <CalendarView view="month" />
        </div>
      </div>
    </div>
  );
};

export { EventsCalendar };
