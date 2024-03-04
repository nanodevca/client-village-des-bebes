"use client";
import Image from "next/image";
import Link from "next/link";
import { BlobCard } from "../../blobCard";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();

const AboutUsContent = () => {
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
              src="/assets/images/organization/IMG_0170.jpg"
            />
            <div className="absolute inset-0 p-6 lg:py-16 lg:px-28 text-white flex flex-col justify-center bg-slate-700 bg-opacity-70">
              <div className="relative">
                <h1 className="text-lg font-medium mb-4">
                  {
                    translations[currentLang as "en" | "fr"][
                      "organization-who-are-we"
                    ]
                  }
                </h1>
              </div>
              <div className="relative">
                <h1 className="text-6xl font-bold mb-4">
                  {
                    translations[currentLang as "en" | "fr"][
                      "organization-who-are-we-description-part-1"
                    ]
                  }
                  <br />
                  {
                    translations[currentLang as "en" | "fr"][
                      "organization-who-are-we-description-part-2"
                    ]
                  }
                </h1>
              </div>
              <div className="relative">
                <h1 className="text-xl font-light mb-4">
                  {
                    translations[currentLang as "en" | "fr"][
                      "organization-who-are-we-description-part-3"
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
                  "organization-who-are-we-story-title"
                ]
              }
            </h2>
            <p className="mb-3 text-gray-500">
              {
                translations[currentLang as "en" | "fr"][
                  "organization-who-are-we-story-part-1"
                ]
              }
            </p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <p className="mb-3 text-gray-500">
                {
                  translations[currentLang as "en" | "fr"][
                    "organization-who-are-we-story-part-2"
                  ]
                }
                <br />
                <br />
                {
                  translations[currentLang as "en" | "fr"][
                    "organization-who-are-we-story-part-3"
                  ]
                }
                <br />
              </p>
              <p className="mb-3 text-gray-500">
                {
                  translations[currentLang as "en" | "fr"][
                    "organization-who-are-we-story-part-4"
                  ]
                }
                <br />
                <br />
                {
                  translations[currentLang as "en" | "fr"][
                    "organization-who-are-we-story-part-5"
                  ]
                }
                <br />

                {
                  translations[currentLang as "en" | "fr"][
                    "organization-who-are-we-story-part-6"
                  ]
                }
              </p>
              <p className="mb-3 text-gray-500">
                {
                  translations[currentLang as "en" | "fr"][
                    "organization-who-are-we-story-part-7"
                  ]
                }
              </p>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-darkblue my-10">
              {
                translations[currentLang as "en" | "fr"][
                  "organization-who-are-we-administration-title"
                ]
              }
            </h2>
            <div className="w-full px-10 py-5 grid grid-cols-1 lg:flex lg:justify-center lg:items-center gap-5">
              <div className="w-72 flex flex-col p-2">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-full object-cover h-72 rounded-xl"
                  src="/assets/images/organization/IMG_1924.jpeg"
                />
                <h3 className="text-xl mt-3 font-bold text-darkblue text-start">
                  {
                    translations[currentLang as "en" | "fr"][
                      "nathalie-khadija-pesin"
                    ]
                  }
                </h3>
                <p className="text-gray-500 text-start text-lg">
                  {translations[currentLang as "en" | "fr"]["president"]}
                </p>
                <Link
                  className="text-darkblue text-start mt-3 underline"
                  href="#"
                >
                  {translations[currentLang as "en" | "fr"]["linkedin"]}
                  {">"}
                </Link>
              </div>
              <div className="w-72 flex flex-col p-2">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-72 object-cover h-72 rounded-xl"
                  src="https://avatar.tobi.sh/tobiaslins.svg"
                />
                <h3 className="text-xl mt-3 font-bold text-darkblue text-start">
                  {translations[currentLang as "en" | "fr"]["seynabou-ndong"]}
                </h3>
                <p className="text-gray-500 text-start text-lg">
                  {translations[currentLang as "en" | "fr"]["vice-president"]}
                </p>
                <Link
                  className="text-darkblue text-start mt-3 underline"
                  href="#"
                >
                  {translations[currentLang as "en" | "fr"]["linkedin"]}
                  {">"}
                </Link>
              </div>
            </div>
            <h2
              className="text-4xl lg:text-5xl font-bold text-darkblue my-7"
              id="team"
            >
              {translations[currentLang as "en" | "fr"]["organization-team"]}
            </h2>
            <div className="w-full px-10 py-5 grid lg:grid-cols-4 grid-cols-1 lg:gap-7 gap-5 justify-center">
              <div className="w-full flex justify-center items-center">
                <BlobCard
                  image="https://avatar.tobi.sh/tobiaslins.svg"
                  personLink="#"
                  personName={
                    translations[currentLang as "en" | "fr"]["rosalie-ndione"]
                  }
                  personStatus={
                    translations[currentLang as "en" | "fr"]["treasurer"]
                  }
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <BlobCard
                  image="https://avatar.tobi.sh/tobiaslins.svg"
                  personLink="#"
                  personName={
                    translations[currentLang as "en" | "fr"][
                      "abdoul-kaoussar-pindra"
                    ]
                  }
                  personStatus={
                    translations[currentLang as "en" | "fr"]["secretary"]
                  }
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <BlobCard
                  image="https://avatar.tobi.sh/tobiaslins.svg"
                  personLink="#"
                  personName={
                    translations[currentLang as "en" | "fr"][
                      "ndeye-khar-therese-cisse"
                    ]
                  }
                  personStatus={
                    translations[currentLang as "en" | "fr"]["administrator"]
                  }
                />
              </div>
              <div className="w-full flex justify-center items-center">
                <BlobCard
                  image="https://avatar.tobi.sh/tobiaslins.svg"
                  personLink="#"
                  personName={
                    translations[currentLang as "en" | "fr"][
                      "fatou-marie-ndiaye"
                    ]
                  }
                  personStatus={
                    translations[currentLang as "en" | "fr"]["administrator"]
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AboutUsContent };
