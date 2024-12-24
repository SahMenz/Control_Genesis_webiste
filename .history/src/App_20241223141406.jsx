import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import AboutUs from "./components/AboutUs/aboutUs";
import { HashRouter, Route, Routes } from "react-router-dom";
import Services from "./components/services/services";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
