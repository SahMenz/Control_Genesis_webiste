import './drivingSuccess.css'
import drivingSuccess1 from "../../../assets/images/drivingSuccess1.png";
import drivingSuccess2 from "../../../assets/images/drivingSuccess2.png";
import drivingSuccess3 from "../../../assets/images/drivingSuccess3.png";
import greatnessFromSmallBeginnings from "../../../assets/images/greatnessFromSmallBeginnings.png";
import CustomSvg from '../../customSvg/CustomSvg';

function DrivingSuccess() {
  return (
    <div className="mt-5 txt-ff">
      <div>
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
            <div className="fs-19">About Us</div>
          </div>
          <div className="d-flex gap-4 flex-column flex-sm-row justify-content-between">
            <div className="fs-45">
              Driving Success <br /> Through Innovation.
            </div>
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
                  Transforming ideas into impactful solutions that drive growth
                  and success.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-wrap gap-3'>
          <div className="d-flex mt-5">
            <img src={drivingSuccess1} id="drivingSuccess1"/>
            <div className="ms-4">
              <div className="d-flex flex-column">
                <div>
                  <img src={drivingSuccess2} id="drivingSuccess2"/>
                </div>
                <div className="mt-5">
                  <img src={greatnessFromSmallBeginnings} id="greatnessFromSmallBeginnings"/>
                  <img src={drivingSuccess3} id="drivingSuccess3"/>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <CustomSvg name="pesonalized"/>
              <div>
                <h2 className='fs-19'>Personalized approach</h2>
                <p className='fs-13'>A customized approach focused on your unique needs and goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrivingSuccess;
