import React, { useState } from 'react'
import './WorkExp.scss';

export const WorkExp = ({company, titleDate, description, pic}) => {
    const [isOpen, toggleBlock] = useState(false)
   
    return (
    <div className='work__wrapper' onClick={()=> toggleBlock(!isOpen)}>
        <div className='work__top'>
            <div className='work__text'>
                <h3 className='work__title'>{company}</h3>
                <p className='work__date'>{titleDate}</p>
            </div>
            <div className='work__image'>
                <img src={pic} alt={company} className='work__img'/>
            </div>
        </div>
    </div>
    // <div className='dropdownslidedown here'>

    // </div>
  )
}

