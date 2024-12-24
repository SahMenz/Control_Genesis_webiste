function CoFounder() {
  return (
    <div>
        {/* <div></div> */}
        <div className="txt-ff d-flex">
            <div style={{maxWidth:"815px"}}>
                <div className="fs-56 fw-500">Stay connected with expert insights and updates.</div>
                <div className="fs-23 fw-400">Stay connected with expert insights and updates, receiving valuable knowledge, trends, and actionable strategies to keep you ahead in your industry.</div>
            </div>
            <div style={{padding:"10px 0px 10px 20px", maxWidth:"444px", borderRadius:"30px"}} className="fs-19 fw-400 bg-ff ">
                <input type="email" placeholder="Your email address" style={{border:"none", marginRight:"8px" }}/>
                <button style={{backgroundColor:"#303030", color:"#fff", borderRadius:"20px", padding:"14px 30px"}}>Join now</button>
            </div>
        </div>
    </div>
  )
}

export default CoFounder