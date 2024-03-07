import { useState } from "react";
import { SignInModal } from "../modal/signIn";
import { SignUpModal } from "../modal/signUp";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();

const MemberButton = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [isSignIn, setIsSignIn] = useState(true);
  const currentLang = useRecoilValue(currentLanguageValue);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const toggleModal = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <button
        type="button"
        className="text-lg text-pictonblue transition duration-150 ease-in-out hover:text-white hover:bg-pictonblue font-medium py-5 px-16 border border-lightgrey leafbutton w-full lg:w-auto"
        onClick={openModal}
      >
        {translations[currentLang as "en" | "fr"]["become-member"]}
      </button>

      {isSignIn ? (
        <SignInModal
          closeModal={closeModal}
          isOpen={isOpen}
          toggleModal={toggleModal}
        />
      ) : (
        <SignUpModal
          closeModal={closeModal}
          isOpen={isOpen}
          toggleModal={toggleModal}
        />
      )}
    </>
  );
};

export { MemberButton };
