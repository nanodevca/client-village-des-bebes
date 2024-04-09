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

const ContactUsContent = () => {
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
              src="https://res.cloudinary.com/dquixuhcu/image/upload/v1711324671/contact_us_9b522925e6.jpg"
            />
            <div className="absolute inset-0 p-6 lg:py-16 lg:px-28 text-white flex flex-col justify-center bg-slate-700 bg-opacity-70">
              <div className="relative">
                <h1 className="text-6xl font-bold mb-4">
                  {translations[currentLang as "en" | "fr"]["contact-title"]}
                </h1>
              </div>
              <div className="relative max-w-[600px]">
                <h1 className="text-xl font-light mb-4">
                  {translations[currentLang as "en" | "fr"]["contact-subtitle"]}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <section className="text-gray-600 body-font relative">
          <div className="absolute inset-0 bg-gray-300">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!3m1!4b1!4m6!3m5!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5018869!4d-73.5673919!16zL20vMDUycDc"
              style={{
                filter: "grayscale(1) contrast(1.2) opacity(0.4);",
              }}
            />
          </div>
          <div className="container px-5 py-24 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative shadow-md">
              <h2 className="text-gray-900 text-2xl mb-1 font-medium title-font">
                {translations[currentLang as "en" | "fr"]["navbar-contact"]}
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                {
                  translations[currentLang as "en" | "fr"][
                    "home-contact-description"
                  ]
                }
              </p>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
              <button className="text-white bg-pictonblue border-0 py-2 px-6 focus:outline-none hover:bg-pelorous rounded text-lg flex justify-center">
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2a1 1 0 0 1 .932.638l7 18a1 1 0 0 1-1.326 1.281L13 19.517V13a1 1 0 1 0-2 0v6.517l-5.606 2.402a1 1 0 0 1-1.326-1.281l7-18A1 1 0 0 1 12 2Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export { ContactUsContent };
