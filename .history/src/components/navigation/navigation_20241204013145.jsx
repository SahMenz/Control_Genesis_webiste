import CustomSvg from "../customSvg/CustomSvg";

function Navigation() {
  return (
    <div
      className="bg-d9 opa-20 d-flex justify-content-between align-items-center"
      style={{ borderRadius: "40px", padding:"15px 30px" }}
    >
      <div>
        <CustomSvg name="CG_Icon"/>
      </div>
      <div>
        <div className="me-5">
          <span>Home</span>
          <span className="mx-3">About Us</span>
          <span>Services</span>
        </div>
        <button>Contact us</button>
      </div>
    </div>
  );
}

export default Navigation;
