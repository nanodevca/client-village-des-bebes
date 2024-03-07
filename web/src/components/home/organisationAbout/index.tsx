"use client";
import MissionValues from "./missionValues";
import { PresentationVideo } from "./presentationVideo";
import TransmitCulture from "./transmitCulture";
import WomenEmpowerment from "./womenEmpowerment";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();

const AboutOrganization = () => {
  const currentLang = useRecoilValue(currentLanguageValue);

  return (
    <div id="about-organisation" className="bg-lilywhite mt-5 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:py-20 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-semibold lh-81 text-center mb-16">
          {translations[currentLang as "en" | "fr"]["home-description-title"]}
        </h2>
        <PresentationVideo />
        <div className="mb-0 lg:mb-14" />
        <MissionValues />
        <TransmitCulture />
        <WomenEmpowerment />
      </div>
    </div>
  );
};

export default AboutOrganization;
