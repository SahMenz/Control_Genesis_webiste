import Footer from "../footer/footer"
import DigitalSolution from "../home/digitalSolution/digitalSolution"
import Faq from "../home/faq/faq"
import Navigation from "../navigation/navigation"
import ServicesHero from "./servicesHero/servicesHero"

function Services() {
  return (
    <>
    <div className="bg-02 spacing-50">
      <Navigation />
      <ServicesHero />
      <DigitalSolution />
      <Faq />
    </div>
    <div className="bg-02">
      <Footer />
    </div>
  </>
  )
}

export default Services