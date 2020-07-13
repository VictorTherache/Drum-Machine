import React, { Component } from 'react';
import './DrumStylesheet.scss';

class DrumBoxes extends Component {
    
    render() {
        return(
            <div style={{'width': '80vw',
                        'display': 'flex',
                        'flexDirection' : 'column',
                        'alignItems': 'center'
            }}>
                <h1 className='mt-3 mb-5'>Drum Box</h1>
                <div className='SquareGrid'>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                  <div class="item"></div>
                </div>
            </div>
            );
    }
}

export default DrumBoxes