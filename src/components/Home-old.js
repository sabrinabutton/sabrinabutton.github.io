import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { motion } from "framer-motion";
import "../css/master.css";

export default function Home() {
  return (
    <div class="container">
      <div class="blurb">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Hi! I'm Sabrina.
        </motion.h1>
        <motion.img
          initial={{ height: "150px", margin: "7em" }}
          animate={{ scale: 2 }}
          transition={{ duration: 3 }}
          whileHover={{ scale: 2.5 }}
          class="myface"
          src={face}
          alt="Logo"
        />
      </div>
      <div class="blurb">
        Hi! I'm a student from Ottawa, Ontario interested in artificial
        intelligence, green technologies adn . I am currently pursuing an
        undergraduate degree in Mechatronics Engineering at Queen's University
        as a Schulich Leader. I innovate with hopes of creating projects at the
        intersection of societal improvement and technological advancement.
      </div>
      <h3>
        Email:{" "}
        <a href="mailto:sabrinarosebutton@gmail.com">
          sabrinarosebutton@gmail.com
        </a>
      </h3>
      <h3>Phone: (613)-807-9041</h3>

      <br />
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        What I care about...
      </motion.h2>
      <div className="values">
        <div>
          <motion.img
            whileHover={{ scale: 1.5 }}
            src={innovation}
            alt="Innovation Icon"
            height="100em"
          />
          <h3>Innovation</h3>
        </div>

        <div>
          <motion.img
            whileHover={{ scale: 1.5 }}
            src={sustainability}
            alt="Sustainability Icon"
            height="100em"
          />
          <h3>Sustainability</h3>
        </div>

        <div>
          <motion.img
            whileHover={{ scale: 1.5 }}
            src={teamwork}
            alt="Teamwork Icon"
            height="100em"
          />
          <h3>Teamwork & Equity</h3>
        </div>
      </div>

      {/* <Link to={"./projects"}>
        {" "}
        <motion.button whileHover={{ scale: 1.2 }} className="bestbuttonever">
          See my projects
        </motion.button>
      </Link> */}

      {/* <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        Professional Experience
      </motion.h2>
      <div class="values exp"> 
    <div><motion.img
            whileHover={{ scale: 1.5 }}
            src={control}
            alt="Control Panel Icon"
            height="100em"
          />
          <h3>Test Chamber Integration at Ciena [Fall 2020]</h3></div>
          <div><motion.img
            whileHover={{ scale: 1.5 }}
            src={chatbot}
            alt="Chatbot Icon"
            height="100em"
          />
          <h3>Front-End Development at Kinaxis [Summer 2019]</h3></div>
      </div> */}

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
        href="https://drive.google.com/file/d/17I5zWfM7PxQkuUPgjgvPc5X__wkCU7Vg/view?usp=sharing"
      >
        <motion.button whileHover={{ scale: 1.2 }} className="bestbuttonever">
          Resumé PDF
        </motion.button>
      </a>
      <footer>
        {" "}
        <div>
          Icons made by{" "}
          <a href="https://www.freepik.com" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </div>
  );
}
