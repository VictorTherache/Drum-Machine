import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Switch from "react-switch";
// import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import ContiniousSlider from './SliderComponent';
import SliderComponent from './SliderComponent';
import './DrumStylesheet.scss';
import './MusicController.scss';
import DrumBoxes from './DrumBoxes.js'
import {audio1} from './DrumBoxes.js';
import {audio2} from './DrumBoxes.js';
import {audio3} from './DrumBoxes.js';
import {audio4} from './DrumBoxes.js';
import {audio5} from './DrumBoxes.js';
import {audio6} from './DrumBoxes.js';
import {audio7} from './DrumBoxes.js';
import {audio8} from './DrumBoxes.js';
import {audio9} from './DrumBoxes.js';

class MusicController extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
  
  
  
  handleChange(checked) {
    this.setState({ checked });
  }
  
  
  render() {
    if (this.state.checked === false) {
      audio1.muted = true
      audio2.muted = true
      audio3.muted = true
      audio4.muted = true
      audio5.muted = true
      audio6.muted = true
      audio7.muted = true
      audio8.muted = true
      audio9.muted = true

    } else {
      audio1.muted = false
      audio2.muted = false
      audio3.muted = false
      audio4.muted = false
      audio5.muted = false
      audio6.muted = false
      audio7.muted = false
      audio8.muted = false
      audio9.muted = false
      audio1.volume = 0.1
    }
    return (
      <div className='Box'>
        <label 
          style={{ 
            display:'flex',
            flexDirection: 'row',
            }} 
            className='mt-5'>
              <div  className='Power'>
                <h6 className='mr-3'>Power</h6>
                  <Switch 
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    height={20} 
                    width={40}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onColor="#B071C2"
                  />
              </div>
        </label>
        <div className='d-flex Volume' style={{flexDirection:'column', alignItems:'center'}}>
            <h6>Volume</h6>
            <SliderComponent/>
        </div>
      </div>
    );
  }
}

export default MusicController;
