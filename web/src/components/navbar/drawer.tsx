import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { navigation } from "@/src/navigation/navigation";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const Drawer = ({ isOpen, setIsOpen }: DrawerType) => {
  const [currentPage, setCurrentPage] = useState<string>("");

  const linksStructure = (): { [key: string]: string[] } => {
    let links = {};
    navigation.map((item, x) => {
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
    setIsOpen(false);
  };

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <main
      className={`fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out
        ${
          isOpen
            ? "transition-opacity opacity-100 duration-500 translate-x-0"
            : "transition-all delay-500 opacity-0 -translate-x-full"
        }
      `}
    >
      <section
        className={`w-340px max-w-lg left-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <article className="relative w-270 max-w-lg flex flex-col h-full">
          <header className="px-5 flex items-center justify-between">
            <Image
              className="block h-28 w-28 lg:hidden"
              src={"/assets/images/company/logo.png"}
              width={112}
              height={112}
              alt="le-village-des-bebes"
            />
            <XMarkIcon
              className="block h-6 w-6"
              onClick={() => {
                setIsOpen(false);
              }}
            />
          </header>
          <div>
            <div className="max-w-sm w-full mx-auto">
              <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                  <div className="space-y-1 px-5 pt-2 pb-3">
                    {navigation.map((item, x) => (
                      <button
                        key={x}
                        className="group focus:outline-none w-full h-max"
                      >
                        <div
                          key={x}
                          className={`px-3 py-2 flex items-center justify-between w-full`}
                        >
                          <Link
                            key={x}
                            href={item.href}
                            onClick={() => updateCurrentPage(item.href)}
                            className={`${
                              currentPage === item.href ||
                              linksStructure()[item.href].includes(currentPage)
                                ? "text-pictonblue font-semibold"
                                : "font-normal"
                            }`}
                            aria-current={item.href ? "page" : undefined}
                          >
                            {item.name}
                          </Link>{" "}
                          {item.children && (
                            <ChevronDownIcon
                              className="w-5 h-5 ml-1"
                              aria-hidden="true"
                              width={20}
                              height={20}
                              fill="currentColor"
                            />
                          )}
                        </div>
                        {item.children && (
                          <div className="max-h-0 overflow-hidden duration-300 group-focus:max-h-80 bg-[#F2F2F2] rounded-md">
                            {item.children.map((item, x) => (
                              <Link
                                key={x}
                                onClick={() => updateCurrentPage(item.href)}
                                href={item.href}
                                className="flex items-center h-8 px-4 text-sm hover:bg-gray-200"
                                aria-current={item.href ? "page" : undefined}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer bg-black bg-opacity-50"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
};

export default Drawer;
