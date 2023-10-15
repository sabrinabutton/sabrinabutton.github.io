import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../css/master.css";
import ReactTextCollapse from "react-text-collapse/dist/ReactTextCollapse";
import { TEXT_COLLAPSE_OPTIONS } from "../App";
import ProjectLink from "./ProjectLink";

export default function Project(props) {
  var TEXT_C_O = Object.assign({}, TEXT_COLLAPSE_OPTIONS);

  TEXT_C_O.maxHeight = props.size || 500;

  return (
    <div class="container">
      <br id={props.refr} />
      <br />
      <br />
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        {props.title}
      </motion.h2>
      <div class="flex-container">
        {props.embed.map((video) => (
          <div>
            <iframe
              width={video.width || 560}
              height={video.height || 400}
              src={video.src}
              title="Embed"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        ))}

        {props.imgs.map((img) => (
          <div>
            <img src={img.src} height={img.height || "300 px"} />
          </div>
        ))}
      </div>

      <div class="skills">
        <strong>Soft Skills:</strong>
        <div>
          {props.soft.map((pgraph) => (
            <div>{pgraph}</div>
          ))}
        </div>
        <strong>Technologies:</strong>
        <div>
          {props.tech.map((pgraph) => (
            <div>{pgraph}</div>
          ))}
        </div>
      </div>
      <br />

      <div class="blurb">
        {props.more ? (
          <ReactTextCollapse options={TEXT_C_O}>
            {props.blurb.map((pgraph) => (
              <div class="left">
                {pgraph}
                <br />
                <br />
              </div>
            ))}
          </ReactTextCollapse>
        ) : (
          <div>
            {props.blurb.map((pgraph) => (
              <div class="left">
                {pgraph}
                <br />
                <br />
              </div>
            ))}
          </div>
        )}
      </div>
      <br />
      <br />
      {props.project_url != undefined ? (
        <div class="blurb">
          <ProjectLink
            creator={props.project_url.creator}
            repository={props.project_url.repo}
            url={props.project_url.url}
          />
        </div>
      ) : (
        <div></div>
      )}

      <br />
      <br />
    </div>
  );
}
