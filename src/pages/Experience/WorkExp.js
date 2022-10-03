import React, { useState } from 'react';
import './WorkExp.scss';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import { BsArrowRightCircle } from 'react-icons/bs';
export const WorkExp = ({company, titleDate, description, pic}) => {
    const [isOpen, toggleBlock] = useState(false)
   
    return (
    
    <>
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
        <SlideDown className={'my-dropdown-slidedown'}>
            {isOpen ? 
                <ul className='work__description'>
                    {description.map(line => 
                         <li className='work__line' key={line}>
                            <BsArrowRightCircle
                                color='white'
                                size={40}
                                className='work__icon'/>
                             {line}
                        </li>    
                    )}
                </ul> : null 
            
            }
        </SlideDown>
    </div>
    </>
    // <div className='dropdownslidedown here'>

    // </div>
  )
}

