import React, { useState } from 'react';
import './Schools.scss';
export const Schools = (props) => {
    const [isOpen, toggleOpen] = useState(false)
    return (
        <div className='schools__wrapper' onClick={() => toggleOpen(!isOpen)}>
            <div className='schools__info'>
                <div className='schools__text'>
                    <h3 className='schools__name'>{props.name}</h3>
                    <h4 className='schools__school'>{props.school}</h4>
                    {props.date? <p className='schools__date'>{props.date}</p> : null}
                </div>
                <div className='schools__visual'>
                    <img className='schools__img' src={props.pic} alt={props.school} />
                </div>
            </div>
            { props.desc && isOpen ? <p className='schools__details'>{props.desc}</p> : null}
            
        </div>  
    )
}