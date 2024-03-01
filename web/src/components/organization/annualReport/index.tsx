import Image from "next/image";
import Link from "next/link";
import { BlobCard } from "../../blobCard";

const AnnualReportContent = () => {
  return (
    <>
      <div className="w-full grid grid-cols-1">
        <div className="w-full h-[500px]">
          <div className="rounded-md h-full w-full relative">
            <Image
              alt=""
              width={2560}
              height={1440}
              className="w-full h-full object-cover"
              src="/assets/images/organization/pile-of-books.jpg"
            />
            <div className="absolute inset-0 p-6 lg:py-16 lg:px-28 text-white flex flex-col justify-center bg-slate-700 bg-opacity-70">
              <div className="relative">
                <h1 className="text-6xl font-bold mb-4">Rapport annuel</h1>
              </div>
              <div className="relative">
                <h1 className="text-xl font-light mb-4">
                  Suivez notre parcours et notre évolution au fil des années.
                  <br />
                  Cela pourrait vous inspirer... ou simplement vous interesser.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto mt-2">
          <div className="mx-auto max-w-7xl px-4 py-10 lg:py-16 lg:px-8">
            <h2
              className="text-4xl lg:text-5xl font-bold text-darkblue mb-7"
              id="story"
            >
              Récapitulatifs
            </h2>
            <div className="w-full px-10 py-5 grid grid-cols-1 lg:flex lg:justify-center lg:items-center gap-5">
              <div className="w-[30rem] flex flex-col p-4 bg-lilywhite rounded-xl cursor-pointer">
                <div className="rounded-md h-full w-full relative">
                  <Image
                    alt=""
                    width={720}
                    height={720}
                    className="w-full object-cover h-72 rounded-xl"
                    src="/assets/images/organization/370845146_621391003455866_507568349657303385_n.jpeg"
                  />
                  <div className="absolute rounded-xl inset-0 text-white flex flex-col justify-center items-center bg-slate-700 bg-opacity-30 hover:bg-opacity-70 transition-all duration-500">
                    <div className="relative text-center">
                      <h1 className="text-4xl font-bold mb-4">2023</h1>
                    </div>
                  </div>
                </div>
                <p className="text-darkblue text-start text-lg mt-5">
                  L&apos;année a débuté par des distinctions prestigieuses, des
                  prix et des récompenses; affirmant notre engagement.
                  <br /> Le 26 août 2023, notre lancement officiel a souligné
                  notre dévouement envers notre mission, notre communauté et la
                  promotion de la culture africaine localement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { AnnualReportContent };
