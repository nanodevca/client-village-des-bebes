"use client";
import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";
import { BlobCard } from "../blobCard";
import { partnersType } from "@/src/types/partners";
import Slider from "react-slick";
import { MemberButton } from "../button/memberButton";
import { InvolvedButton } from "../button/involvedButton";

const translations = getTranslation();

const ProfessionalsContent = () => {
  const currentLang = useRecoilValue(currentLanguageValue);

  const partners: partnersType[] = [
    {
      image:
        "https://res.cloudinary.com/dquixuhcu/image/upload/v1711295457/ethnika_holistic_7e4c1e408b.png",
      description: translations[currentLang as "en" | "fr"]["ethnika_holistic"],
      url: "https://ethnikaholistic.com/",
      category: translations[currentLang as "en" | "fr"]["prenatal-support"],
    },
  ];

  const professionalsFeatures = [
    {
      icon: "🌈",
      title:
        translations[currentLang as "en" | "fr"][
          "professionals-features-customers"
        ],
      description:
        translations[currentLang as "en" | "fr"][
          "professionals-features-customers-description"
        ],
    },
    {
      icon: "💼",
      title:
        translations[currentLang as "en" | "fr"][
          "professionals-features-local"
        ],
      description:
        translations[currentLang as "en" | "fr"][
          "professionals-features-local-description"
        ],
    },
    {
      icon: "🎤",
      title:
        translations[currentLang as "en" | "fr"][
          "professionals-features-expertise"
        ],
      description:
        translations[currentLang as "en" | "fr"][
          "professionals-features-expertise-description"
        ],
    },
    {
      icon: "🈹",
      title:
        translations[currentLang as "en" | "fr"][
          "professionals-features-exclusive-offers"
        ],
      description:
        translations[currentLang as "en" | "fr"][
          "professionals-features-exclusive-offers-description"
        ],
    },
    {
      icon: "🌐",
      title:
        translations[currentLang as "en" | "fr"][
          "professionals-features-communities"
        ],
      description:
        translations[currentLang as "en" | "fr"][
          "professionals-features-communities-description"
        ],
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
              src="https://res.cloudinary.com/dquixuhcu/image/upload/v1711298300/professional_parents_142639a7ee.jpg"
            />
            <div className="absolute inset-0 p-6 lg:py-16 lg:px-28 text-white flex flex-col justify-center bg-slate-700 bg-opacity-70">
              <div className="relative">
                <h1 className="text-6xl font-bold mb-4">
                  {
                    translations[currentLang as "en" | "fr"][
                      "professionals-page-title"
                    ]
                  }
                </h1>
              </div>
              <div className="relative max-w-[600px]">
                <h1 className="text-xl font-light mb-4">
                  {
                    translations[currentLang as "en" | "fr"][
                      "professionals-page-subtitle"
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
              id="parents"
            >
              {
                translations[currentLang as "en" | "fr"][
                  "professionals-parents-title"
                ]
              }
            </h2>
            <p className="mb-3 text-gray-500">
              {
                translations[currentLang as "en" | "fr"][
                  "professionals-parents-description-1"
                ]
              }
              <br />
              {
                translations[currentLang as "en" | "fr"][
                  "professionals-parents-description-2"
                ]
              }
              <br />
              <br />
              {
                translations[currentLang as "en" | "fr"][
                  "professionals-parents-description-3"
                ]
              }
            </p>
            <div className="flex justify-center items-center mt-10">
              <MemberButton />
            </div>
            <div className="w-full px-10 py-5 grid grid-cols-1 lg:flex lg:justify-center lg:items-center gap-5">
              {partners.map((item, x) => (
                <div
                  className="w-52 flex flex-col p-2 cursor-pointer"
                  key={x}
                  onClick={() => window.open(item.url, "_blank")}
                >
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full object-cover h-full rounded-xl"
                    src={item.image}
                  />
                  <h3 className="text-xl mt-3 font-bold text-darkblue text-center">
                    {item.description}
                  </h3>
                  <p className="text-gray-500 text-lg text-center">
                    {item.category}
                  </p>
                </div>
              ))}
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-darkblue my-10"
              id="professionals"
            >
              {
                translations[currentLang as "en" | "fr"][
                  "professionals-professionals-title"
                ]
              }
            </h2>
            <p className="mb-3 text-gray-500">
              {
                translations[currentLang as "en" | "fr"][
                  "professionals-professionals-description-1"
                ]
              }
              <br />
              {
                translations[currentLang as "en" | "fr"][
                  "professionals-professionals-description-2"
                ]
              }
            </p>
            <section>
              <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                  {professionalsFeatures.map((feature, x) => (
                    <div key={x}>
                      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-pictonblue/25 lg:h-12 lg:w-12">
                        {feature.icon}
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-darkblue">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            <div className="flex justify-center items-center mt-10">
              <InvolvedButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ProfessionalsContent };
