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
            Hi! I'm Nichole Web
            <br />
            Developer
          </h1>
          <p className="description">
            I'm still learning HTML, CSS, JavaScript, and React. I’ve been
            studying
            <br />
            web development for half a semester, and I’m excited to keep
            growing.
            <br />I want to become a web developer, so this portfolio is my
            place to learn,
            <br />
            explore, and build step by step.
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
