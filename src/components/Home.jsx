import "../styles/Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <div className="text-content">
          <div className="welcome-card">
            <p>Welcome to my portfolio</p>
          </div>
          <h1 className="title">
            Hi! I'm Nichole
            <br />
            Chiquita
          </h1>
          <p className="description">
            Aspiring Frontend Web Developer
            <br />
            I’m learning web development using HTML, CSS, JavaScript, React and
            building projects as I grow.
          </p>
          <h3 style={{ color: "white", fontWeight: 500 }}>
            Let's Connect -&gt;{" "}
          </h3>
        </div>

        <div className="astronot-container">
          <img className="img-astronot" src="/astronot-2.svg"></img>
        </div>
      </div>
    </>
  );
}

export default Home;
