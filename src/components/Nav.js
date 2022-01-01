import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/logo.png"
import "../css/master.css"
import {motion} from "framer-motion"

export default function Nav() {
  return (
    <div><nav>
      <motion.div whileHover={{fontSize: '35px'}} class='navtitle'>Sabrina Button<img class="logo" height="40" alt="logo" src={logo}/></motion.div>
      <ul>
        {/* <motion.li whileHover={{fontSize: '30px'}} ><Link to={"./home"}>HOME</Link></motion.li> */}
        {/* <motion.li whileHover={{fontSize: '30px'}} ><Link to={"./projects"}>PROJECTS</Link></motion.li> */}
{/*<motion.li whileHover={{fontSize: '30px'}} ><Link to={"./features"}>FEATURES</Link></motion.li>*/}
        <motion.li whileHover={{scale: 1.2}} class="linkedinlink"><a target="_blank" href="https://www.linkedin.com/in/sabrinabutton/"><img height="35" alt="linkedin" src="https://www.iconninja.com/files/820/89/92/black-linkedin-icon.png"/></a></motion.li>
        <motion.li  whileHover={{scale: 1.2}}class="githublink"><a target="_blank" href="https://github.com/sabrinabutton"><img height="35" alt="github" src="https://cdn.iconscout.com/icon/free/png-256/github-1521488-1288230.png"/></a></motion.li>
        <motion.li  whileHover={{scale: 1.2}}class="twtlink"><a target="_blank" href="https://twitter.com/sabbutton"><img height="35" alt="twitter" src="https://www.stanthonyshs.org/wp-content/uploads/2018/01/black-and-white-twitter-logo-transparent_100736.png"/></a></motion.li>
      </ul>
    </nav>
    </div>
);
    
}
