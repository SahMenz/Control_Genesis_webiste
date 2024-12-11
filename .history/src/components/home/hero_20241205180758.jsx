function Hero() {
  return (
    <div className="mt-5">
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
        <div className="fs-48">
          <span className="txt-ffd">Empowering</span> Businesses with
          Purpose-Driven <span className="txt-ffd">Solutions</span>.
        </div>
        <div className="fs-19">
          We align innovative design, insightful analysis, and strategic
          development to deliver solutions that drive meaningful growth,
          sustainable success, and long-term value for your business.
        </div>
        <div>
          <button style={{backgroundColor:"#FFD800", borderRadius:"29.5px",color:"black", marginRight:"40px",padding:"17px 56px"}}>Get Started</button>
          <button style={{backgroundColor:"#020202", borderRadius:"29.5px",color:"#FFD800" ,padding:"17px 56px"}}>Learn More</button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default Hero;
