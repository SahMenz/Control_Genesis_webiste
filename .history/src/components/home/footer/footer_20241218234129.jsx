import "./footer.css";
import greatnessFromSmallBeginnings from "../../../assets/images/greatnessFromSmallBeginnings.png";
import CustomSvg from "../../customSvg/CustomSvg";
function Footer() {
  return (
    <div className="footerContainer spacing-50">
      <div className="d-flex justify-content-between align-items-center pb-xl-5 pb-3">
        <div className="fs-72 txt-ff fs-700">
          <span className="txt-ffd">Connect</span> With <br />
          Control Genesis <span className="txt-ffd">Today!</span>{" "}
        </div>
        <div>
          <img src={greatnessFromSmallBeginnings} />
        </div>
      </div>
        <div className="d-flex justify-content-between align-items-center mt-4">
            <div className="fs-19 fw-600 txt-ff">
            Address <br /> <br />
            No 3 Mbo Otu Street, 8 Miles, Odukpani LGA, Cross River State <br />{" "}
            Nigeria.
            </div>
            <div>
                <div className="txt-ffd fs-23 fw-600">
                    Subscribe to Our Newsletter
                </div>
                <div className="d-flex align-items-center ">
                    {/* <div style={{padding:"15px 20px", border:"1px solid #FFD800", borderRadius:"50px", maxWidth:"418px", width:"30vw", marginRight:"20px"}}> */}
                        <input placeholder="Email address" style={{padding:"15px 20px", backgroundColor:"transparent", border:"1px solid #FFD800", borderRadius:"50px", maxWidth:"418px", width:"30vw", color:"#FFD800"}}/>
                    {/* </div> */}
                    <div>
                        <CustomSvg name="send" />
                    </div>
                </div>
            </div>
        </div>
      {/* <div></div> */}
    </div>
  );
}

export default Footer;
