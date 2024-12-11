function Testimonials() {
  return (
    <div style={{ marginTop: "87px", color:"white" }}>
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
          <div className="fs-19">Clients Testimonials</div>
        </div>
        <div className="d-flex gap-4 flex-column flex-sm-row justify-content-between">
          <div className="fs-45">
            Trusted By <br />
            Those We Serve.
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
                Discover how our clients have achieved success with us and why
                they trust our expertise.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div style={{maxWidth:"392px", borderRadius:"15px", backgroundColor:"#222222", padding:"30px"}}>
            <div></div>
            <div></div>
        </div>
        {/* <div></div> */}
        {/* <div></div> */}
      </div>
    </div>
  );
}

export default Testimonials;
