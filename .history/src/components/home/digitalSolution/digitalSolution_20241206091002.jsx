import CustomSvg from "../../customSvg/CustomSvg";
import "./digitalSolution.css";

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
            <div>Website Development</div>
            <div>
              <button
                className="fs-16"
                style={{
                  padding: "13px 36px",
                  borderRadius: "27px",
                  color: "#000",
                  backgroundColor: "#FFD800",
                  marginRight: "10px",
                }}
              >
                Learn more
              </button>{" "}
              <div style={{width:"30px"}}>
                <CustomSvg name="expandArrow" />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default DigitalSolution;
