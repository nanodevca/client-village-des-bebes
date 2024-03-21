"use client";
import Image from "next/image";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();

const OrganizationContent = () => {
  const currentLang = useRecoilValue(currentLanguageValue);

  return (
    <>
      <div className="w-full h-[120rem] lg:h-[60rem] grid grid-rows-6 lg:grid-rows-1 lg:grid-cols-2">
        <div className="h-full w-full bg-blue-400 flex items-center justify-center row-span-2 lg:row-span-1 lg:col-span-1">
          <Image
            src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870424/IMG_0005_a6395326a0.jpg"
            alt="Le VDBB"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-full w-full row-span-4 lg:row-span-1 lg:col-span-1 p-10">
          <h2 className="font-medium text-4xl text-darkblue ">
            {translations[currentLang as "en" | "fr"]["organization-title"]}
          </h2>
          <p className="mt-4 text-start font-normal text-lg text-darkblue">
            {
              translations[currentLang as "en" | "fr"][
                "organization-description"
              ]
            }
          </p>
          <div className="w-full mt-5 px-0 py-1 lg:px-5 lg:py-2 hidden lg:block">
            <div className="columns-1 md:columns-3 lg:columns-3">
              <Link href="/organization/about-us">
                <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                    src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870433/IMG_0170_420371b7c7.jpg"
                  />
                  <div className="absolute inset-0 p-2 text-white flex flex-col justify-end">
                    <div className="relative">
                      <h1 className="text-2xl font-bold mb-3">
                        {
                          translations[currentLang as "en" | "fr"][
                            "organization-who-are-we"
                          ]
                        }
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/organization/about-us#story">
                <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                    src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870431/IMG_5675_746b231752.jpg"
                  />
                  <div className="absolute inset-0 p-2 text-white flex flex-col justify-end">
                    <div className="relative">
                      <h1 className="text-2xl font-bold mb-3">
                        {
                          translations[currentLang as "en" | "fr"][
                            "organization-story"
                          ]
                        }
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/organization/about-us#team">
                <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                    src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870432/IMG_5666_001d09b47b.jpg"
                  />
                  <div className="absolute inset-0 p-2 text-white flex flex-col justify-end">
                    <div className="relative">
                      <h1 className="text-2xl font-bold mb-3">
                        {
                          translations[currentLang as "en" | "fr"][
                            "organization-team"
                          ]
                        }
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/organization/annual-reports">
                <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                    src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870425/pile_of_books_be61aba92f.jpg"
                  />
                  <div className="absolute inset-0 p-2 text-white flex flex-col justify-end">
                    <div className="relative">
                      <h1 className="text-2xl font-bold mb-3">
                        {
                          translations[currentLang as "en" | "fr"][
                            "organization-annual-report"
                          ]
                        }
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/organization/carreers">
                <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                    src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870422/formal_wear_4ccd659463.jpg"
                  />
                  <div className="absolute inset-0 p-2 text-white flex flex-col justify-end">
                    <div className="relative">
                      <h1 className="text-2xl font-bold mb-3">
                        {
                          translations[currentLang as "en" | "fr"][
                            "organization-employment"
                          ]
                        }
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/blog">
                <div className="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="w-full rounded-lg"
                    src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870425/typing_machine_4aa7a6a7d6.jpg"
                  />
                  <div className="absolute inset-0 p-2 text-white flex flex-col justify-end">
                    <div className="relative">
                      <h1 className="text-2xl font-bold mb-3">
                        {
                          translations[currentLang as "en" | "fr"][
                            "organization-blog"
                          ]
                        }
                      </h1>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full mt-10 px-0 py-1 lg:px-5 lg:py-2 block lg:hidden">
            <div className="grid grid-rows-5 gap-y-4">
              <Link href="/organization/about-us">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg py-10 px-5 max-w-sm mx-auto">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870433/IMG_0170_420371b7c7.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h1 className="z-10 text-2xl font-bold text-white">
                    {
                      translations[currentLang as "en" | "fr"][
                        "organization-who-are-we"
                      ]
                    }
                  </h1>
                </article>
              </Link>
              <Link href="/organization/about-us#story">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg py-10 px-5 max-w-sm mx-auto">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870431/IMG_5675_746b231752.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h1 className="z-10 text-2xl font-bold text-white line-clamp-1">
                    {
                      translations[currentLang as "en" | "fr"][
                        "organization-story"
                      ]
                    }
                  </h1>
                </article>
              </Link>
              <Link href="/organization/about-us#team">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg py-10 px-5 max-w-sm mx-auto">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870432/IMG_5666_001d09b47b.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h1 className="z-10 text-2xl font-bold text-white">
                    {
                      translations[currentLang as "en" | "fr"][
                        "organization-team"
                      ]
                    }
                  </h1>
                </article>
              </Link>
              <Link href="/organization/annual-reports">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg py-10 px-5 max-w-sm mx-auto">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870425/pile_of_books_be61aba92f.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h1 className="z-10 text-2xl font-bold text-white">
                    {
                      translations[currentLang as "en" | "fr"][
                        "organization-annual-report"
                      ]
                    }
                  </h1>
                </article>
              </Link>
              <Link href="/organization/annual-reports">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg py-10 px-5 max-w-sm mx-auto">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870422/formal_wear_4ccd659463.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h1 className="z-10 text-2xl font-bold text-white">
                    {
                      translations[currentLang as "en" | "fr"][
                        "organization-employment"
                      ]
                    }
                  </h1>
                </article>
              </Link>
              <Link href="/organization/annual-reports">
                <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-lg py-10 px-5 max-w-sm mx-auto">
                  <Image
                    alt=""
                    width={1000}
                    height={1000}
                    className="absolute inset-0 h-full w-full object-cover"
                    src="https://res.cloudinary.com/dquixuhcu/image/upload/v1710870425/typing_machine_4aa7a6a7d6.jpg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h1 className="z-10 text-2xl font-bold text-white">
                    {
                      translations[currentLang as "en" | "fr"][
                        "organization-blog"
                      ]
                    }
                  </h1>
                </article>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { OrganizationContent };
