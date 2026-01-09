import "../styles/Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">PORTFOLIO</div>

          <ul className="nav-links">
            <li>
              <a
                href="#home"
                onClick={() => {
                  document
                    .querySelector(".home")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => {
                  document
                    .querySelector(".bg")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={() => {
                  document
                    .querySelector(".project-container")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projects
              </a>
            </li>
          </ul>

          <div className="btn-container">
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

            <button
              className="btn-connect"
              onClick={() => {
                document
                  .querySelector(".contact-container")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Connect
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
