import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';



function Container() {
  return (
    <div className='wrapper'>
      <Header/>

    </div>
  )
}



ReactDOM.createRoot(document.getElementById('root')).render(<Container/>);

