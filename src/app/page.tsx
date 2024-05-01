import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import AgentVsApp from "./components/AgentVsApp";
import SocialProof from "./components/SocialProof";
import Countries from "./components/Countries";
import Steps from "./components/Steps";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <AgentVsApp />
      <SocialProof />
      <Countries />
      <Steps />
      <Footer />
    </div>
  );
}
