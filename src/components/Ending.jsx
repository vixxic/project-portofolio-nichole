import "../styles/Ending.css";

function Ending() {
  return (
    <>
      <div className="ending-bg">
        <div className="block">
          <img src="/emoji.png" className="emoji"></img>
        </div>

        <h1
          className="nav-logo"
          style={{
            fontSize: "2.5em",
            position: "absolute",
            left: "9%",
            bottom: "0.5em",
          }}
        >
          PORTFOLIO
        </h1>

        <div
          className="btnp"
          style={{
            position: "relative",
            display: "flex",
            left: "35%",
            flexDirection: "column",
            justifyContent: "end",
            paddingBottom: "1em",
          }}
        >
          <div className="btn-ending">
            <button
              className="btn"
              onClick={() => {
                window.open("https://www.tiktok.com/@cquita.n", "_blank");
              }}
            >
              <img src="/tiktokIcon.png" className="icon"></img>
            </button>
            <button
              className="btn"
              onClick={() => {
                window.open("https://www.instagram.com/nicc.ncc/");
              }}
            >
              <img src="/instagramIcon.png" className="icon"></img>
            </button>
            <button
              className="btn"
              onClick={() => {
                window.open("https://www.youtube.com/@miu8744", "_blank");
              }}
            >
              <img src="/youtubeIcon.png" className="icon"></img>
            </button>
          </div>
          <p>By Nichole 2025</p>
        </div>
      </div>
    </>
  );
}

export default Ending;
