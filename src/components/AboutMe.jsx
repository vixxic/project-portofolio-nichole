import "../styles/AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="bg">
        <div className="aboutme-container">
          <h2
            style={{
              color: "white",
              fontSize: "2.5em",
              textAlign: "center",
              marginBottom: "0",
            }}
          >
            About Me
          </h2>
          <div className="profil-text-flex">
            {/* image */}
            <img className="aboutme-img" src="/profile.jpg"></img>
            {/* text */}
            <div>
              <div
                style={{
                  color: "rgb(186, 186, 186)",
                  textAlign: "left",
                  fontSize: "1.2em",
                  marginTop: "0",
                }}
              >
                <section>
                  <p>
                    I’m a student who is currently learning web development and
                    enjoys creating simple, interactive websites.
                  </p>
                  <p>
                    I’m mainly interested in Frontend Web Development and
                    building user-friendly interfaces using React.
                  </p>
                  <p>
                    At the moment, I’m still in the learning phase and improving
                    my skills in HTML, CSS, JavaScript, and React through small
                    projects.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
