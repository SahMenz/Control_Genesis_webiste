import CustomSvg from "../../customSvg/CustomSvg";

function Faq() {
  return (
    <div className="mt-5 txt-ff">
        <div style={{ maxWidth: "454px", margin:"auto", textAlign:"center" }}>
            <div className="d-flex align-items-center justify-content-center">
                <div
                    style={{
                    width: "30px",
                    height: "2px",
                    backgroundColor: "white",
                    borderRadius: "3px",
                    marginRight: "15px",
                    }}
                ></div>
                <div className="fs-19 fw-500">FAQs</div>
            </div>
            <div className="fs-45 fw-600">
                Have Inquiries? Find Answers Here.
            </div>
        </div>
        <div>
            <div>
                <div className="d-flex align-items-center justify-content-between bg-22" style={{padding:"30px", borderRadius:"10px"}}>
                    <div>What services do you offer?</div>
                    <div><CustomSvg name="minus"/></div>
                </div>
                {/* <div></div> */}
            </div>
        </div>
    </div>
  );
}

export default Faq;
