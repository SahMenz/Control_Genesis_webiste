import Footer from "../footer/footer"
import DigitalSolution from "../home/digitalSolution/digitalSolution"
import Navigation from "../navigation/navigation"

function Services() {
  return (
    <>
    <div className="bg-02 spacing-50">
      <Navigation />
      <DigitalSolution />
    </div>
    <div className="bg-02">
      <Footer />
    </div>
  </>
  )
}

export default Services