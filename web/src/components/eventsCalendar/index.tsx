import Image from "next/image";

const EventsCalendar = () => {
  return (
    <div className="bg-bluebg" id="events-calendar">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-4xl lg:text-6xl font-semibold text-center my-10 lh-81">
          Calendrier des événements à venir
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8"></div>
      </div>
    </div>
  );
};

export { EventsCalendar };
