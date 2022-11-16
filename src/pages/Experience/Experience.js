import resume from "../../assets/resume.pdf";
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
          <a href={resume} download className="download">
            <AiOutlineCloudDownload
              color="#4B80E2"
              className="download__icon"
            />
            <div className="download__btn btn">
              Download Resume
            </div>
            <AiOutlineCloudDownload
              color="#4B80E2"
              className="download__icon"
            />
          </a>
          <div className="employment">
            <h3 className="employment__title">Employment</h3>
            {messages.employment.map((exp, i) => 
              <WorkExp key={i} {...exp} />
            )}
          </div>
        </div>
      </section>
 

      <div className="skills__container container">
        <h2 className="skills__section-title"> Skills</h2>
        <Skills />
      </div>

    </>
  );
}

export default Experience;
