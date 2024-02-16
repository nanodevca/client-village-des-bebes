import { Banner } from "../components/banner/banner";
import { Partners } from "../components/partners/partners";
import { EventsCalendar } from "../components/eventsCalendar/index";
import AboutOrganization from "../components/organisationAbout";

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
