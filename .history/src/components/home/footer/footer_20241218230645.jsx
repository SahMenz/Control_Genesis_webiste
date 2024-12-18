import "./footer.css";
import greatnessFromSmallBeginnings from '../../../assets/images/greatnessFromSmallBeginnings.png'
function Footer() {
  return (
    <div className="footerContainer">
      <div className="d-flex justify-content-between align-items-center">
        <div className="fs-72 fs-700">
          Connect With <br />
          Control Genesis Today!{" "}
        </div>
        <div><img src={greatnessFromSmallBeginnings}/></div>
      </div>
      {/* <div></div>
        <div></div> */}
    </div>
  );
}

export default Footer;
