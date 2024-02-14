"use client";
import Image from "next/image";
import { RegisterDialogButton } from "../modal/registerDialogButton";
import { SignDialogButton } from "../modal/signDialogButton";

const Banner = () => {
  return (
    <main>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-6xl pt-16 sm:pt-20 banner-image">
          <div className="text-center pb-40">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
              Parce que les parents exemplaires méritent un suivi de qualité.
            </h1>
            <p className="mt-5 text-xl leading-8 text-bluegray">
              Découvrez une communauté chaleureuse dédiée à
              l&apos;épanouissement des familles pendant la période de
              périnatalité et de petite enfance. Notre mission est d&apos;offrir
              un soutien, des activités enrichissantes et une entraide
              multiculturelle. Rejoignez-nous dans cette aventure où la
              solidarité, l&apos;empowerment, et la bienveillance sont nos
              valeurs fondamentales.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Banner };
