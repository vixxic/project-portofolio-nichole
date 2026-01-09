import "../styles/skills.css";

function skills() {
  return (
    <>
      <div className="bg">
        <div className="skills-container">
          <h2
            style={{
              color: "white",
              fontSize: "2.5em",
              textAlign: "center",
              marginBottom: "0",
            }}
          >
            Skills
          </h2>
          <p
            style={{
              color: "rgb(186, 186, 186)",
              textAlign: "center",
              fontSize: "1.2em",
              marginTop: "0",
            }}
          >
            I’m still growing my abilities, but here are the things <br /> I
            enjoy and keep improving
          </p>

          <div className="skills">
            <img src="/skilssPresentage.png" className="skills-image"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default skills;
