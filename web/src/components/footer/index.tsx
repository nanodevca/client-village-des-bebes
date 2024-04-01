"use client";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/src/data/navigation/navigation";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { FacebookIcon } from "../icons/facebook";
import { InstagramIcon } from "../icons/instagram";
import { XIcon } from "../icons/x";
import { TikTokIcon } from "../icons/tiktok";
import { YouTubeIcon } from "../icons/youtube";
import { LinkedInIcon } from "../icons/linkedin";
import { useRecoilState } from "recoil";
import { currentLanguage } from "../../atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();

const Footer = () => {
  const [currentLang, setCurrentLang] = useRecoilState(currentLanguage);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLang(e.target.value);
    // Scroll to top of the page
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer
        className="bg-darkblue text-white"
        aria-labelledby="footer-heading"
      >
        <div className="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8 sm:grid sm:grid-cols-2 sm:gap-16">
            <div className="space-y-0 lg:col-span-1 col-span-1">
              <div className="w-full flex justify-between items-center">
                <Image
                  src={
                    "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870348/logo_0b2e1d2d69.png"
                  }
                  width={500}
                  height={500}
                  className="w-28 object-contain"
                  alt="le-village-des-bebes"
                />
                <Image
                  src={
                    "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870348/sceau_defi_OS_Entreprendre_laureat_regional_2023_4dc09b48c1.png"
                  }
                  width={500}
                  height={500}
                  className="w-20 h-20 object-contain"
                  alt="projet laureat regional 2023 defi OS entreprendre"
                  title="Projet laureat regional 2023 defi OS entreprendre"
                />
              </div>
              <div className="w-1/2 text-sm text-gray-500">
                <div className="flex gap-2">
                  <MapPinIcon className="h-5 w-5 text-offwhite" />
                  <h5 className="text-base font-normal text-offwhite hover:text-pictonblue">
                    {translations[currentLang as "en" | "fr"]["lvdb-adress"]}
                  </h5>
                </div>
                <div className="flex gap-2 mt-2">
                  <PhoneIcon className="h-5 w-5 text-offwhite" />
                  <h5 className="text-base font-normal text-offwhite hover:text-pictonblue">
                    <Link
                      href={`tel:${translations[currentLang as "en" | "fr"][
                        "lvdb-phone"
                      ].replace(/\s/g, "")}`}
                      className="text-offwhite hover:text-pictonblue"
                    >
                      {translations[currentLang as "en" | "fr"]["lvdb-phone"]}
                    </Link>
                  </h5>
                </div>
                <div className="flex gap-2 mt-2">
                  <EnvelopeIcon className="h-5 w-5 text-offwhite" />
                  <h5 className="text-base font-normal text-offwhite hover:text-pictonblue">
                    {translations[currentLang as "en" | "fr"]["lvdb-mail"]}
                  </h5>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 mt-12 lg:mt-0 lg:col-span-2 sm:col-span-1">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3
                    className="
                    text-base
                    font-semibold
                    tracking-wider
                    text-pictonblue
                    uppercase
                  "
                  >
                    {" "}
                    {
                      translations[currentLang as "en" | "fr"][
                        "footer-quick-links-title"
                      ]
                    }{" "}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {[navigation(currentLang as "en" | "fr").slice(0, 3)].map(
                      (links, x) => (
                        <div key={x}>
                          {links.map((link, y) => (
                            <li key={y} className="mb-5">
                              <Link
                                href={link.href}
                                className="text-white text-sm font-normal space-links"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      )
                    )}
                  </ul>
                </div>
                <div className="mt-0">
                  <h3
                    className="
                    text-base
                    font-semibold
                    tracking-wider
                    text-transparent
                    uppercase
                  "
                  >
                    {" "}
                    {
                      translations[currentLang as "en" | "fr"][
                        "footer-quick-links-title"
                      ]
                    }{" "}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {[navigation(currentLang as "en" | "fr").slice(3)].map(
                      (links, x) => (
                        <div key={x}>
                          {links.map((link, y) => (
                            <li key={y} className="mb-5">
                              <Link
                                href={link.href}
                                className="text-white text-sm font-normal space-links"
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      )
                    )}
                  </ul>
                </div>
              </div>
              <div className="lg:justify-end md:grid md:grid-cols-1">
                <div className="w-full mt-0">
                  <div className="mt-8 lg:justify-end lg:mt-0">
                    <h3
                      className="
                      text-base
                      font-semibold
                      tracking-wider
                      text-pictonblue
                      uppercase
                    "
                    >
                      {" "}
                      {
                        translations[currentLang as "en" | "fr"][
                          "footer-subscribe-newsletter-title"
                        ]
                      }{" "}
                    </h3>
                    <p className="mt-4 text-sm text-gray-500 lg:ml-auto">
                      {" "}
                      {
                        translations[currentLang as "en" | "fr"][
                          "footer-subscribe-newsletter-description"
                        ]
                      }{" "}
                    </p>
                    <div className="lg:inline-flex justify-center items-center gap-2 list-none lg:ml-auto w-full">
                      <form
                        action=""
                        method="post"
                        id="revue-form"
                        name="revue-form"
                        target="_blank"
                        className="
                        p-1
                        mt-4
                        transition
                        duration-500
                        ease-in-out
                        transform
                        border2
                        bg-lilywhite
                        rounded-xl
                        w-full
                        sm:max-w-full sm:flex
                      "
                      >
                        <div className="flex-1 min-w-0 revue-form-group">
                          <label htmlFor="member_email" className="sr-only">
                            {
                              translations[currentLang as "en" | "fr"][
                                "sign-in-mail-adress"
                              ]
                            }
                          </label>
                          <input
                            id="cta-email"
                            type="email"
                            className="
                            block
                            w-full
                            px-5
                            py-3
                            text-base text-[#718096]
                            placeholder-[#718096]
                            transition
                            duration-500
                            ease-in-out
                            transform
                            bg-transparent
                            border border-transparent
                            rounded-md
                            focus:outline-none
                            focus:border-transparent
                          "
                            placeholder={
                              translations[currentLang as "en" | "fr"][
                                "footer-enter-mail-adress"
                              ]
                            }
                          />
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-3 revue-form-actions">
                          <button
                            type="submit"
                            value="Subscribe"
                            name="member[subscribe]"
                            id="member_submit"
                            className="
                            block
                            w-full
                            p-3
                            text-base
                            font-medium
                            text-lilywhite
                            bg-pictonblue
                            border border-transparent
                            rounded-lg
                            shadow
                            hover:bg-blue-700
                            focus:outline-none
                            sm:px-7
                          "
                          >
                            {" "}
                            {
                              translations[currentLang as "en" | "fr"]["add"]
                            }{" "}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="w-full mt-3 flex justify-center lg:justify-end">
                  <div className="relative bg-lilywhite w-1/2 rounded-xl">
                    <select
                      id="language"
                      name="language"
                      className="
                          w-full
                          px-5
                          py-3
                          text-base text-gray-500
                          placeholder-gray-500
                          transition
                          duration-500
                          ease-in-out
                          bg-transparent
                          border border-transparent
                          rounded-md
                          focus:outline-none
                          focus:border-transparent
                        "
                      value={currentLang}
                      onChange={handleLanguageChange}
                    >
                      <option value="fr">
                        🇫🇷&nbsp;
                        {currentLang === "fr" ? "Français" : "French"}
                      </option>
                      <option value="en">
                        🇬🇧&nbsp;
                        {currentLang === "en" ? "English" : "Anglais"}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="
          px-5
          py-12
          mx-auto
          bg-darkblue
          border-t border-lilywhite
          max-w-7xl
          sm:px-6
          lg:flex lg:items-center lg:justify-between
          lg:px-20
        "
        >
          <div className="flex justify-center mb-8 space-x-6 md:order-last">
            <Link
              href="https://www.linkedin.com/company/le-village-des-b%C3%A9b%C3%A9s/"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">LinkedIn</span>
              <LinkedInIcon />
            </Link>
            <Link
              href="https://www.facebook.com/p/Village-des-b%C3%A9b%C3%A9s-100087341078035/"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <FacebookIcon />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">X (formerly Twitter)</span>
              <XIcon />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">TikTok</span>
              <TikTokIcon />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">YouTube</span>
              <YouTubeIcon />
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1 text-center lg:text-start">
            <span className="text-offwhite text-sm font-normal mt-2 text-gray-500">
              ©{new Date().getFullYear()} Le Village des Bebés ·{" "}
              <Link href="/" target="_blank" className="text-pictonblue">
                {
                  translations[currentLang as "en" | "fr"][
                    "footer-privacy-policy"
                  ]
                }
              </Link>{" "}
              ·{" "}
              <Link href="/" target="_blank" className="text-pictonblue">
                {
                  translations[currentLang as "en" | "fr"][
                    "footer-terms-and-conditions"
                  ]
                }
              </Link>{" "}
              · Made with ♥️ by{" "}
              <Link href="https://nanodev.ca/" target="_blank">
                {" "}
                Nanodev
              </Link>{" "}
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
