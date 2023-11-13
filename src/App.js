import './index.css';

// images
import one from "./images/one.jpg"
import two from "./images/two.jpg"
import three from "./images/three.jpg"
import four from "./images/four.jpg"
import five from "./images/five.jpg"
import { useState } from 'react';

function App() {

  let images = [one, two, three, four, five];

  const [status, setStatus] = useState(randomImage())

  function randomImage(){
    return images[Math.floor(Math.random() * images.length)]
  }

  function changeImage(){
    setStatus(randomImage);
  }

  return (
    <div className="App">
     <img src={status} alt="background" onClick={changeImage}/>
    </div>
  );
}

export default App;
