import Image from "next/image";

const WomenEmpowerment = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-4">
        {/* COLUMN-1 */}
        <div className="col-span-6 lg:col-span-7 flex justify-center items-center">
          <div className="flex flex-col align-middle justify-center p-10">
            <p className="text-2xl lg:text-4xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">
              Women empowerment
            </p>
            <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">
              Nous contribuons au développement et au mieux-être de notre
              communauté en soutenant les familles lors de la période de
              Périnatalité et Petite Enfance (PPE). Les femmes que nous
              accompagnons ont le désir de vivre la PPE entourées des conseils
              et traditions qui leurs sont familiers. De plus, les femmes
              immigrantes ignorent souvent les services et droits auxquels elles
              ont accès au Québec.
            </h4>
          </div>
        </div>

        {/* COLUMN-2 */}
        <div className="col-span-6 lg:col-span-5">
          <Image
            src={"/assets/organizationAbout/women_empowerment.png"}
            alt={"Women Empowerment"}
            width={1000}
            height={1000}
            className="grid grid-cols-1 gap-x-16 gap-y-10 lg:gap-x-40 rounded-3xl object-cover w-full h-full"
          />
        </div>
      </div>
    </>
  );
};

export default WomenEmpowerment;
