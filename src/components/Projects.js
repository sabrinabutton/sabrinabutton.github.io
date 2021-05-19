import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../css/master.css";

export default function Projects() {
  return (
    <div class="container">
      <div class="blurb">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          My Projects
        </motion.h1>
      </div>
      <div>
      Hi! Thanks for taking an interest in what I've been up to. Unfortunately, I haven't gotten around to populating this part of the site yet. In the mean time, you can check out a few of my projects on GitHub if you're interested :).
      </div>
    </div>
  );
}