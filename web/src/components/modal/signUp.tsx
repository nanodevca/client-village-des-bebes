"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();

const SignUpModal = ({
  isOpen,
  closeModal,
  toggleModal,
}: {
  isOpen: boolean;
  toggleModal: () => void;
  closeModal: () => void;
}) => {
  const currentLang = useRecoilValue(currentLanguageValue);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                  <div className="w-full max-w-md space-y-8">
                    <div>
                      <Image
                        className="mx-auto"
                        src={"/assets/images/company/logo.png"}
                        width={150}
                        height={48}
                        alt="le-village-des-bebes"
                      />
                      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                        {
                          translations[currentLang as "en" | "fr"][
                            "sign-in-connect"
                          ]
                        }
                      </h2>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                      <input
                        type="hidden"
                        name="remember"
                        defaultValue="true"
                      />
                      <div className="-space-y-px rounded-md shadow-sm">
                        <div>
                          <label htmlFor="email-address" className="sr-only">
                            {
                              translations[currentLang as "en" | "fr"][
                                "sign-in-mail-adress"
                              ]
                            }
                          </label>
                          <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-t-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder={
                              translations[currentLang as "en" | "fr"][
                                "sign-in-mail-adress"
                              ]
                            }
                          />
                        </div>
                        <div>
                          <label htmlFor="password" className="sr-only">
                            {
                              translations[currentLang as "en" | "fr"][
                                "sign-in-password"
                              ]
                            }
                          </label>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-grey500 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            placeholder={
                              translations[currentLang as "en" | "fr"][
                                "sign-in-password"
                              ]
                            }
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="remember-me"
                            className="ml-2 block text-sm text-gray-900"
                          >
                            {
                              translations[currentLang as "en" | "fr"][
                                "sign-in-mail-remember-me"
                              ]
                            }
                          </label>
                        </div>

                        <div className="text-sm">
                          <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            {
                              translations[currentLang as "en" | "fr"][
                                "sign-in-password-forgotten"
                              ]
                            }
                          </a>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="group relative flex w-full justify-center rounded-md border border-transparent bg-pictonblue py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockOpenIcon
                              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                              aria-hidden="true"
                            />
                          </span>
                          {translations[currentLang as "en" | "fr"]["sign-up"]}
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleModal()}
                          className="mt-2 relative flex w-full justify-center rounded-md border border-pictonblue bg-white py-2 px-4 text-sm font-medium text-pictonblue focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon
                              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                              aria-hidden="true"
                            />
                          </span>
                          {translations[currentLang as "en" | "fr"]["sign-in"]}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="mt-4 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-pictonblue-100 px-4 py-2 text-sm font-medium text-pictonblue-900 hover:bg-pictonblue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pictonblue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    {
                      translations[currentLang as "en" | "fr"][
                        "sign-in-not-yet"
                      ]
                    }
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export { SignUpModal };
