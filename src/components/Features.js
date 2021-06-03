import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../css/master.css";

export default function Features() {
  return (
    <div class="container">
  
    
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Features
      </motion.h1>
      <div>A list of articles and websites featuring me! :)</div>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3}}
      >
        <a target="_blank" href="https://steamhorizonawards.ca/2021-winners/">Meet the Ingenium-NSERC STEAM Horizon Award 2021 Winners </a>
      </motion.h3>
      {/* <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3}}
      >
        Sabrina Button, 2021 Schulich Leader at Queen's University 
      </motion.h3> */}
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3}}
      >
        <a href="https://ayjacksonss.ocdsb.ca/news/what_s_new/schulich_leader_scholarship_recipient_2021" target="_blank">AYJ is proud to announce a Schulich Leader Scholarship Recipient!</a> 
      </motion.h3>
    </div>
  );
}