import React from 'react';
import './index.css';





export default Cards  
function Cards(props) {
    return(
        <div className='creations-cards'>
                <img className='card-image' src={props.image} alt= "Creation"/>
                <div className='card-text'>
                    <h3>{props.title}</h3>
                </div>
        </div>
    )
}
            

            
