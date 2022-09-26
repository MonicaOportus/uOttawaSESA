import EventsTitle from "../components/eventsTitle";
import TitleSection from "../components/titleSection";
import Events from "../components/events";
import eventInfo from "../components/eventsInfo";
import React from "react";
import Navbar from "../components/navbar";
import AboutSection from "../components/aboutSection";
import Team from "../components/team";
import teamInfo from "../components/teamInfo";
import TeamTitle from "../components/teamTitle";
import Contact from "../components/contact";
import Footer from "../components/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <div data-aos="fade-up" data-aos-duration="1500">
        <TitleSection />
      </div>
      <EventsTitle />
      <div data-aos="fade-up" data-aos-duration="500">
        <div className="pb-[100px] text-center">{eventInfo.map(Events)}</div>{" "}
      </div>
      <AboutSection />
      <TeamTitle />
      <div className="text-center mx-[45px] md:mx-[70px] xl:mx-[160px]">
        {teamInfo.map(Team)}
      </div>
      <Contact/>
      <Footer />
    </div>
  );
}

export default Home;
