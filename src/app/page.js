import AboutUs from "./components/AboutUs";
import CallToAction from "./components/CallToAction";
import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import News from "./components/News";
import OurShip from "./components/OurShip";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <OurShip />
      <MissionVision />
      {/* <News /> */}
      <CallToAction />
    </>
  );
}