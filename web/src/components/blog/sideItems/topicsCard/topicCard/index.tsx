import Image from "next/image";

const TopicCard = () => {
  return (
    <>
      <div className="group flex items-center justify-between gap-2">
        <p className="ease-in duration-200 group-hover:text-navyblue">
          Celebration
        </p>
        <span className="flex items-center justify-center max-w-[32px] w-full h-8 rounded-full text-sm border border-gray-400 ease-in duration-200 group-hover:text-white group-hover:bg-navyblue group-hover:border-navyblue">
          02
        </span>
      </div>
    </>
  );
};

export { TopicCard };
