"use client";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/src/navigation/navigation";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  link: string[];
}

const products: ProductType[] = [
  {
    id: 1,
    link: ["Home", "Popular", "About", "Contact"],
  },
  {
    id: 2,
    link: ["Help", "Resources", "Application", "Team"],
  },
];

const footer = () => {
  return (
    <div className="bg-darkblue">
      <div className="mx-auto max-w-2xl pt-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="my-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}

          <div className="col-span-4 md:col-span-12 lg:col-span-4">
            <Image
              src={"/assets/images/company/logo.png"}
              width={150}
              height={48}
              alt="le-village-des-bebes"
            />
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="footer-fb-icons">
                <Image
                  src={"/assets/footer/facebook.svg"}
                  alt="facebook"
                  width={15}
                  height={20}
                />
              </Link>
              <Link href="https://twitter.com" className="footer-icons">
                <Image
                  src={"/assets/footer/twitter.svg"}
                  alt="twitter"
                  width={20}
                  height={20}
                />
              </Link>
              <Link href="https://instagram.com" className="footer-icons">
                <Image
                  src={"/assets/footer/instagram.svg"}
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          </div>

          {/* CLOUMN-2/3 */}

          {[navigation.slice(0, 3), navigation.slice(3)].map((links, x) => (
            <div
              key={x}
              className="group relative col-span-2 md:col-span-4 lg:col-span-2"
            >
              <ul>
                {links.map((link, y) => (
                  <li key={y} className="mb-5">
                    <Link
                      href={link.href}
                      className="text-white text-sm font-normal mb-6 space-links"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CLOUMN-4 */}

          <div className="col-span-4 md:col-span-4 lg:col-span-4">
            <div className="flex gap-2">
              <MapPinIcon className="h-5 w-5 text-offwhite" />
              <h5 className="text-base font-normal text-offwhite">ADDRESS</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <PhoneIcon className="h-5 w-5 text-offwhite" />
              <h5 className="text-base font-normal text-offwhite">PHONE</h5>
            </div>
            <div className="flex gap-2 mt-10">
              <EnvelopeIcon className="h-5 w-5 text-offwhite" />
              <h5 className="text-base font-normal text-offwhite">MAIL</h5>
            </div>
          </div>
        </div>

        {/* All Rights Reserved */}

        <div className="py-10 lg:flex items-center justify-between border-t border-t-bordertop">
          <h4 className="text-offwhite text-sm text-center lg:text-start font-normal">
            ©{new Date().getFullYear()} Le Village des Bebés. Tous droits
            réservés. Made with ♥️ by{" "}
            <Link href="https://nanodev.ca/" target="_blank">
              {" "}
              Nanodev
            </Link>
          </h4>
          <div className="flex gap-5 mt-5 lg:mt-0 justify-center items-center lg:justify-start">
            <h4 className="text-offwhite text-sm font-normal text-center">
              <Link href="/" target="_blank">
                Politique de confidentialité
              </Link>
            </h4>
            <div className="h-5 bg-bordertop w-0.5"></div>
            <h4 className="text-offwhite text-sm font-normal text-center">
              <Link href="/" target="_blank">
                Conditions d&apos;utilisation
              </Link>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
