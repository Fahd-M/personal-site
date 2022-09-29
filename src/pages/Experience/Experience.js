import React from "react";
import resume from "../../assets/resume.pdf";
import Interests from "../../components/Interests/Interests";
import Skills from "../../components/Skills/Skills";

function Experience() {
  return (
    <>
      <div>Experience</div>
      <a href={resume} download>
        Download Resume
      </a>

      <div className="skills__container container">
        <h2 className="skills__title">Skills</h2>
        <Skills />
      </div>
      <div className="interests__container container">
        <h2 className="interests__title">Interests</h2>
        <Interests />
      </div>
    </>
  );
}

export default Experience;
