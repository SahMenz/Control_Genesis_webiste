import Navigation from "../navigation/navigation";
import DigitalSolution from "./digitalSolution/digitalSolution";
import Hero from "./hero/hero";

function Home() {
  return (
    <div className="bg-02 spacing-50">
      <Navigation />
      <Hero />
      <DigitalSolution />
    </div>
  );
}

export default Home;
