import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../css/master.css";

// Styled component of a div with an outline
const StyledDiv = styled.div`
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem;
`;

// Styled component of a github icon
const StyledGithubIcon = styled.img`
  width: 5rem;
  height: 5rem;
  margin: 1rem;
`;

// Styled link to github repo
const StyledLink = styled.a`
  text-decoration: none;
  color: black;
`;

// Styled owner text
const StyledOwner = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

// styled "last updated" text
const StyledLastUpdated = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

function getGithubInfo(link) {
  return fetch(link)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
}

export default function Features() {
  return <StyledDiv></StyledDiv>;
}
