"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect } from "react";
import Drawer from "./drawer";
import Image from "next/image";
import { navigation } from "@/src/data/navigation/navigation";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "../../atoms/language";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState<string>("");
  const currentLang = useRecoilValue(currentLanguageValue);

  const linksStructure = (): { [key: string]: string[] } => {
    let links = {};
    navigation(currentLang as "en" | "fr").map((item, x) => {
      links = {
        ...links,
        [item.href]: item.children
          ? item.children.map((child, x) => child.href)
          : [],
      };
    });

    return links;
  };

  const updateCurrentPage = (href: string) => {
    setCurrentPage(href);
  };

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <Disclosure as="nav" className="navbar">
      <>
        <div className="mx-auto max-w-7xl px-6 lg:py-4 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <Image
                    className="block h-full w-full lg:hidden"
                    src={"/assets/images/company/logo.png"}
                    width={100}
                    height={80}
                    alt="le-village-des-bebes"
                  />
                  <Image
                    className="hidden h-full w-full lg:block"
                    src={"/assets/images/company/logo.png"}
                    width={125}
                    height={100}
                    alt="le-village-des-bebes"
                  />
                </Link>
              </div>

              {/* LINKS */}

              <div className="hidden lg:block m-auto w-full">
                <ul className="flex justify-end items-center space-x-2">
                  {navigation(currentLang as "en" | "fr").map((item, x) => (
                    <li key={x} className="group">
                      <Link
                        key={x}
                        href={item.href}
                        aria-current={item.href ? "page" : undefined}
                        onClick={() => updateCurrentPage(item.href)}
                        className={`${
                          currentPage === item.href ||
                          linksStructure()[item.href].includes(currentPage)
                            ? "text-pictonblue font-semibold"
                            : "hover:text-pictonblue hover:font-semibold font-normal"
                        } ${
                          item.children ? "menu-hover" : ""
                        } px-3 py-2 text-lg space-links flex items-center justify-center`}
                      >
                        {item.name}{" "}
                        {item.children && (
                          <ChevronDownIcon
                            className="w-4 h-4 ml-1"
                            aria-hidden="true"
                            width={12}
                            height={12}
                            fill="currentColor"
                          />
                        )}
                      </Link>
                      {item.children && (
                        <div className="absolute rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden bg-white z-10 -ml-1 min-w-[15rem] max-w-[15rem] hidden group-hover:block">
                          {item.children.map((child, x) => (
                            <Link
                              key={x}
                              href={child.href}
                              onClick={() => updateCurrentPage(item.href)}
                              className="flex items-start px-6 py-4 hover:bg-pictonblue hover:font-semibold space-links"
                              aria-current={child.href ? "page" : undefined}
                              role="menuitem"
                            >
                              <div className="ml-0">
                                <p className="text-base font-medium text-gray-900">
                                  {child.name}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* <EngageButton /> */}

            <div className="block lg:hidden">
              <Bars3Icon
                className="block h-6 w-6"
                aria-hidden="true"
                onClick={() => setIsOpen(true)}
              />
            </div>

            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </>
    </Disclosure>
  );
};

export { Navbar };
