import Image from "next/image";
import Link from "next/link";

const TransmitCulture = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 flex-col-reverse">
        <div className="col-span-6 lg:col-span-5 order-last lg:order-first">
          <Image
            src={"/assets/organizationAbout/culture_transmission.png"}
            alt={"Transmit Culture"}
            width={1000}
            height={1000}
            className="grid grid-cols-1 gap-x-16 gap-y-10 lg:gap-x-40 rounded-3xl object-cover w-full h-full"
          />
        </div>

        {/* COLUMN-2 */}
        <div className="col-span-6 lg:col-span-7 flex justify-center items-center">
          <div className="flex flex-col align-middle justify-center p-10">
            <p className="text-2xl lg:text-4xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
              Transmettre la culture
            </p>
            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
              L&apos;idée du Village des Bébés a émergé de mon expérience
              personnelle en tant que parent d&apos;origine sénégalaise au
              Canada. J&apos;ai ressenti le besoin de transmettre ma culture
              africaine à ma fille dès son plus jeune âge, mais j&apos;ai
              constaté que les ressources et les espaces dédiés à
              l&apos;éducation culturelle des jeunes enfants, en particulier
              pour les familles immigrantes, étaient insuffisants. Cette
              problématique m&apos;a amenée à entreprendre des démarches pour
              mieux comprendre les besoins non comblés et élaborer des
              stratégies pour y répondre.
            </h4>
          </div>
        </div>
      </div>
      {/* COLUMN-1 */}
    </>
  );
};

export default TransmitCulture;
