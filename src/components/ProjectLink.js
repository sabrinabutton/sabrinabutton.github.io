import React from "react";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  text-align: center;
  margin: 10px;
  color: black;
`;

const Reponame = styled.div`
  padding-left: 10px;
  margin: 5px;
  text-align: center;
`;

const Name = styled.div`
  font-weight: bold;
  display: inline;
`;

const ProjectLink = ({ creator, repository, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <StyledDiv>
        <div text-align="center" margin="10px">
          <FaGithub size="30px" />
        </div>
        <Reponame>
          {creator}/<Name>{repository}</Name>
        </Reponame>
      </StyledDiv>
    </a>
  );
};

export default ProjectLink;
