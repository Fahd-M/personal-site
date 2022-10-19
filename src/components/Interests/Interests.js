import './Interests.scss';
import { GiElectric } from "react-icons/gi";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { AiOutlineCar } from "react-icons/ai";
import { FaDog } from "react-icons/fa";
function Interests() {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img className="card__img" src="..." alt="fahd raptors"/>
          <div className="card-body">
            <h4 className="card-title">Basketball</h4>
          </div>
        </div>
        <div className="card">
          <img className="card__img" src="..." alt="ralliart"/>
          <div className="card-body">
            <h4 className="card-title">Project car</h4>
          </div>
        </div>
        <div className="card">
          <img className="card__img" src="..." alt="horhey mia"/>
          <div className="card-body">
            <h4 className="card-title">Dogs</h4>
          </div>
        </div>
        <div className="card">
          <img className="card__img" src="..." alt="fahd anime"/>
          <div className="card-body">
            <h4 className="card-title">Anime</h4>
          </div>
        </div>
        <div className="card">
          <img className="card__img" src="..." alt="Fahd enjoying music"/>
          <div className="card-body">
            <h4 className="card-title">Music</h4>
          </div>
        </div>
        <div className="card">
          <img className="card__img" src="..." alt="Fahd traveling"/>
          <div className="card-body">
            <h4 className="card-title">Travel</h4>
          </div>
        </div>
      </div>    
    </>
  )
}

export default Interests