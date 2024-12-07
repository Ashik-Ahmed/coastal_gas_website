import CallToAction from "./components/CallToAction";
import Hero from "./components/Hero";
import OurShip from "./components/OurShip";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <AboutUs /> */}
      <Services />
      <OurShip />
      {/* <MissionVision /> */}
      {/* <News /> */}
      <CallToAction />
    </>
  );
}