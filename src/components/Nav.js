import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png"
import "../css/master.css"
import {motion} from "framer-motion"

export default function Nav() {
  return (
    <div><nav>
      <div class='navtitle'>Sabrina Button<img class="logo" height="40" alt="logo" src={logo}/></div>
      <ul>
        <motion.li ><Link to={"./home"}>HOME</Link></motion.li>
        <motion.li ><Link to={"./projects"}>PROJECTS</Link></motion.li>
        <motion.li whileHover={{scale: 1.2}} class="linkedinlink"><a target="_blank" href="https://www.linkedin.com/in/sabrinabutton/"><img height="35" alt="linkedin" src="https://www.iconninja.com/files/820/89/92/black-linkedin-icon.png"/></a></motion.li>
        <motion.li  whileHover={{scale: 1.2}}class="githublink"><a target="_blank" href="https://github.com/sabrinabutton"><img height="35" alt="github" src="https://cdn.iconscout.com/icon/free/png-256/github-1521488-1288230.png"/></a></motion.li>
      </ul>
    </nav>
    </div>
);
    
}