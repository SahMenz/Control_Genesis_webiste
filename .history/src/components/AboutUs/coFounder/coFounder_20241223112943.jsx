import './coFounder.css'

function CoFounder() {
  return (
    <div className="mt-5">
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
            <div className="fs-19">The Team</div>
          </div>
          <div className="d-flex gap-4 flex-column flex-sm-row justify-content-between">
            <div className="fs-45">
            Meet Our <br /> Exceptional Team
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
                Get to know the experts behind our success, innovation, and commitment to excellence.
                </div>
              </div>
            </div>
          </div>
        </div>
            {/* <div></div> */}
        </div>
        <div className="txt-ff d-flex flex-column stayConnectedBackground p-4 p-xl-5">
            <div style={{maxWidth:"815px"}}>
                <div className="fs-56 fw-500">Stay connected with expert insights and updates.</div>
                <div className="fs-23 fw-400">Stay connected with expert insights and updates, receiving valuable knowledge, trends, and actionable strategies to keep you ahead in your industry.</div>
            </div>
            <div style={{maxHeight:"128px", height:"28vw"}}></div>
            <div style={{padding:"10px 10px 10px 20px", maxWidth:"444px", borderRadius:"30px"}} className="fs-19 fw-400 bg-ff align-self-end">
                <input type="email" placeholder="Your email address" style={{border:"none", marginRight:"8px", maxWidth:"220px", width:"30vw"}}/>
                <button style={{backgroundColor:"#303030", color:"#fff", borderRadius:"20px", padding:"14px 30px"}}>Join now</button>
            </div>
        </div>
    </div>
  )
}

export default CoFounder