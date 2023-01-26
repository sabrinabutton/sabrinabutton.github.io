import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import face from "../images/headshot.jpg";
import Project from "./Project";
import { motion } from "framer-motion";
import "../css/master.css";
import ReactTextCollapse from "react-text-collapse/dist/ReactTextCollapse";
import { TEXT_COLLAPSE_OPTIONS } from "../App";
import { project_info, work_info } from "./constants";

export default function Home() {
  var TEXT_C_O = TEXT_COLLAPSE_OPTIONS;
  TEXT_C_O.minHeight = 80;
  TEXT_C_O.maxHeight = 300;
  return (
    <div class="container">
      <div class="blurb">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Sabrina Button
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Mechatronics and Robotics Engineering Student at Queen's University
        </motion.h2>
        <motion.img
          initial={{
            height: "150px",
            width: "150px",
            margin: "7em",
          }}
          animate={{ scale: 2 }}
          transition={{ duration: 3 }}
          whileHover={{ scale: 2.3 }}
          class="myface"
          src={face}
          alt="Logo"
        />
      </div>
      <div class="blurb">
        <ReactTextCollapse options={TEXT_COLLAPSE_OPTIONS}>
          Hi! I'm Sabrina. I'm a Mechatronics and Robotics Engineering student
          with a passion for AI, automation, and sustainable technology. I'm
          experienced in automation, software-hardware testing and integration,
          and control systems through three internships. I aim to create
          impactful projects at the intersection of societal improvement and
          technological advancement.
          <br />
          <br />
          I'm particularly grateful to have spent the past few years developing
          my skills, working on fascinating projects with incredible teams, and
          organizing new ways to help students like myself get involved. I'd be
          more than happy to chat about my experiences or anything else that's
          on your mind. Feel free to reach out!
          <br />
          <br />
          Some projects I've pursued over the past couple of years can be found
          below. Check them out!
        </ReactTextCollapse>
      </div>
      <br />
      <h3>
        Email:{" "}
        <a href="mailto:sabrina.button@queensu.ca">sabrina.button@queensu.ca</a>
      </h3>
      <h3>Phone: +1 (613) 807-9041</h3>
      <br id="projects" />
      <br />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        Project Porfolio
      </motion.h1>
      <div>
        {project_info.map((project) => (
          <div>
            <Project
              size={project.size}
              title={project.title}
              blurb={project.blurb}
              imgs={project.imgs}
              embed={project.embed}
              soft={project.soft_skills}
              tech={project.tech}
              more={project.more}
              refr={project.ref}
            />
            <br />
          </div>
        ))}
      </div>
      <br id="work" />
      <br />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        Work Experience
      </motion.h1>
      <div>
        {work_info.map((project) => (
          <div>
            <Project
              size={project.size}
              title={project.title}
              blurb={project.blurb}
              imgs={project.imgs}
              embed={project.embed}
              soft={project.soft_skills}
              tech={project.tech}
              more={project.more}
              refr={project.ref}
            />
            <br />
          </div>
        ))}
      </div>
      {/* Heyo! Sabrina here. If you're creeping my portfolio code right now
      (hey!) you're going to notice that this next part is a total mess. I
      should've done my skills section with components, but I copied it from
      my GitHub README, and since I'm writing this while I have COVID and am
      stuck home from school, I don't have the energy (or time, I'm missing 7
      lectures) to fix it. If you're using this site for inspiration or code
      snippits -> DON'T COPY THIS BIT! It's terrible practice. (ALSO: if 
      you're a prospective employer, I'm sorry :( I wouldn't do this to you.) 
      Instead, go for the reusable component code I did for my projects and 
      work experience. Thanks for creeping, happy coding :)
      */}
      <br id="skills" />
      <br />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        Skills
      </motion.h1>
      <div class="blurb">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Programming
        </motion.h2>
        <a
          href="https://www.mathworks.com/products/matlab.html"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://seeklogo.com/images/M/matlab-logo-AE6C96A5DD-seeklogo.com.png"
            alt="matlab"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a href="https://www.arduino.cc/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg"
            alt="arduino"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a
          href="https://www.cprogramming.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
            alt="c"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a
          href="https://www.w3schools.com/cpp/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            alt="cplusplus"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a
          href="https://www.w3schools.com/cs/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
            alt="csharp"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="css3"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="git"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="html5"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="javascript"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a href="https://nodejs.org" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
            alt="nodejs"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a href="https://www.python.org" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="python"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="react"
            width="40"
            height="40"
          />{" "}
        </a>{" "}
        <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://reactnative.dev/img/header_logo.svg"
            alt="reactnative"
            width="40"
            height="40"
          />{" "}
        </a>
        <a
          href="https://en.wikipedia.org/wiki/VHDL"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://is5-ssl.mzstatic.com/image/thumb/Purple112/v4/73/dd/cd/73ddcd5d-fe75-42d3-81e0-531c23bd5df3/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg"
            alt="VHDL"
            width="40"
            height="40"
          />{" "}
        </a>
      </div>
      <div class="blurb">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Other Tools
        </motion.h2>
        <a href="https://www.office.com/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png"
            alt="Microsoft Office"
            width="40"
            height="40"
          />{" "}
        </a>
        <a
          href="https://www.autodesk.ca/en/products/autocad/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://www.pugetsystems.com/wp-content/uploads/2022/08/autodesk_autocad-logo.png"
            alt="AutoCAD"
            width="40"
            height="40"
          />{" "}
        </a>
        <a href="https://www.solidworks.com/" target="_blank" rel="noreferrer">
          {" "}
          <img
            src="https://seeklogo.com/images/S/SolidWorks-logo-8700D36253-seeklogo.com.png"
            alt="SolidWorks"
            width="80"
            height="50"
          />{" "}
        </a>
        <a
          href="https://www.intel.ca/content/www/ca/en/products/details/fpga/development-tools/quartus-prime.html"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="https://cdn.worldvectorlogo.com/logos/quartus.svg"
            alt="Quartus"
            width="60"
            height="60"
          />{" "}
        </a>
        <a
          href="https://www.altium.com/altium-designer"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img
            src="http://www.circuits-smd.com/img/AD_FirstScreen_X2_black.png"
            alt="Altium"
            width="80"
            height="40"
          />{" "}
        </a>
      </div>
      <div class="blurb">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          More Skills
        </motion.h2>
        <ul class="skills_list">
          <li>Public Speaking & Pitching</li>
          <li>Graphic Design</li>
          <li>Team Leadership</li>
          <li>Techical Writing</li>
          <li>Debugging</li>
          <li>DVMs</li>
          <li>Oscilloscope Probing</li>
          <li>Soldering</li>
        </ul>
      </div>
      <br />
      <br />
      <br />
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        Access my Resumé
      </motion.h1>
      <div class="blurb">
        You can access the most recent copy of my entire resumé below!
      </div>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1KAjrbKjWzqZqXmlqUHhxgtAo3GseYxZq/view?usp=sharing"
      >
        <motion.button
          whileHover={{ scale: 1.2 }}
          className="bestbuttonever"
          id="resume"
        >
          Resumé PDF
        </motion.button>
      </a>
    </div>
  );
}
