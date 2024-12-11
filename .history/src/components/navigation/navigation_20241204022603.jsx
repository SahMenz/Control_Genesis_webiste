import CustomSvg from "../customSvg/CustomSvg";

function Navigation() {
  return (
    <div
      className="fw-500 d-flex justify-content-between align-items-center"
      style={{ backgroundColor:"rgba(217, 217, 217, 0.35)",borderRadius: "40px", padding:"15px 30px", }}
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
      <div style={{width:"32px", display:"flex", flexDirection:"column",}}>
        <div style={{height:"3px",width:"16px", backgroundColor:"#ffffff"}}></div>
        <div style={{margin:"8px 0px",height:"3px",width:"32px", backgroundColor:"#ffffff"}}></div>
        <div style={{height:"3px",width:"16px" ,alignSelf:"end", backgroundColor:"#ffffff"}}></div>
      </div>
    </div>
  );
}

export default Navigation;
