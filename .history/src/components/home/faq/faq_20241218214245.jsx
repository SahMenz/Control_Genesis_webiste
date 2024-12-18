import CustomSvg from "../../customSvg/CustomSvg";

function Faq() {
  return (
    <div className="mt-5">
        <div className="txt-ff text-align-center" style={{ maxWidth: "454px", margin:"auto", textAlign:"center" }}>
            <div className="d-flex align-items-center" style={{textAlign:"center" }}>
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
                <div>
                    <div></div>
                    <div><CustomSvg name="minus"/></div>
                </div>
                {/* <div></div> */}
            </div>
        </div>
    </div>
  );
}

export default Faq;
