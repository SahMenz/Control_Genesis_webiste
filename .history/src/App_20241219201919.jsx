import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home/home";
import AboutUs from "./components/AboutUs/aboutUs";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Home />
      <AboutUs />
    </>
  );
}

export default App;
