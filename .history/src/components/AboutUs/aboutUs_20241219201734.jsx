import Footer from "../footer/footer";
import Testimonials from "../home/testimonials";
import Navigation from "../navigation/navigation";
import AboutUsHero from "./aboutUsHero/aboutUsHero";

function AboutUs() {
  return (
    <>
      <div className="bg-02 spacing-50">
        <Navigation />
        <AboutUsHero />
        <Testimonials />
      </div>
      <div className="bg-02">
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
