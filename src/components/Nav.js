import React from "react";

import styled from "styled-components";

import "../css/master.css";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <div>
      <nav>
        <motion.div
          whileHover={{ fontSize: "35px", cursor: "pointer" }}
          class="navtitle"
        >
          <a href="#top">SB</a>
          {/* <img class="logo" height="40" alt="logo" src={logo} /> */}
        </motion.div>
        <ul>
          <motion.li whileHover={{ fontSize: "20px" }}>
            <div class="dropdown">
              <a href="#projects">PROJECTS</a>
              <div class="dropdown-content">
                <a href="#model-auto-loader">Model Autonomous Mining Loader</a>
                <a href="#antenna-arm">Antenna Integrated Robotic Arm</a>
                <a href="#payload-testing">Payload Testing Apparatus</a>
                <a href="#recoin">ReCoin | UofT Hacks IX, Third Place</a>
                <a href="#markit">Markit | QSS 2022, Second Place</a>
              </div>
            </div>
          </motion.li>
          <motion.li whileHover={{ fontSize: "20px" }}>
            <div class="dropdown">
              <a href="#work">WORK EXPERIENCE</a>
              <div class="dropdown-content">
                <a href="#ciena-2">
                  Automation Software Engineer Intern @ Ciena
                </a>
                <a href="#ciena-1">
                  FOS Chamber Development and Integration Intern @ Ciena
                </a>
                <a href="#kinaxis">Software Developer Intern @ Kinaxis</a>
              </div>
            </div>
          </motion.li>
          <motion.li whileHover={{ fontSize: "20px" }}>
            <a href="#resume">RESUME</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} class="linkedinlink">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sabrinabutton/"
            >
              <img
                height="35"
                alt="linkedin"
                src="https://www.iconninja.com/files/820/89/92/black-linkedin-icon.png"
              />
            </a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} class="githublink">
            <a target="_blank" href="https://github.com/sabrinabutton">
              <img
                height="35"
                alt="github"
                src="https://cdn.iconscout.com/icon/free/png-256/github-1521488-1288230.png"
              />
            </a>
          </motion.li>
          {/* <motion.li  whileHover={{scale: 1.2}}class="twtlink"><a target="_blank" href="https://twitter.com/sabbutton"><img height="35" alt="twitter" src="https://www.stanthonyshs.org/wp-content/uploads/2018/01/black-and-white-twitter-logo-transparent_100736.png"/></a></motion.li> */}
        </ul>
      </nav>
    </div>
  );
}