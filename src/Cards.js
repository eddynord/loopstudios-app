import React from 'react';
import './index.css';
import cardOne from '../public/'




export default Cards  
function Cards(props) {
    return(
        <div className='creations-cards'>
            <img src={props.image} alt= "Creation"/>
            <h3>{props.title}</h3>
        </div>
    )
}