import Image from "next/image";

const PrimaryFilterCard = () => {
  return (
    <>
      <div className="w-[15rem] flex flex-col p-4 bg-lilywhite rounded-xl cursor-pointer">
        <div className="rounded-md h-full w-full relative">
          <Image
            alt=""
            width={720}
            height={720}
            className="w-full object-cover h-50 rounded-xl"
            src="/assets/images/organization/370845146_621391003455866_507568349657303385_n.jpeg"
          />
        </div>
        <p className="text-darkblue text-start text-lg mt-5">
          organization-annual-report-recap-2023-description
        </p>
      </div>
    </>
  );
};

export { PrimaryFilterCard };
