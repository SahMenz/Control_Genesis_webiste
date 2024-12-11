import CustomSvg from "../../customSvg/CustomSvg";
import "./digitalSolution.css";
import webDev from "../../../assets/images/webDev.png"

function DigitalSolution() {
  return (
    <div className="txt-ff">
      <div>
        <div className="d-flex align-items-center">
          <div
            style={{
              width: "30px",
              height: "2px",
              backgroundColor: "white",
              borderRadius: "3px",
              marginRight: "15px",
            }}
          ></div>
          <div className="fs-19">Our Services</div>
        </div>
        <div className="d-flex gap-4 flex-column flex-sm-row justify-content-between">
          <div className="fs-45">Discover Our Digital Solutions</div>
          <div>
            <div className="d-flex align-items-center">
              <div
                style={{
                  height: "30px",
                  width: "2px",
                  backgroundColor: "white",
                  borderRadius: "3px",
                  marginRight: "15px",
                }}
              ></div>
              <div className="fs-16" style={{ maxWidth: "469px" }}>
                Explore tailored digital solutions designed to elevate your
                business and deliver measurable results.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="bg-30 services">
          <div className="fs-32 fw-500 d-flex align-items-center justify-content-between">
            <div>01.</div>
            <div style={{}}>Website Development</div>
            <div className="d-flex align-items-center">
              <button
                className="fs-16"
                style={{
                  padding: "10px 30px",
                  borderRadius: "27px",
                  color: "#000",
                  backgroundColor: "#FFD800",
                  marginRight: "10px",
                }}
              >
                Learn more
              </button>{" "}
              {/* <div style={{width:"10px"}}> */}
              <CustomSvg name="expandArrow" width="50px" />
              {/* </div> */}
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
          <div className="mt-4 mt-xl-5 d-flex align-items-start justify-content-center flex-column">
            <div className="txt-ff fs-16 fw-400 d-flex align-items-center justify-content-start gap-3" style={{maxWidth:"511px"}}>
              <div className="d-flex align-items-center justify-content-center flex-column gap-3">
                <div style={{padding:"18px 22px", borderRadius:"30px", backgroundColor:"#222222", maxWidth:"222px"}}>React.JS Development</div>
                <div style={{padding:"18px 22px", borderRadius:"30px", backgroundColor:"#222222", maxWidth:"222px"}}>Vue.js Development</div>
              </div>
              <div className="d-flex align-items-center justify-content-center flex-column gap-3">
                <div style={{padding:"18px 22px", borderRadius:"30px", backgroundColor:"#222222", maxWidth:"222px"}}>Node.js Development</div>
                <div style={{padding:"18px 22px", borderRadius:"30px", backgroundColor:"#222222", maxWidth:"222px"}}>Laravel Development</div>
              </div>
            </div>
            <div className="fs-16" style={{maxWidth:"471px", marginTop:"32px", marginBottom:"48px"}}>Creating responsive, scalable websites focused on performance and user experience.</div>
            <div><img src={webDev} className="imgSizing"/></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalSolution;
