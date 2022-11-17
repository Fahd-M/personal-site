import { Link } from 'react-router-dom';
import notFound from "../../assets/images/404-image.png"
import './NotFound.scss';

function NotFound() {
  return (
    <div className='not-found__wrapper'>
    <div className='not-found'>
      <img className='not-found__img' src={notFound} alt="404 with truck" />
      <h1 className='not-found__title'> Oops! Page not found. </h1>
      <Link to="/" className="not-found__link btn" > Take me home </Link>
    </div>
    </div>
  )
}

export default NotFound