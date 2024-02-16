import Image from "next/image";

const MissionValues = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-4">
        {/* COLUMN-1 */}
        <div className="col-span-6 lg:col-span-7 flex justify-center items-center">
          <div className="flex flex-col align-middle justify-center p-10">
            <p className="text-2xl lg:text-4xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
              Mission & Vision
            </p>
            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
              Autour d&apos;une riche diversité d&apos;expérience, le Village
              des bébés a pour mission de soutenir les familles dans
              l&apos;apprentissage de leur nouveau rôle afin de limiter leur
              isolement et promouvoir l&apos;entraide. Nous accueillons les
              familles et organisons des ateliers thématiques de préparation à
              l&apos;accouchement et sur le développement de l&apos;enfant. Le
              Village des Bébés propose des activités multiculturelles,
              éducatives et créatives spécialement conçues pour les enfants de 0
              à 5 ans. Nous veillons à préserver et perpétuer un patrimoine
              culturel Africain, porté par nos mères depuis des générations. Le
              Village est un milieu de vie communautaire et interculturel dont
              les valeurs sont: <em className="font-semibold">la Solidarité</em>
              , <em className="font-semibold">l&apos;Empowerment</em>,{" "}
              <em className="font-semibold">la Bienveillance</em>.
            </h4>
          </div>
        </div>

        {/* COLUMN-2 */}
        <div className="col-span-6 lg:col-span-5">
          <Image
            src={"/assets/organizationAbout/mission_vision.png"}
            alt={"Organization mission and vision"}
            width={1000}
            height={1000}
            className="grid grid-cols-1 gap-x-16 gap-y-10 lg:gap-x-40 rounded-3xl object-cover w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default MissionValues;
