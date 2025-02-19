import History from "./History";
import ClientLogo from "../../components/ClientLogo";
import AboutInfo from "./AboutInfo";
import HeroSection from "../../components/HeroSection";
// import OurTeams from "../teams/OurTeams";


function Aboutus() {
  return (
    <>
      <div className="site-content">
        <div className="container-fluid">
          <div className="item-efftect">
            <div className="efftect overflow-hidden" />
            <div className="efftect overflow-hidden" />
            <div className="efftect overflow-hidden" />
            <div className="efftect overflow-hidden" />
            <div className="efftect overflow-hidden" />
          </div>
        </div>
        <HeroSection
        imageUrl="/src/assets/au.jpg"
        title="About CloudNexus"
        description="Our Expertise. Know more about what we do."
      />
        <div className="content-wrapper">
          <AboutInfo />
          <ClientLogo />
          <History />
          {/* <OurTeams /> */}

        </div>
      </div>
    </>
  );
}

export default Aboutus;
