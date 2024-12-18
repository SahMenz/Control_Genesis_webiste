import { useState } from "react";
import CustomSvg from "../../customSvg/CustomSvg";
import './faq.css'

function Faq() {
    
    const [open, setOpen] = useState(false);

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
            <div className="fs-45 fw-600 mb-5">
                Have Inquiries? Find Answers Here.
            </div>
        </div>
        <div>
            <div className="collapseMargin bg-22 " onClick={(setOpen => !(setOpen))} style={{cursor:"pointer",padding:"30px", borderRadius:"10px"}}>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="fs-23 fw-400">What services do you offer?</div>
                    <div><CustomSvg name="minus"/></div>
                </div>
                {open && 
                    <div className="mt-4 fs-19 fw-400 txt-f5">
                        We specialize in design, development, and strategic solutions to help businesses grow and succeed. Our services include web development, mobile app development, 
                        UX/UI design, business consulting, and more. We tailor our offerings to meet the unique needs of each client, 
                        ensuring impactful, high-quality results.
                    </div>
                }
            </div>
        </div>
    </div>
  );
}

export default Faq;
