import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

const InvolvedButton = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Link href="/involved">
        <button className="transition duration-150 ease-in-out leafbutton text-lg text-white font-medium bg-pictonblue py-5 px-16 w-full lg:w-auto hover:text-pictonblue hover:bg-white hover:border hover:border-lightgrey">
          S&lsquo;impliquer
        </button>
      </Link>
    </>
  );
};

export { InvolvedButton };
