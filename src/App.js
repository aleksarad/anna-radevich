import React from 'react';
import Header from './components/Header'
import ImageContainer from './components/ImageContainer'

//images

import abstract1 from './images/abstract1.jpg'
import abstract2 from './images/abstract2.jpeg'
import abstract3 from './images/abstract3.jpg'
import abstract4 from './images/abstract4.jpg'

const images = [abstract1, abstract2, abstract3, abstract4]

function App() {
  return (
    <>
      <Header/>
      <main>
        <ImageContainer images={images}/>
      </main>
    </>
  );
}

export default App;
