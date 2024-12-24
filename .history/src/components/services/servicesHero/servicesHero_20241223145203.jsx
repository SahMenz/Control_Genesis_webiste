function ServicesHero() {
  return (
    <div style={{ color: "#fff" }} className="d-flex gap-4 flex-wrap align-items-center justify-content-center justify-content-lg-between">
      <div style={{ margin: "30px 0px 60px 0px", maxWidth:"618px" }}>
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
      <div className="fs-13 txt-00 fw-500 d-flex flex-wrap gap-3 align-items-center justify-content-center" style={{maxWidth:"590px" }}>
        <div style={{backgroundColor:"#FFD800", padding:"14px 39px", borderRadius:"23px", width:"fit-content"}}>market research & analysis</div>
        <div style={{backgroundColor:"#FFF", padding:"14px 39px", borderRadius:"23px", width:"fit-content"}}>Mobile app Development</div>
        <div style={{backgroundColor:"#FFF", padding:"14px 39px", borderRadius:"23px", width:"fit-content"}}>Visual design</div>
        <div style={{backgroundColor:"#FFD800", padding:"14px 39px", borderRadius:"23px", width:"fit-content"}}>Brand identity design </div>
        <div style={{backgroundColor:"#FFD800", padding:"14px 39px", borderRadius:"23px", width:"fit-content"}}>Brand positioning</div>
        <div style={{backgroundColor:"#FFF", padding:"14px 39px", borderRadius:"23px", width:"fit-content"}}>ui/ux design</div>
        <div style={{backgroundColor:"#FFD800", padding:"14px 39px", borderRadius:"23px", width:"fit-content"}}>cx management</div>
        <div style={{backgroundColor:"#FFF", padding:"14px 39px", borderRadius:"23px", width:"fit-content"}}>Website Development</div>
      </div>
    </div>
  );
}

export default ServicesHero;
