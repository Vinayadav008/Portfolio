import React from "react";
import { div, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiReactNative,
  DiBootstrap,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiMui,
  SiFlutter,
} from "react-icons/si";

function Techstack() {
  return (
    <div
      style={{
        
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div className="tech-icons ">
        <DiHtml5 />
        <span className="tech-icons-name">
          HTML
          <br />
          <i style={{ fontSize: 18 }}>Hyper Text Markup Language</i>
        </span>
      </div>
      <div className="tech-icons ">
        <DiCss3  />
        <span className="tech-icons-name">
          CSS
          <br />
          <i style={{ fontSize: 18 }}>Cascading Style Sheets</i>
        </span>
      </div>
      <div className="tech-icons ">
        <DiJavascript1 />
        <span className="tech-icons-name">
          Java Script
          <br />
          <i style={{ fontSize: 18 }}>JavaScript</i>
        </span>
      </div>
      <div className="tech-icons ">
        <DiReact />
        <span className="tech-icons-name">
          ReactJS
          <br />
          <i style={{ fontSize: 18 }}>Building user interfaces</i>
        </span>
      </div>
     
      <div className="tech-icons ">
        <DiNodejs />
        <span className="tech-icons-name">
          NodeJs
          <br />
          <i style={{ fontSize: 18 }}>open source server environment</i>
        </span>
      </div>

      <div className="tech-icons ">
        <DiMongodb />
        <span className="tech-icons-name">
          MongoDB
          <br />
          <i style={{ fontSize: 18 }}>Mongo DB Databse</i>
        </span>
      </div>
     

      <div className="tech-icons ">
        <SiTailwindcss />
        <span className="tech-icons-name">
          Tailwind CSS <br />
          <i style={{ fontSize: 18 }}>CSS framework</i>
        </span>
      </div>

      <div className="tech-icons ">
        <DiBootstrap />
        <span className="tech-icons-name">
          Bootstrap <br />
          <i style={{ fontSize: 18 }}>CSS framework</i>
        </span>
      </div>
      <div className="tech-icons ">
        <DiReact />
        <span className="tech-icons-name">
          React Native <br />
          <i style={{ fontSize: 18 }}>Building Cross platform Application</i>
        </span>
      </div>
      <div className="tech-icons ">
        <SiFlutter />
        <span className="tech-icons-name">
          Flutter
          <br />
          <i style={{ fontSize: 18 }}>Building Cross platform Application</i>
        </span>
      </div>

      <div className="tech-icons ">
        <SiFirebase />
        <span className="tech-icons-name">
          Firebase
          <br />
          <i style={{ fontSize: 18 }}>Building user interfaces</i>
        </span>
      </div>

      <div className="tech-icons ">
        <SiMui />
        <span className="tech-icons-name">
          Material UI
          <br />
          <i style={{ fontSize: 18 }}>open-source React component library</i>
        </span>
      </div>
    </div>
  );
}

export default Techstack;
