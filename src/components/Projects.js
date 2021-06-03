import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../css/master.css";

export default function Projects() {
  return (
    <div class="container">
  
    
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        Projects
      </motion.h1>
      <h3>Anxius</h3>
      <h3>AYJ Coding Club & The "OODC Interface"</h3>
      
    </div>
  );
}