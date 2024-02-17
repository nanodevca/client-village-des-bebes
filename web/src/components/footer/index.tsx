"use client";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/src/navigation/navigation";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import { FacebookIcon } from "../icons/facebook";
import { InstagramIcon } from "../icons/instagram";
import { XIcon } from "../icons/x";
import { TikTokIcon } from "../icons/tiktok";
import { YouTubeIcon } from "../icons/youtube";
import { LinkedInIcon } from "../icons/linkedin";

const footer = () => {
  return (
    <>
      <footer
        className="bg-darkblue text-white"
        aria-labelledby="footer-heading"
      >
        <div className="px-5 py-12 mx-auto max-w-7xl lg:py-16 md:px-12 lg:px-20">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-0 xl:col-span-1">
              <Image
                src={"/assets/images/company/logo.png"}
                width={500}
                height={500}
                className="w-28 object-contain"
                alt="le-village-des-bebes"
              />
              <div className="w-1/2 text-sm text-gray-500">
                <div className="flex gap-2">
                  <MapPinIcon className="h-5 w-5 text-offwhite" />
                  <h5 className="text-base font-normal text-offwhite hover:text-pictonblue">
                    ADDRESS
                  </h5>
                </div>
                <div className="flex gap-2 mt-2">
                  <PhoneIcon className="h-5 w-5 text-offwhite" />
                  <h5 className="text-base font-normal text-offwhite hover:text-pictonblue">
                    <Link href="tel:+1 514-962-7542">+1 514-962-7542</Link>
                  </h5>
                </div>
                <div className="flex gap-2 mt-2">
                  <EnvelopeIcon className="h-5 w-5 text-offwhite" />
                  <h5 className="text-base font-normal text-offwhite hover:text-pictonblue">
                    MAIL
                  </h5>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
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
                    Liens rapides{" "}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {[navigation.slice(0, 3)].map((links, x) => (
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
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
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
                    Liens rapides{" "}
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {[navigation.slice(3)].map((links, x) => (
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
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden lg:justify-end md:grid md:grid-cols-1">
                <div className="w-full mt-12 md:mt-0">
                  <div className="mt-8 lg:justify-end xl:mt-0">
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
                      Abonnez vous à notre newsletter !{" "}
                    </h3>
                    <p className="mt-4 text-sm text-gray-500 lg:ml-auto">
                      {" "}
                      Recevez les dernières nouvelles et mises à jour
                      directement dans votre boîte de réception.{" "}
                    </p>
                    <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
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
                        sm:max-w-lg sm:flex
                      "
                      >
                        <div className="flex-1 min-w-0 revue-form-group">
                          <label htmlFor="member_email" className="sr-only">
                            Email address
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
                            placeholder="Enter your email  "
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
                            Ajouter{" "}
                          </button>
                        </div>
                      </form>
                    </div>
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
          md:flex md:items-center md:justify-between
          lg:px-20
        "
        >
          <div className="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
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
                Politique de confidentialité
              </Link>{" "}
              ·{" "}
              <Link href="/" target="_blank" className="text-pictonblue">
                Conditions d&apos;utilisation
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

export default footer;
