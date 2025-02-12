function ServicesHero() {
  return (
    <div style={{ color: "#fff" }} className="d-flex">
      <div style={{ margin: "30px 0px 60px 0px" }}>
        <div className="fs-48 fw-500">
          Empowering Your Vision Through Strategic Solutions.
        </div>
        <div className="my-4 fs-19 fw-500">
          Delivering tailored services in design, deduction, and development to
          drive your business forward, enhance efficiency, and foster
          sustainable growth.
        </div>
        <button
          style={{
            borderRadius: "30px",
            backgroundColor: "#FFD800",
            color: "#000",
            padding: "17px 50px",
          }}
        >
          Get Started
        </button>
      </div>
      <div className="fs-13 fw-500">
        <div style={{backgroundColor:"#FFD800", color:"#000", padding:"14px 39px", borderRadius:"23px", width:"fit-content"}}>market research & analysis</div>
      </div>
    </div>
  );
}

export default ServicesHero;
