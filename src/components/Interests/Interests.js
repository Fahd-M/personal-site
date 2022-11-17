import './Interests.scss';
import initial from '../../assets/images/initiald.jpg';
import raptors from '../../assets/images/raptors.jpg';
import rnb from '../../assets/images/usher.jpg';
import fuji from '../../assets/images/fahdfuji.JPEG';
import horhey from '../../assets/images/fahdhorhey.JPEG';
import ralli from '../../assets/images/ralli.jpg';
import {motion} from "framer-motion";

function Interests() {
  return (
    <>
      <div className="cards interest-list">
        <motion.div whileHover={{ scale: 1.1 }} className="card interest-card">
          <img className="card__img" src={raptors} alt="toronto raptors logo"/>
          <div className="card-body">
            <h4 className="card-title">Basketball</h4>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="card interest-card">
          <img className="card__img" src={ralli} alt="ralliart"/>
          <div className="card-body">
            <h4 className="card-title">Project car</h4>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="card interest-card">
          <img className="card__img" src={horhey} alt="horhey and mia the dogs"/>
          <div className="card-body">
            <h4 className="card-title">Dogs</h4>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="card interest-card">
          <img className="card__img" src={initial} alt="initial-D anime logo"/>
          <div className="card-body">
            <h4 className="card-title">Anime</h4>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1}} className="card interest-card">
          <img className="card__img" src={rnb} alt="Fahd enjoying music"/>
          <div className="card-body">
            <h4 className="card-title">Music</h4>
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} className="card interest-card">
          <img className="card__img" src={fuji} alt="Fahd traveling"/>
          <div className="card-body">
            <h4 className="card-title">Travel</h4>
          </div>
        </motion.div>
      </div>    
    </>
  )
}

export default Interests