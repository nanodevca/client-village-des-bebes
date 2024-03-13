import { Activity } from "@/src/types/activity";
import { mergeStyle } from "@/src/utils/functions";
import {
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const ActivityCard = ({
  title,
  description,
  header,
  price,
  duration,
  public: forPublic,
  index,
}: Activity) => {
  return (
    <div
      className={mergeStyle(
        "rounded-xl group/bento transition duration-200 shadow-input bg-lilywhite justify-start flex flex-col w-full",
        index === 0 || index === 2 ? "md:col-span-2" : "md:col-span-1"
      )}
    >
      <Image
        src={`${header}`}
        width={1000}
        height={1000}
        alt={`Image of ${title} activity`}
        className="w-full min-h-[7rem] max-h-[7rem] object-cover rounded-t-xl filter -hue-rotate-60"
      />
      <div className="group-hover/bento:translate-x-2 transition duration-200 px-3 py-5">
        <div className="flex items-center justify-start w-full">
          <span className="text-xs font-medium inline-flex items-center p-2 rounded me-2 bg-emerald-400 text-white">
            <CurrencyDollarIcon className="h-4 w-4 me-1" />
            {price === 0 ? "FREE" : price + " CAD"}
          </span>
          <span className="text-xs font-medium inline-flex items-center p-2 rounded me-2 bg-emerald-400 text-white">
            <ClockIcon className="h-4 w-4 me-1" />
            {duration}
          </span>
          <span className="text-xs font-medium inline-flex items-center p-2 rounded me-2 bg-emerald-400 text-white">
            <UserGroupIcon className="h-4 w-4 me-1" />
            {forPublic}
          </span>
        </div>
        <div className="font-sans font-bold text-darkblue my-2">{title}</div>
        <div className="font-sans font-normal text-gray-500 text-sm line-clamp-3">
          {description}
        </div>
      </div>
    </div>
  );
};

export { ActivityCard };
