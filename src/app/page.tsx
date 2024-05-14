import Hero from "./components/sections/Hero";
import AboutUs from "./components/sections/AboutUs";
import App from "./components/sections/App";
import SocialProof from "./components/sections/SocialProof";
import SupportedCountries from "./components/sections/SupportedCountries";
import Footer from "./components/sections/Footer";
import Agents from "./components/sections/Agents";

export default function Home() {
  return (
    <div>
      <Hero />
      <SupportedCountries />
      <AboutUs />
      <App />
      {/* <Agents /> */}
      <SocialProof />
      <Footer />
    </div>
  );
}
