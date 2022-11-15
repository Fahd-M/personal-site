import "./Skills.scss";
import { BsCloudCheckFill } from "react-icons/bs";

function Skills() {
  return (
    <>
      <div className="skills container">
        <div className="skills__inner">
          <div className="skills__frontend">
            <h4 className="skills__title"> Frontend Development </h4>
            <div className="skills__content">
              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> HTML </h5>
                  <small className="skills__level"> Experienced </small>
                </article>
              </article>
              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> CSS </h5>
                  <small className="skills__level"> Experienced </small>
                </article>
              </article>

              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> JavaScript </h5>
                  <small className="skills__level"> Experienced </small>
                </article>
              </article>

              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> React </h5>
                  <small className="skills__level"> Experienced </small>
                </article>
              </article>

              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> SASS </h5>
                  <small className="skills__level"> Experienced </small>
                </article>
              </article>

              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> TypeScript  </h5>
                  <small className="skills__level"> Basic </small>
                </article>
              </article>
            </div>
          </div>

          <div className="skills__backend">
            <h4 className="skills__title"> Backend Development </h4>
            <div className="skills__content">
              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> Node JS </h5>
                  <small className="skills__level"> Experienced </small>
                </article>
              </article>

              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> Express JS </h5>
                  <small className="skills__level"> Intermediate </small>
                </article>
              </article>

              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> MySQL </h5>
                  <small className="skills__level"> Intermediate </small>
                </article>
              </article>

              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> MongoDB </h5>
                  <small className="skills__level"> Basic </small>
                </article>
              </article>

              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name">
                    
                     OAuth
                  </h5>
                  <small className="skills__level"> Beginner </small>
                </article>
              </article>
            </div>
          </div>

          <div className="skills__other">
            <h4 className="skills__title"> Other </h4>
            <div className="skills__content">

              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> JIRA </h5>
                  <small className="skills__level"> Intermediate </small>
                </article>
              </article>

              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> Git </h5>
                  <small className="skills__level"> Experienced </small>
                </article>
              </article>

              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> Microsoft Office </h5>
                  <small className="skills__level"> Experienced </small>
                </article>
              </article>

              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> Postman </h5>
                  <small className="skills__level"> Intermediate </small>
                </article>
              </article>

              <article className="skills__details">
                <BsCloudCheckFill
                  color="#4B80E2"
                  size={20}
                  className="skills__icon"
                />
                <article className="skills__text">
                  <h5 className="skills__name"> Deployment </h5>
                  <small className="skills__level"> Beginner </small>
                </article>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
