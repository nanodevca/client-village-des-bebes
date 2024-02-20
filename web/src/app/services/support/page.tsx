import Image from "next/image";

const ServicesSupport = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Image
        src={"/assets/images/company/logo.png"}
        alt="logo"
        width={300}
        height={300}
      />
    </div>
  );
};

export default ServicesSupport;
