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

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        Access my Resumé
      </motion.h2>
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
