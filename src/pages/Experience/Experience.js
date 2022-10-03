import React from "react";
import resume from "../../assets/resume.pdf";
import Interests from "../../components/Interests/Interests";
import Skills from "../../components/Skills/Skills";
import './Experience.scss';
import {AiOutlineCloudDownload} from 'react-icons/ai'
import messages from "./Messages";
import { WorkExp } from "./WorkExp";
function Experience() {
  return (
    <>
      <section className="container">
        <div className="inner">
          <h1 className="title"> My Experience</h1>
          <div className="download">
            <AiOutlineCloudDownload
              color="#4B80E2"
              size={30}
            />
            <a href={resume} download className="download__btn btn">
              Download Resume
            </a>
            <AiOutlineCloudDownload
              color="#4B80E2"
              size={30}
            />
          </div>
          <div className="employment">
            <h3 className="employment__title">Employment</h3>
            {messages.employment.map((exp, i) => 
              <WorkExp key={i} {...exp} />
            )}
          </div>
        </div>

          {/* <div className="employment">
            <h3 className="employment__title">Employment</h3>
            <div className="employment__upper">
              <img src="" alt="company logo here" className="employment__logo"/>
              <div className="employment__overview">
                <h4 className="employment__employer">COmpany name</h4>
                <p className="employment__position">Position, date of employment</p>
              </div>
            </div> */}

{/*  CREATE A JS ARRAY TO MAP THROUGH WITH MY EXPERIENCE?  */}
            {/* add an onclick for the overview so that it drops down the lower div */}
            {/* <div className="employment__lower">
              <ul className="employment__details">
                
              </ul>
            </div>
          </div>
        </div> */}



      </section>
 
 {/* CONSIDER MOVING THIS TO EDUCATION OR GIVE IT A SEPARATE PAGE? */}

      <div className="skills__container container">
        <h2 className="skills__section-title"> Skills</h2>
        <Skills />
      </div>

    </>
  );
}

export default Experience;
