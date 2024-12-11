import elijahMoses from "../../assets/images/elijahMoses.png";
import oliviaChris from "../../assets/images/oliviaChris.png";
import tonyMandi from "../../assets/images/tonyMandi.png";

function Testimonials() {
  return (
    <div style={{ marginTop: "87px", color: "white" }}>
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
      <div className="mt-5 d-flex align-items-center justify-content-center flex-wrap justify-content-xxl-between gap-4">
        <div
          style={{
            maxWidth: "392px",
            borderRadius: "15px",
            backgroundColor: "#222222",
            padding: "30px",
          }}
        >
          <div className="fw-500">
            <img src={elijahMoses} />
            <div className="my-2 fs-19">Elijah Moses</div>
            <div className="fs-16">
              Chief Executive Officer (CEO) - Verion X
            </div>
          </div>
          <div style={{ height: "10vw", maxHeight: "100px" }}></div>
          <div className="fw-500 fs-13">
            Control Genesis transformed our vision into reality with precision
            and creativity. Their team exceeded our expectations by providing
            innovative solutions and exceptional support throughout the entire
            process.
          </div>
        </div>

        <div
          style={{
            maxWidth: "392px",
            borderRadius: "15px",
            backgroundColor: "#222222",
            padding: "30px",
          }}
        >
          <div className="fw-500">
            <img src={oliviaChris} />
            <div className="my-2 fs-19">Olivia Chris</div>
            <div className="fs-16">Project Manager - BrightFuture Labs</div>
          </div>
          <div style={{ height: "10vw", maxHeight: "100px" }}></div>{" "}
          <div className="fw-500 fs-13">
            Their commitment to excellence and attention to detail helped us
            achieve our goals faster and more efficiently. Control Genesis
            provided us with a seamless process, from ideation to execution.
          </div>
        </div>

        <div
          style={{
            maxWidth: "392px",
            borderRadius: "15px",
            backgroundColor: "#222222",
            padding: "30px",
          }}
        >
          <div className="fw-500">
            <img src={tonyMandi} />
            <div className="my-2 fs-19">Tony Mandi</div>
            <div className="fs-16">Head of Product - HabitHack </div>
          </div>
          <div style={{ height: "10vw", maxHeight: "100px" }}></div>{" "}
          <div className="fw-500 fs-13">
            Their professional approach and deep industry knowledge made a real
            difference in our success. We were able to tackle complex challenges
            with their strategic guidance and expertise.{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
