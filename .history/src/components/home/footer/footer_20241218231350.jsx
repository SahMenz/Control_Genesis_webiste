import "./footer.css";
import greatnessFromSmallBeginnings from '../../../assets/images/greatnessFromSmallBeginnings.png'
function Footer() {
  return (
    <div className="footerContainer">
      <div className="d-flex justify-content-between align-items-center mb-xl-5 mb-3">
        <div className="fs-72 txt-ff fs-700">
          <span className="txt-ffd">Connect</span> With <br />
          Control Genesis <span className="txt-ffd">Today!</span>{" "}
        </div>
        <div><img src={greatnessFromSmallBeginnings}/></div>
      </div>
      {/* <div></div>
        <div></div> */}
    </div>
  );
}

export default Footer;
