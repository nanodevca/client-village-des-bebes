"use client";
import { InvolvedButton } from "../../button/involvedButton";
import { MemberButton } from "../../button/memberButton";

const Banner = () => {
  return (
    <main>
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-6xl pt-16 sm:pt-20 banner-image">
          <div className="text-center flex flex-col items-center justify-center">
            <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
              Parce que les parents exemplaires méritent un suivi de qualité.
            </h1>
            <p className="mt-5 text-xl leading-8 text-bluegray w-4/5">
              Découvrez une communauté chaleureuse dédiée à
              l&apos;épanouissement des familles pendant la période de
              périnatalité et de petite enfance. Notre mission est d&apos;offrir
              un soutien, des activités enrichissantes et une entraide
              multiculturelle. Rejoignez-nous dans cette aventure où la
              solidarité, l&apos;empowerment, et la bienveillance sont nos
              valeurs fondamentales.
            </p>
          </div>

          <div className="w-full flex justify-center mb-5">
            <div className="text-center mt-5 flex lg:items-center lg:justify-between lg:w-1/2 w-full justify-between flex-col lg:flex-row h-40 lg:h-auto">
              <MemberButton />
              <InvolvedButton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { Banner };
