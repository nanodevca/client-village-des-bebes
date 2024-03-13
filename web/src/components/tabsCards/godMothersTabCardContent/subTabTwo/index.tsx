"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  CreditCardIcon,
  FolderPlusIcon,
  HeartIcon,
  QueueListIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import { MemberButton } from "@/src/components/button/memberButton";
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

const GodMothersTabCardContentSubTabTwo = ({
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
      designation: `${
        translations[currentLang as "en" | "fr"][
          "navbar-services-godmothers-tab-two-card-one-title"
        ]
      }`,
      icon: <CreditCardIcon className="h-6 w-6 me-1 text-pelorous" />,
      content: (
        <div className="w-full flex flex-col items-center">
          <p className="text-gray-500 text-base font-normal mb-5">
            {
              translations[currentLang as "en" | "fr"][
                "navbar-services-godmothers-tab-two-card-one-description"
              ]
            }
          </p>
          <MemberButton />
        </div>
      ),
    },
    {
      id: 1,
      designation: `${
        translations[currentLang as "en" | "fr"][
          "navbar-services-godmothers-tab-two-card-two-title"
        ]
      }`,
      icon: <FolderPlusIcon className="h-6 w-6 me-1 text-green-500" />,
      content: (
        <p className="text-gray-500 text-base font-normal">
          {
            translations[currentLang as "en" | "fr"][
              "navbar-services-godmothers-tab-two-card-two-description"
            ]
          }
        </p>
      ),
    },
    {
      id: 2,
      designation: `${
        translations[currentLang as "en" | "fr"][
          "navbar-services-godmothers-tab-two-card-three-title"
        ]
      }`,
      icon: <QueueListIcon className="h-6 w-6 me-1 text-brightsun" />,
      content: (
        <p className="text-gray-500 text-base font-normal">
          {
            translations[currentLang as "en" | "fr"][
              "navbar-services-godmothers-tab-two-card-three-description"
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
            {translations[currentLang as "en" | "fr"]["registration"]}{" "}
          </span>
        </li>
        <li className={`${stepClassName(1)}`}>
          <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
            <span className="me-2">2.</span>
            {translations[currentLang as "en" | "fr"]["form"]}{" "}
          </span>
        </li>
        <li className={`${stepClassName(2)}`}>
          <span className="me-2">3.</span>
          {translations[currentLang as "en" | "fr"]["marrainage"]}
        </li>
      </ol>

      <div className="w-full mt-5" />
      <div className="relative w-full h-[25rem] flex justify-center items-center">
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              className="absolute dark:bg-black h-[20rem] w-[40rem] rounded-lg shadow-xl shadow-white/[0.05] flex flex-col justify-between mt-10"
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
                  className="h-auto lg:w-60 flex-none bg-cover rounded-tl-lg rounded-bl-lg object-cover"
                  src="/assets/images/activities/IMG_0214.jpg"
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

export { GodMothersTabCardContentSubTabTwo };
