import "./hero.css";

function Hero() {
  return (
    // <div className="mt-5 d-flex flex-wrap gap-3 justify-content-between" id='fish'>
    <div className="mt-5 d-flex gap-5 flex-column flex-xl-row justify-content-between">
      <div className="txt-ff fw-500" style={{ maxWidth: "534px" }}>
        <div className="fs-19 d-flex align-items-center">
          <div
            style={{
              width: "30px",
              height: "2px",
              backgroundColor: "white",
              borderRadius: "3px",
              marginRight: "15px",
            }}
          ></div>
          <div>Welcome To Control Genesis</div>
        </div>
        <div className="fs-48 my-3 my-md-4">
          <span className="txt-ffd">Empowering</span> Businesses with
          Purpose-Driven <span className="txt-ffd">Solutions</span>.
        </div>
        <div className="fs-19 mb-3 mb-md-5">
          We align innovative design, insightful analysis, and strategic
          development to deliver solutions that drive meaningful growth,
          sustainable success, and long-term value for your business.
        </div>
        <div className="d-flex flex-wrap gap-3">
          <button
            className="paddingButton"
            style={{
              backgroundColor: "#FFD800",
              borderRadius: "29.5px",
              color: "black",
              marginRight: "25px",
            }}
          >
            Get Started
          </button>
          <button
            className="paddingButton"
            style={{
              backgroundColor: "#020202",
              borderRadius: "29.5px",
              color: "#FFD800",
              border: "1.5px solid #FFD800",
            }}
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="txt-ff d-flex gap-2">
        <div id="deduce">
          <h2 className="fw-600 fs-23">DEDUCE</h2>
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "white",
              borderRadius: "6px",
              marginBottom: "10px",
            }}
          ></div>
          <p className="fw-400">
            Uncover insights through data-driven analysis and strategic
            thinking.
          </p>
        </div>
        <div id="design">
          <h2 className="fw-600 fs-23">DESIGN</h2>
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "white",
              borderRadius: "6px",
              marginBottom: "10px",
            }}
          ></div>
          <p className="fw-400">
            Crafting innovative, user-centric solutions that inspire and engage.
          </p>
        </div>
        <div id="develop">
          <h2 className="fw-600 fs-23">DEVELOP</h2>
          <div
            style={{
              height: "1px",
              width: "100%",
              backgroundColor: "white",
              borderRadius: "6px",
              marginBottom: "10px",
            }}
          ></div>
          <p className="fw-400">
            Building robust, scalable systems that drive real-world results.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
