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
                phone.
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
            <img src={IMG3} alt="" />
            {/* <img src={IMG2} alt="" /> */}
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
                phone.
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
                <h1>01</h1>
                <h2>Friendy</h2>
              </div>
              <p>
                Contactless payments and assistance for the homeless. Friendy
                enables fast, cashless donations to those in need, via your
                phone.
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
    </section>
  );
}

export default Projects;
