import CustomSvg from "../customSvg/CustomSvg";

function Navigation() {
  return (
    <div
      className="fw-500 bg-d9 d-flex justify-content-between align-items-center"
      style={{ opacity:"30%",borderRadius: "40px", padding:"15px 30px", }}
    >
      <div>
        <CustomSvg name="CG_Icon"/>
      </div>
      <div className="d-flex align-items-center justify-content-between bg-trans ">
        <div className="me-5 txt-ff">
          <span>Home</span>
          <span className="mx-3">About Us</span>
          <span>Services</span>
        </div>
        <button style={{backgroundColor:"#FFD800", borderRadius:"40px", padding:"13px 18px"}}>Contact us</button>
      </div>
    </div>
  );
}

export default Navigation;
