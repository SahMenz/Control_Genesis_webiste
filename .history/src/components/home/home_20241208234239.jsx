import Navigation from "../navigation/navigation";
import DigitalSolution from "./digitalSolution/digitalSolution";
import DrivingSuccess from "./drivingSuccess/drivingSuccess";
import Hero from "./hero/hero";

function Home() {
  return (
    <div className="bg-02 spacing-50">
      <Navigation />
      <Hero />
      <DigitalSolution />
      <DrivingSuccess />
    </div>
  );
}

export default Home;
