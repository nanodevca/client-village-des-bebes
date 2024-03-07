import { useState } from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();

const InvolvedButton = () => {
  let [isOpen, setIsOpen] = useState(false);
  const currentLang = useRecoilValue(currentLanguageValue);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Link href="/involved">
        <button className="transition duration-150 ease-in-out leafbutton text-lg text-white font-medium bg-pictonblue py-5 px-16 w-full lg:w-auto hover:text-pictonblue hover:bg-white hover:border hover:border-lightgrey">
          {translations[currentLang as "en" | "fr"]["engage"]}
        </button>
      </Link>
    </>
  );
};

export { InvolvedButton };
