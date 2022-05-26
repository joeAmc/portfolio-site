import React from "react";
import "./projects.css";
import IMG1 from "../../assets/New Project.png";
import IMG3 from "../../assets/movie list.png";
import IMG4 from "../../assets/paw.png";
import { SiJavascript } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiRuby } from "react-icons/si";
import { SiRubyonrails } from "react-icons/si";

function Projects() {
  return (
    <section id="projects">
      {/* <h2>Projects</h2> */}
      <div className="container proj-container">
        <article className="proj">
          <div className="proj-image">
            <div className="top">
              <img
                src={IMG1}
                alt=""
                // style="height: 72%; left:-3rem; top: 3,5rem"
              />
            </div>
          </div>
          <div className="proj-text">
            <div className="textitems">
              <div className="title">
                <h1>01</h1>
                <h2>Friendy</h2>
              </div>
              <p>
                Contactless payments and assistance for the homeless. Friendy
                enables fast, cashless donations to those in need, via your
                phone. The final project in my bootcamp I was 1 of a team of 4,
                focusing on the frontend, leading the design/UI.
              </p>
              <div className="stack">
                <SiJavascript />
                <ImHtmlFive />
                <SiCss3 />
                <FaFigma />
                <SiRuby />
                <div>
                  <SiRubyonrails className="rails" />
                </div>
              </div>

              <div className="buttons">
                <a href="https://github.com/CBelloxxi/Friendy" className="btn">
                  GitHub
                </a>
                <a
                  href="http://www.friendyapp.co.uk/"
                  className="btn btn-primary"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
      <div className="container proj-container">
        <article className="proj">
          <div className="proj-image">
            <img src={IMG4} alt="" />
            {/* <img src={IMG2} alt="" /> */}
          </div>
          <div className="proj-text">
            <div className="textitems">
              <div className="title">
                <h1>02</h1>
                <h2>Paw Pals</h2>
              </div>
              <p>
                Dog renting app for those who love dogs but aren't able to have
                one and owners who need a dog sitter. Built on the Rails
                framework, I worked within a team of 4, primarily on the
                frontend, with some interaction with the database and
                controllers.
              </p>
              <div className="stack">
                <SiJavascript />
                <ImHtmlFive />
                <SiCss3 />
                <FaFigma />
                <SiRuby />
                <div>
                  <SiRubyonrails className="rails" />
                </div>
              </div>

              <div className="buttons">
                <a href="https://github.com/joeAmc/k9_hire" className="btn">
                  GitHub
                </a>
                <a
                  href="http://www.friendyapp.co.uk/"
                  className="btn btn-primary"
                >
                  Demo
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Projects;
