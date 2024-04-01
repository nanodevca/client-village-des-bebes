"use client";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();

const ContactForm = () => {
  const currentLang = useRecoilValue(currentLanguageValue);

  return (
    <>
      <div className="" id="contact-form">
        <div className="mx-auto max-w-2xl py-5 px-4 sm:max-w-7xl sm:px-8">
          <h3 className="text-3xl sm:text-5xl font-semibold text-left mt-5 lh-81">
            {translations[currentLang as "en" | "fr"]["home-contact-title"]}
          </h3>
          <p className="text-lg sm:text-2xl font-normal text-left text-bluegray mb-3">
            {
              translations[currentLang as "en" | "fr"][
                "home-contact-description"
              ]
            }
          </p>
        </div>
        <div className="container mx-auto px-6">
          <div className="pb-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="grid items-center sm:grid-cols-2">
                <div className="mb-12 md:mt-12 sm:mt-0 sm:mb-0">
                  <div className="relative z-[1] block rounded-lg bg-lilywhite px-6 py-12 md:px-12 sm:-mr-14 sm:shadow-2xl">
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-darkblue placeholder-bluegray outline-none transition-colors duration-200 ease-in-out"
                        placeholder=""
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-3 -top-6 text-sm leading-7 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm"
                      >
                        Nom
                      </label>
                    </div>
                    <div className="relative mt-10">
                      <input
                        type="email"
                        id="mail"
                        name="mail"
                        className="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-darkblue placeholder-bluegray outline-none transition-colors duration-200 ease-in-out"
                        placeholder=""
                      />
                      <label
                        htmlFor="mail"
                        className="absolute left-3 -top-6 text-sm leading-7 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm"
                      >
                        Email
                      </label>
                    </div>
                    <div className="relative mt-10">
                      <textarea
                        id="message"
                        name="message"
                        className="peer w-full rounded border border-gray-700 bg-opacity-40 py-1 px-3 text-base leading-8 text-darkblue placeholder-bluegray outline-none transition-colors duration-200 ease-in-out h-[200px]"
                        placeholder=""
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-3 -top-6 text-sm leading-7 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm"
                      >
                        Message
                      </label>
                    </div>
                    <div className="w-full p-2">
                      <button className="mx-auto rounded border-0 bg-pictonblue py-2 px-8 text-lg text-white font-bold w-1/2 flex justify-center">
                        Envoyer
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:mb-12 sm:mb-0">
                  <div className="relative h-[700px] rounded-xl flex flex-col-reverse py-10 px-20">
                    <iframe
                      src="https://maps.google.com/maps?t=&z=13&ie=UTF8&iwloc=&output=embed"
                      className="absolute left-0 top-0 h-full w-full rounded-xl"
                      frameBorder="0"
                    ></iframe>
                    <div className="bg-white relative flex flex-wrap py-6 rounded-xl shadow-md">
                      <div className="sm:w-full px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                          <MapPinIcon className="h-4 w-4 inline-block" />
                        </h2>
                        <p className="mt-1">
                          {
                            translations[currentLang as "en" | "fr"][
                              "lvdb-adress"
                            ]
                          }
                        </p>
                      </div>
                      <div className="sm:w-full px-6 mt-4 sm:mt-0">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                          <EnvelopeIcon className="h-4 w-4 inline-block" />
                        </h2>
                        <Link
                          href={"mailto:"}
                          className="leading-relaxed font-bold text-pictonblue text-sm"
                        >
                          {
                            translations[currentLang as "en" | "fr"][
                              "lvdb-mail"
                            ]
                          }
                        </Link>
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-2">
                          <PhoneIcon className="h-4 w-4 inline-block" />
                        </h2>
                        <Link
                          href={`tel:${translations[currentLang as "en" | "fr"][
                            "lvdb-phone"
                          ].replace(/\s/g, "")}`}
                          className="leading-relaxed font-bold text-pictonblue text-sm"
                        >
                          {
                            translations[currentLang as "en" | "fr"][
                              "lvdb-phone"
                            ]
                          }
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { ContactForm };
