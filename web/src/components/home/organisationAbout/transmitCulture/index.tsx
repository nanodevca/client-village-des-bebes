import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currentLanguageValue } from "@/src/atoms/language";
import { getTranslation } from "@/src/utils/functions";

const translations = getTranslation();

const TransmitCulture = () => {
  const currentLang = useRecoilValue(currentLanguageValue);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 flex-col-reverse">
        <div className="col-span-6 sm:col-span-5 order-last sm:order-first">
          <Image
            src={
              "https://res.cloudinary.com/dquixuhcu/image/upload/v1710870528/culture_transmission_28124f0719.png"
            }
            alt={"Transmit Culture"}
            width={1000}
            height={1000}
            className="grid grid-cols-1 gap-x-16 gap-y-10 sm:gap-x-40 rounded-3xl object-cover w-full h-full"
          />
        </div>

        {/* COLUMN-2 */}
        <div className="col-span-6 sm:col-span-7 flex justify-center items-center">
          <div className="flex flex-col align-middle justify-center p-10">
            <p className="text-2xl sm:text-4xl pt-4 font-semibold lh-81 mt-5 text-center sm:text-start">
              {
                translations[currentLang as "en" | "fr"][
                  "home-transmit-culture"
                ]
              }
            </p>
            <h4 className="text-lg pt-4 font-normal lh-33 text-center sm:text-start text-bluegray">
              {
                translations[currentLang as "en" | "fr"][
                  "home-transmit-culture-description"
                ]
              }
            </h4>
          </div>
        </div>
      </div>
      {/* COLUMN-1 */}
    </>
  );
};

export default TransmitCulture;
