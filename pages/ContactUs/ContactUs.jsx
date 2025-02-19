import HeroSection from "../../components/HeroSection";
import ContactForm from "./ContactForm";
import CTA from "./CTA";

const ContactUs = () => {
  return (
    <div id="page" className="main">
      <HeroSection
        imageUrl="/src/assets/images/banner/inner-header/page-header-01.jpg"
        title="Contact Us"
        description="Let success motivate you."
      />
      <CTA />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
