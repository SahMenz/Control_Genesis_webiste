import ourStory from "../../../assets/images/ourStory.png";

function AboutUsHero() {
  return (
    <>
      <div className="txt-ff my-5">
        <div className="text-center">
          <div className="fs-83 fw-600">
            Trusted For Innovation, <br />
            Driven By Results.
          </div>
          <div className="fs-19 fw-400 mt-2">
            Delivering reliable solutions that foster innovation, drive
            measurable success, <br /> and ensure sustainable growth.
          </div>
        </div>
        <div className="mt-5 d-flex flex-column">
          <div>
            IMAGE IS SUPPOSED TO BE HEREIMAGE IS SUPPOSED TO BE HEREIMAGE IS
            SUPPOSED TO BE HEREIMAGE IS SUPPOSED TO BE HEREIMAGE IS SUPPOSED TO
            BE HERE
          </div>
          <div
            className="fs-19 fw-400 align-self-end mt-4"
            style={{ maxWidth: "605px" }}
          >
            At Control Genesis, we deliver excellence through strategic design,
            insightful analysis, and advanced development—transforming
            challenges into opportunities and ideas into impactful results.
          </div>
        </div>
      </div>
      <div className="txt-ff d-flex flex-column">
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
            <div className="fs-19">Our Story</div>
          </div>
          <div className="d-flex gap-4 flex-column flex-sm-row justify-content-between">
            <div className="fs-45">
              Passion. <br />
              Progress. Purpose.
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
                  From vision to reality, our journey is defined by Passion,
                  Progress, and Purpose.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={ourStory}
          style={{ width: "87vw", marginTop: "20px", alignSelf: "center" }}
        />
        <div
          className="fs-19 fw-400 align-self-end mt-4"
          style={{ maxWidth: "605px" }}
        >
          Since inception, our primary driving force has been to empower
          startups and entrepreneurs to define their genesis. Our essence lies
          in offering solutions that support emerging businesses and guarantee
          their success.
        </div>
      </div>
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
            <div className="fs-19">Our Values</div>
          </div>
          <div className="d-flex gap-4 flex-column flex-sm-row justify-content-between">
            <div className="fs-45">
              Principles That <br /> Define Our Journey.
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
                  From vision to reality, our journey is defined by Passion,
                  Progress, and Purpose.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3 flex-wrap">
          <div style={{padding:"30px", borderRadius:"8px", maxWidth:"398px", backgroundColor:"#303030"}}>
            <div className="fs-19 fw-400">Delivering quality and precision in every endeavor, ensuring that every detail meets the highest standards of excellence.</div>
            <div style={{width:"140px", height:"1px", backgroundColor:"#fff"}}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsHero;
