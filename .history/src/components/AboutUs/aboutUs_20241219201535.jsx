import Footer from "../footer/footer";
import Testimonials from "../home/testimonials";
import Navigation from "../navigation/navigation";

function AboutUs() {
  return (
    <>
      <div className="bg-02 spacing-50">
        <Navigation />
        <Testimonials />
      </div>
      <div className="bg-02">
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
