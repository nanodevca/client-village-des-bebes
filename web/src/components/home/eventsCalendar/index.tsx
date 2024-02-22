import { CalendarView } from "./calendar";

const EventsCalendar = () => {
  return (
    <div className="" id="events-calendar">
      <div className="mx-auto max-w-2xl py-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-4xl lg:text-6xl font-semibold text-center my-5 lh-81">
          Calendrier des événements à venir
        </h3>

        <div className="w-full flex justify-center items-center mt-10">
          <CalendarView view="month" />
        </div>
      </div>
    </div>
  );
};

export { EventsCalendar };
