import CustomSvg from "../customSvg/CustomSvg";

function Navigation() {
  return (
    <div className="bg-d9" style={{borderRadius:"40px",}}>
      <div>
        <CustomSvg name="CG_Icon" />
      </div>
      <div>
        <div>
          <div>Home</div>
          <div>About Us</div>
          <div>Services</div>
        </div>
        <button></button>
      </div>
    </div>
  );
}

export default Navigation;
