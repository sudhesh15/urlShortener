import './App.css';
import './InputShortener'
import InputShortener from './InputShortener';
import BackgroundImage from './BackgroundImage';
import LinkResult from './LinkResult';
import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="container">
      <InputShortener setInputValue={setInputValue}/>
      <BackgroundImage />
      <LinkResult inputValue={inputValue}/>
    </div>
  );
}

export default App;
