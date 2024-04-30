import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import AgentVsApp from "./components/AgentVsApp";
import SocialProof from "./components/SocialProof";
import Where from "./components/Where";
import Steps from "./components/Steps";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <AgentVsApp />
      <SocialProof />
      <Where />
      <Steps />
    </div>
  );
}
