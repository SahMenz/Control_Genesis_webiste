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
            <img src={greatnessFromSmallBeginnings} style={{width:"20vw", maxWidth:"152px"}}/>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-4 gap-5 flex-wrap">
            <div className="fs-19 fw-600 txt-ff">
            Address <br /> <br />
            No 3 Mbo Otu Street, 8 Miles, Odukpani LGA, Cross River State <br />{" "}
            Nigeria.
            </div>
            <div>
                <div className="txt-ffd fs-23 fw-600">
                    Subscribe to Our Newsletter
                </div>
                <div className="d-flex align-items-center">
                    <input placeholder="Email address" style={{padding:"15px 20px", backgroundColor:"transparent", border:"1px solid #FFD800", borderRadius:"50px", minWidth:"250px",maxWidth:"418px", width:"30vw", marginRight:"20px",color:"#FFD800"}}/>
                    <div>
                        <CustomSvg name="send" />
                    </div>
                </div>
            </div>
        </div>
        <div className="txt-ff mt-5 d-flex justify-content-between align-items-center gap-4 flex-wrap">
            <div className="fs-19">
                <p className="fw-600">CONTACT US</p>
                <p className=" fw-500">contact@controlgenesis.com  /  0701 091 5889  /  0903 674 7634</p>
            </div>
            <div className="fs-19">
                <p className="fw-600">QUICK LINKS</p>
                <p className=" fw-500">Home&nbsp; /  About us  / Services</p>
            </div>
        </div>
        <div className="txt-ff mt-5 d-flex justify-content-between align-items-center gap-4 flex-wrap">
            <div className="fs-19">
                <p className="fw-600">FOLLOW US</p>
                <p className=" fw-500"><CustomSvg name="x" /> <CustomSvg name="instagram" /> <CustomSvg name="linkedIn" /> <CustomSvg name="facebook" /></p>
            </div>
            <div className="fs-19">
                <p className="fw-600">RC NUMBERS</p>
                <p className=" fw-500">Control Genesis LLC- 8069438  </p>
            </div>
        </div>
    </div>
  );
}

export default Footer;
