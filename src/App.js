import React from 'react';
import logo from './logo.svg';
import './App.css';

import Body from  './body.js';
import Comments from './comments';
import CardLess from './cardsless.js';
import Form from './subscribe.js';


function App() {
  return (

    <div>
     
     <Body />
     <CardLess/>
     <Comments/>
     <Form />
    
    </div>
  );
}

export default App;
