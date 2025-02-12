import { useEffect, useState } from "react";
import CustomSvg from "../customSvg/CustomSvg";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/aboutUs",
    title: "AboutUs",
  },
  {
    path: "/services",
    title: "Services",
  },
  {
    path: "/contactUs",
    title: "ContactUs",
  },
];

function Navigation(props) {

  const navigate = useNavigate();
  const navigateTo = path => navigate(path);
  const aboutUs = () => navigateTo('/aboutUs');

  const [activeNav, setActiveNav] = useState('/');


  const pathname = useLocation().pathname


  useEffect(() => {
    if(pathname.toLowerCase().includes('services')){
      setActiveNav('services')
    
    } else if(pathname.toLowerCase().includes('aboutUs')){
      setActiveNav('aboutUs')
      
    } else if (pathname.toLowerCase().includes('contactUs')) {
      setActiveNav('contactUs')
    } else{
      setActiveNav('home')
    }
  }, [pathname])

  const displayNavLinks = navLinks.map((navLink, i) => {
    const { title, path } = navLink

    const isActive = activeNav.toLowerCase() == title.toLowerCase()

    return (
      <NavLink key={i}
        to={path} 
        style={{
          color : isActive ? "#EB1C25" : undefined
        }} 
        className='hovering txt-16 lh-19 fw-600 text-decoration-none txt-f3' 
        end 
      >
        {title}
      </NavLink>
    )
  })

  return (
    <div
      className="fw-500 d-flex justify-content-between align-items-center"
      style={{
        backgroundColor: "rgba(217, 217, 217, 0.35)",
        borderRadius: "40px",
        padding: "15px 30px",
      }}
    >
      <div>
        <CustomSvg name="CG_Icon" />
        <span className="ms-2 txt-ff ff-gro fw-700">CONTROL GENESIS</span>
      </div>
      <div className="d-none d-lg-flex align-items-center justify-content-between bg-trans ">
        <div className="me-5 txt-ff">
        { displayNavLinks }
          {/* <span>Home</span>
          <span className="mx-3">About Us</span>
          <span>Services</span> */}
        </div>
        <button
          style={{
            backgroundColor: "#FFD800",
            borderRadius: "40px",
            padding: "13px 18px",
          }}
        >
          Contact us
        </button>
      </div>
      <div
        className="d-flex d-lg-none "
        style={{ width: "38px", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{ height: "3px", width: "18px", backgroundColor: "#ffffff" }}
        ></div>
        <div
          style={{
            margin: "8px 0px",
            height: "3px",
            width: "38px",
            backgroundColor: "#ffffff",
          }}
        ></div>
        <div
          style={{
            height: "3px",
            width: "18px",
            alignSelf: "end",
            backgroundColor: "#ffffff",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Navigation;
