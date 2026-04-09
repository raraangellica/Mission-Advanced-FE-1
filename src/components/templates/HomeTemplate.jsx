import { Navbar } from "../molecules/Navbar";
import { ProfileMenu } from "../molecules/ProfileMenu";
import HeroSection from "../molecules/HeroSection";
import ContinueSection, {
  Section2,
  Section3,
  Section4,
} from "../molecules/Sections";
import Footer from "../molecules/Footer";
import { Section5 } from "../organisms/Management.jsx";

const HomeTemplate = () => {
  return (
    <div>
      <header className="flex justify-between items-center h-min-14 h-max-24">
        <Navbar />
        <ProfileMenu />
      </header>

      <HeroSection />

      <ContinueSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};

export default HomeTemplate;
