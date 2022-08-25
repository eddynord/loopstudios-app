import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Hero from './Hero'
import Creations from './Creations';
import Cards from './Cards';
import Data from './Data';





function Container(props) {
  const cardData = Data.map(items => {
    return <Cards
                image = {items.image}
                title = {items.title}
            />
            
  })
  
  
  return (
    <div className='wrapper'>
      <Header/>
      <Hero/>
      <Creations/>
      {cardData}

    </div>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<Container/>);

