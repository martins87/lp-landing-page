import Hero from "./components/sections/Hero";
import AboutUs from "./components/sections/AboutUs";
import AgentVsApp from "./components/sections/AgentVsApp";
import SocialProof from "./components/sections/SocialProof";
import SupportedCountries from "./components/sections/SupportedCountries";
import Steps from "./components/sections/Steps";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <SupportedCountries />
      <AboutUs />
      {/* <AgentVsApp /> */}
      <SocialProof />
      {/* <Steps /> */}
      <Footer />
    </div>
  );
}
