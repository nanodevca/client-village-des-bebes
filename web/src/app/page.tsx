import { Banner } from "../components/home/banner/banner";
import { Partners } from "../components/home/partners/partners";
import { EventsCalendar } from "../components/home/eventsCalendar/index";
import AboutOrganization from "../components/home/organisationAbout";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="container h-20" />
      <Partners />
      <AboutOrganization />
      <EventsCalendar />
    </main>
  );
}
