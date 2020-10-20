import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import ImageContainer from './components/ImageContainer';
import About from './components/About';

//images

import abstract1 from './images/abstract1.jpg'
import abstract2 from './images/abstract2.jpeg'
import abstract3 from './images/abstract3.jpg'
import abstract4 from './images/abstract4.jpg'
import abstract5 from './images/abstract5.jpg'
import abstract6 from './images/abstract6.jpg'

const images = [abstract1, abstract2, abstract3, abstract4, abstract5, abstract6]

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Route exact path="/" render={() => <ImageContainer images={images}/>}/>
        <Route path="/about" render={()=> <About/>}/>
      </main>
    </BrowserRouter>
  );
}

export default App;
