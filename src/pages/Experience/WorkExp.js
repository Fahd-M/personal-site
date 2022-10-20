import React, { useState } from 'react';
import './WorkExp.scss';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
export const WorkExp = ({company, titleDate, date,description, pic}) => {
    const [isOpen, toggleBlock] = useState(false)
   
    return (
    
    <>
    <div className='work__wrapper' onClick={()=> toggleBlock(!isOpen)}>
        <div className='work__top'>
            <div className='work__text'>
                <h3 className='work__title'>{company}</h3>
                <p className='work__role'>{titleDate}</p>
                <p className='work__date'>{date}</p>
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
                            • {line}
                        </li>    
                    )}
                </ul> : null 
            }
        </SlideDown>
    </div>
    </>

  )
}

