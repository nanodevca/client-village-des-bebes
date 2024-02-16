import MissionValues from "./missionValues";
import TransmitCulture from "./transmitCulture";
import WomenEmpowerment from "./womenEmpowerment";

const AboutOrganization = () => {
  return (
    <div id="about-organisation" className="bg-lilywhite mt-5 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:py-20 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-semibold lh-81 text-center lg:mb-10">
          Le village des bébés ?
        </h2>
        <MissionValues />
        <TransmitCulture />
        <WomenEmpowerment />
      </div>
    </div>
  );
};

export default AboutOrganization;
