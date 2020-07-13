import React from 'react';
import logo from './logo.svg';
import './App.css';
import MusicController from './components/MusicController';
import SliderComponent from './components/SliderComponent';
import Button from 'react-bootstrap/Button';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import DrumBoxes from './components/DrumBoxes';
import AppBox from './AppBox.scss';


function App() {
  return (
    <div className="App">
      <div className='appBox'>
      < MusicController  />
      < DrumBoxes />
      </div>
    </div>
  );
}

export default App;
