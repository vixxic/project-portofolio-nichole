import { useState } from "react";
import "../styles/Project.css";

function Project() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <div className="project-container">
        <div className="text">
          <h1 className="tittle">Projects</h1>
          <p className="my-project">
            Here are some of the projects I’ve created while learning how to
            build websites. They may be simple, but every project teaches me
            something new — from layout, design, logic, to making things
            interactive. I’m excited to keep exploring and adding more cool
            things here.
          </p>
        </div>

        <div className="btn-project-container">
          <button
            onClick={() => setActiveTab(1)}
            style={{
              borderRadius: "30px 0 0 30px",
            }}
          >
            Tab 1
          </button>

          <button onClick={() => setActiveTab(2)}>Tab 2</button>

          <button
            onClick={() => setActiveTab(3)}
            style={{
              borderRadius: "0 30px 30px 0",
            }}
          >
            Tab 3
          </button>
        </div>

        {activeTab === 1 && (
          <div className="img-project-container">
            <div className="img1 img">
              <img className="p" src="/project/projectimg1.jpeg"></img>
            </div>
            <div className="img2 img">
              <img className="p" src="/project/projectimg2.jpeg"></img>
            </div>
            <div className="img3 img">
              <img className="p" src="/project/projectimg3.jpeg"></img>
            </div>
            <div className="img4 img">
              <img className="p" src="/project/projectimg4.jpeg"></img>
            </div>
            <div className="img5 img">
              <img className="p" src="/project/projectimg5.jpeg"></img>
            </div>
            <div className="img6 img">
              <img className="p" src="/project/projectimg6.jpeg"></img>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="img-project-container">
            <div className="img1 img">
              <img className="p" src="/project/projectimg7.jpeg"></img>
            </div>
            <div className="img2 img"></div>
            <div className="img3 img"></div>
            <div className="img4 img"></div>
            <div className="img5 img"></div>
            <div className="img6 img"></div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="tab-text">
            <p style={{ color: "white", marginTop: "2rem" }}>
              This section is still under development. More content will be
              added soon as I continue working on new ideas and features.
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Project;
