import HeroSection from "../../components/HeroSection";
import About from "./About";
import JobPosting from "./JobPosting";
import WorkInfo from "./WorkInfo";

const Careers = () => {
  return (
    <div id="page" className="main  ">
      <HeroSection
        imageUrl="src/assets/career.jpg"
        title="Careers"
        description="Give yourself the power of responsibility."
      />
      <About />
      <JobPosting />
      <WorkInfo />
    </div>
  );
};

export default Careers;
