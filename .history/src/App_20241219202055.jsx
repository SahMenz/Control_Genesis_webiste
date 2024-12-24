import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import AboutUs from "./components/AboutUs/aboutUs";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <HashRouter >
      <Home />
      <AboutUs />
    </HashRouter>
    </>
  );
}

export default App;
