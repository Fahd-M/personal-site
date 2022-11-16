import {TbFaceIdError} from 'react-icons/tb'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found'>
      <img className='not-found__img' src={TbFaceIdError} />
      <h1 className='not-found__title'> Oops - Page not found </h1>
      <Link to="/" className="not-found__link" > Return Home </Link>
    </div>
  )
}

export default NotFound