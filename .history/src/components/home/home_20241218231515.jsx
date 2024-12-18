import Navigation from "../navigation/navigation";
import DigitalSolution from "./digitalSolution/digitalSolution";
import DrivingSuccess from "./drivingSuccess/drivingSuccess";
import Faq from "./faq/faq";
import Footer from "./footer/footer";
import Hero from "./hero/hero";
import Testimonials from "./testimonials";

function Home() {
  return (
    <>
      <div className="bg-02 spacing-50">
        <Navigation />
        <Hero />
        <DigitalSolution />
        <DrivingSuccess />
        <Testimonials />
        <Faq />
      </div>
      <Footer className="bg-02"/>
    </>
  );
}

export default Home;
