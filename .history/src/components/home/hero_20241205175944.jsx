function Hero() {
  return (
    <div className="mt-5">
      <div className="txt-ff fw-500" style={{ maxWidth: "534px" }}>
        <div className="fs-19">
          <span
            style={{
              width: "30px",
              height: "2px",
              backgroundColor: "white",
              borderRadius: "3px",
            }}
          ></span>
          Welcome To Control Genesis
        </div>
        <div className="">
          <span className="txt-ffd">Empowering</span> Businesses with
          Purpose-Driven <span className="txt-ffd">Solutions</span>.
        </div>
        <div>
          We align innovative design, insightful analysis, and strategic
          development to deliver solutions that drive meaningful growth,
          sustainable success, and long-term value for your business.
        </div>
        <div>
          <button>Get Started</button>
          <button>Learn More</button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Hero;
