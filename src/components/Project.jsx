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
              <img
                className="p"
                src="/project/projectimg1.jpeg"
                alt="Project 1"
              />
              <div className="overlay">
                <h3>Emerald Dragon</h3>
                <p>
                  A detailed pencilcolor illustration of an oriental dragon,
                  focusing on intricate scale patterns and fluid movement using
                  a vibrant emerald palette.
                </p>
              </div>
            </div>

            <div className="img2 img">
              <img
                className="p"
                src="/project/projectimg2.jpeg"
                alt="Project 2"
              />
              <div className="overlay">
                <h3>Sunset Reflection</h3>
                <p>
                  An acrylic landscape study capturing the warm glow of a
                  sunset. This piece explores light reflection on water and the
                  use of bold, expressive brushstrokes.
                </p>
              </div>
            </div>

            <div className="img3 img">
              <img
                className="p"
                src="/project/projectimg3.jpeg"
                alt="Project 3"
              />
              <div className="overlay">
                <h3>Mountain Temple</h3>
                <p>
                  A scenic depiction of a traditional temple nestled in the
                  mountains, utilizing high-contrast colors to evoke a sense of
                  serenity and grandeur.
                </p>
              </div>
            </div>

            <div className="img4 img">
              <img
                className="p"
                src="/project/projectimg4.jpeg"
                alt="Project 4"
              />
              <div className="overlay">
                <h3>Ethereal Jellyfish</h3>
                <p>
                  A delicate ink illustration of a jellyfish, using fine lines
                  and dotwork to capture the weightless, translucent movement of
                  marine life.
                </p>
              </div>
            </div>

            <div className="img5 img">
              <img
                className="p"
                src="/project/projectimg5.jpeg"
                alt="Project 5"
              />
              <div className="overlay">
                <h3>Unity in Diversity</h3>
                <p>
                  A symbolic piece representing 'Bhinneka Tunggal Ika,'
                  showcasing religious tolerance and cultural harmony in
                  Indonesia through various houses of worship and traditional
                  icons.
                </p>
              </div>
            </div>

            <div className="img6 img">
              <img
                className="p"
                src="/project/projectimg6.jpeg"
                alt="Project 6"
              />
              <div className="overlay">
                <h3>Cosmic Dreams</h3>
                <p>
                  A whimsical watercolor illustration of a bear gazing at a
                  surreal galaxy, blending elements of childhood wonder with
                  cosmic exploration.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="img-project-container">
            <div className="img1 img">
              <img className="p" src="/project/projectimg7.jpeg"></img>
              <div className="overlay">
                <h3>Cherry Blossom Pagoda</h3>
                <p>
                  A serene landscape painting inspired by East Asian traditional
                  art. It features misty mountains and a classic pagoda, framed
                  by delicate cherry blossoms to create a sense of peace and
                  timeless beauty.
                </p>
              </div>
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
