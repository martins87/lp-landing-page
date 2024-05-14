import Hero from "./components/sections/Hero";
import AboutUs from "./components/sections/AboutUs";
import App from "./components/sections/App";
import SocialProof from "./components/sections/SocialProof";
import SupportedCountries from "./components/sections/SupportedCountries";

export default function Home() {
  return (
    <div>
      <Hero />
      <SupportedCountries />
      <AboutUs />
      <App />
      <SocialProof />
    </div>
  );
}
