import { Banner } from "../components/home/banner/banner";
import { Partners } from "../components/home/partners";
import { EventsCalendar } from "../components/home/eventsCalendar/index";
import AboutOrganization from "../components/home/organisationAbout";
import { BlogPreview } from "../components/home/blogPreview";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="container h-20" />
      <Partners />
      <AboutOrganization />
      <EventsCalendar />
      <BlogPreview />
    </main>
  );
}
