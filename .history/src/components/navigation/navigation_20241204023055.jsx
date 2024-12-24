import CustomSvg from "../customSvg/CustomSvg";

function Navigation() {
  return (
    <div
      className="fw-500 d-flex justify-content-between align-items-center"
      style={{ backgroundColor:"rgba(217, 217, 217, 0.35)",borderRadius: "40px", padding:"15px 30px", }}
    >
      <div>
        <CustomSvg name="CG_Icon"/>
        <span className="ms-3 txt-ff">CONTROL GENESIS</span>
      </div>
      <div  className="d-none d-xl-flex align-items-center justify-content-between bg-trans ">
        <div className="me-5 txt-ff">
          <span>Home</span>
          <span className="mx-3">About Us</span>
          <span>Services</span>
        </div>
        <button style={{backgroundColor:"#FFD800", borderRadius:"40px", padding:"13px 18px"}}>Contact us</button>
      </div>
      <div className="d-none " style={{width:"38px", display:"flex", flexDirection:"column",}}>
        <div style={{height:"3px",width:"18px", backgroundColor:"#ffffff"}}></div>
        <div style={{margin:"8px 0px",height:"3px",width:"38px", backgroundColor:"#ffffff"}}></div>
        <div style={{height:"3px",width:"18px" ,alignSelf:"end", backgroundColor:"#ffffff"}}></div>
      </div>
    </div>
  );
}

export default Navigation;