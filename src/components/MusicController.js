import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Switch from "react-switch";
// import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import ContiniousSlider from './SliderComponent';
import SliderComponent from './SliderComponent';
import './DrumStylesheet.scss';
import './MusicController.scss';


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
    return (
      <div className='Box'>
        <div>
        <label 
          style={{ 
            display:'flex',
            flex:1, 
            flexDirection: 'row',
            justifyContent: 'center'}} 
            className='mt-5'>
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
        </label>
        </div>
        <div className='d-flex' style={{flexDirection:'column', alignItems:'center'}}>
            <h6>Volume</h6>
            <SliderComponent/>
        </div>
      </div>
    );
  }
}

export default MusicController;