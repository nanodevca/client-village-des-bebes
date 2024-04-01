"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  HeartIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();
let interval: any;

type Card = {
  id: number;
  designation: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

const GodMothersTabCardContentSubTabOne = ({
  offset,
  scaleFactor,
}: {
  offset?: number;
  scaleFactor?: number;
}) => {
  const currentLang = useRecoilValue(currentLanguageValue);

  const CARDS = [
    {
      id: 0,
      designation: `
    ${
      translations[currentLang as "en" | "fr"][
        "navbar-services-godmothers-tab-one-card-one-title"
      ]
    }`,
      icon: <ShieldCheckIcon className="h-6 w-6 me-1 text-navyblue" />,
      content: (
        <p className="text-gray-500 text-base font-normal">
          {
            translations[currentLang as "en" | "fr"][
              "navbar-services-godmothers-tab-one-card-one-description"
            ]
          }
        </p>
      ),
    },
    {
      id: 1,
      designation: `
    ${
      translations[currentLang as "en" | "fr"][
        "navbar-services-godmothers-tab-one-card-two-title"
      ]
    }
    `,
      icon: <HeartIcon className="h-6 w-6 me-1 text-red-500" />,
      content: (
        <p className="text-gray-500 text-base font-normal">
          {
            translations[currentLang as "en" | "fr"][
              "navbar-services-godmothers-tab-one-card-two-description"
            ]
          }
        </p>
      ),
    },
    {
      id: 2,
      designation: `${
        translations[currentLang as "en" | "fr"][
          "navbar-services-godmothers-tab-one-card-three-title"
        ]
      }`,
      icon: <UserGroupIcon className="h-6 w-6 me-1 text-green-500" />,
      content: (
        <p className="text-gray-500 text-base font-normal">
          {
            translations[currentLang as "en" | "fr"][
              "navbar-services-godmothers-tab-one-card-three-description"
            ]
          }
        </p>
      ),
    },
  ];

  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(CARDS);

  const [currentStep, setCurrentStep] = useState(0);

  const setStepperStep = (step: number) => {
    setCurrentStep(step);
  };

  const stepClassName = (step: number) => {
    if (currentStep === step && step === 0) {
      return "flex md:w-full items-center text-pictonblue sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-pictonblue godmothers-steps";
    } else if (currentStep === step && step === 1) {
      return "flex md:w-full items-center text-pictonblue sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-pictonblue godmothers-steps";
    } else if (currentStep === step && step === 2) {
      return "flex items-center text-pictonblue godmothers-steps";
    } else if (step === 0 || step === 1) {
      return "flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-pictonblue after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10";
    } else {
      return "flex items-center godmothers-steps";
    }
  };

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        setStepperStep(newArray[0].id);
        return newArray;
      });
    }, 10000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    startFlipping();
  }, []);

  return (
    <>
      {/* This is a stepper */}
      {/* We need to have it automatically change the color of the next step every 5 seconds, and then loop back to the first step when it reaches the end */}
      <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 sm:text-base">
        <li className={`${stepClassName(0)}`}>
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500">
            <span className="me-2">1.</span>
            {translations[currentLang as "en" | "fr"]["godmothers"]}{" "}
          </span>
        </li>
        <li className={`${stepClassName(1)}`}>
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span className="me-2">2.</span>
            {translations[currentLang as "en" | "fr"]["support"]}
          </span>
        </li>
        <li className={`${stepClassName(2)}`}>
          <span className="me-2">3.</span>
          {translations[currentLang as "en" | "fr"]["accompaniment"]}
        </li>
      </ol>

      <div className="w-full mt-5" />
      <div className="relative w-full h-[25rem] flex justify-center items-center">
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              className="absolute dark:bg-black sm:h-[20rem] h-[23rem] w-[19rem] sm:w-[40rem] rounded-lg shadow-xl shadow-white/[0.05] flex flex-col justify-between mt-10"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -CARD_OFFSET,
                scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
                zIndex: cards.length - index, //  decrease z-index for the cards that are behind
              }}
            >
              <div className="w-full h-full flex rounded-lg">
                <Image
                  className="h-auto hidden md:block md:w-1/2 flex-none bg-cover rounded-tl-lg rounded-bl-lg object-cover"
                  src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870279/IMG_0214_cb3afef14e.jpg"
                  width={500}
                  height={500}
                  alt=""
                />
                <div
                  className={`${
                    index === 0 ? "bg-lilywhite" : "bg-gray-500"
                  } p-4 flex flex-col justify-between leading-normal rounded-tr-lg rounded-br-lg`}
                >
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center">
                      {card.icon}
                    </p>
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {card.designation}
                    </div>
                    {card.content}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export { GodMothersTabCardContentSubTabOne };
