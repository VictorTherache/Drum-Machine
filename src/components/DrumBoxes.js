import React, { Component } from 'react';
import './DrumStylesheet.scss';

let audio1 = new Audio('/Drum1.mp3')
let audio2 = new Audio('/Drum2.mp3')
let audio3 = new Audio('/Drum3.mp3')
let audio4 = new Audio('/Drum4.mp3')
let audio5 = new Audio('/Drum5.mp3')
let audio6 = new Audio('/Drum6.mp3')
let audio7 = new Audio('/Drum7.mp3')
let audio8 = new Audio('/Drum8.mp3')
let audio9 = new Audio('/Drum9.mp3')


const start1 = () => {
    audio1.play()
}
const start2 = () => {
    audio2.play()
}

const start3 = () => {
    audio3.play()
}
const start4 = () => {
    audio4.play()
}
const start5 = () => {
    audio5.play()
}
const start6 = () => {
    audio6.play()
}
const start7 = () => {
    audio7.play()
}
const start8 = () => {
    audio8.play()
}
const start9 = () => {
    audio9.play()
}
class DrumBoxes extends Component {
    constructor(){
        super();

       this.state = {
           backgroundColor: '#F8AD3E',
           backgroundColor2: '#DD50F6',
           backgroundColor3: '#6AF3E1',
           backgroundColor4: '#59E780',
           backgroundColor5: '#E4ED1E',
           backgroundColor6: '#F04566',
           backgroundColor7 : '#8E7110',
           backgroundColor8 : '#25A7A1',
           backgroundColor9 : '#75D54F'

       }
    }

    handleEvent = (event) => {
        if (event.type === "mousedown") {
               this.setState({ backgroundColor: '#D17E03'});
           } else {
               this.setState({ backgroundColor: '#F8AD3E'});
           }
       }
    handleclick = (event) => {
        if (event.type === "mousedown") {
            this.setState({ backgroundColor2: '#A602C2'});
        } else {
            this.setState({ backgroundColor2: '#DD50F6  '})
        }
    }
    handleclick2 = (event) => {
        if (event.type === "mousedown") {
            this.setState({ backgroundColor3: '#1AD4BC'});
        } else {
            this.setState({ backgroundColor3: '#6AF3E1  '})
        }
    }
    handleclick3 = (event) => {
        if (event.type === "mousedown") {
            this.setState({ backgroundColor4: '#1DCA4C'});
        } else {
            this.setState({ backgroundColor4: '#59E780  '})
        }
    }
    handleclick4 = (event) => {
        if (event.type === "mousedown") {
            this.setState({ backgroundColor5: '#BEC43B'});
        } else {
            this.setState({ backgroundColor5: '#E4ED1E  '})
        }
    }
    handleclick5 = (event) => {
        if (event.type === "mousedown") {
            this.setState({ backgroundColor6: '#BE3550'});
        } else {
            this.setState({ backgroundColor6: '#F04566  '})
        }
    }
    handleclick6 = (event) => {
        if (event.type === "mousedown") {
            this.setState({ backgroundColor7: '#624E0B'});
        } else {
            this.setState({ backgroundColor7: '#8E7110  '})
        }
    }
    handleclick7 = (event) => {
        if (event.type === "mousedown") {
            this.setState({ backgroundColor8: '#247571'});
        } else {
            this.setState({ backgroundColor8: '#25A7A1  '})
        }
    }
    handleclick8 = (event) => {
        if (event.type === "mousedown") {
            this.setState({ backgroundColor9: '#52A631'});
        } else {
            this.setState({ backgroundColor9: '#75D54F'})
        }
    }
    
    render() {

        return(
            <div style={{'width': '80vw',
                        'display': 'flex',
                        'flexDirection' : 'column',
                        'alignItems': 'center'
            }}>
                <h1 className='mt-3 mb-5'>Drum Box</h1>
                <div className='SquareGrid'>
                  <div class="item" style={{backgroundColor: this.state.backgroundColor}} onMouseDown={ this.handleEvent } onMouseUp={ this.handleEvent } onClick={start1}></div>
                  <div class="item" style={{backgroundColor: this.state.backgroundColor2}} onMouseDown={ this.handleclick } onMouseUp={ this.handleclick } onClick={start2}></div>
                  <div class="item" style={{backgroundColor: this.state.backgroundColor3}} onMouseDown={ this.handleclick2 } onMouseUp={ this.handleclick2 } onClick={start3}></div>
                  <div class="item" style={{backgroundColor: this.state.backgroundColor4}} onMouseDown={ this.handleclick3 } onMouseUp={ this.handleclick3 } onClick={start4}></div>
                  <div class="item" style={{backgroundColor: this.state.backgroundColor5}} onMouseDown={ this.handleclick4 } onMouseUp={ this.handleclick4 } onClick={start5}></div>
                  <div class="item" style={{backgroundColor: this.state.backgroundColor6}} onMouseDown={ this.handleclick5 } onMouseUp={ this.handleclick5 } onClick={start6}></div>
                  <div class="item" style={{backgroundColor: this.state.backgroundColor7}} onMouseDown={ this.handleclick6 } onMouseUp={ this.handleclick6 } onClick={start7}></div>
                  <div class="item" style={{backgroundColor: this.state.backgroundColor8}} onMouseDown={ this.handleclick7 } onMouseUp={ this.handleclick7 } onClick={start8}></div>
                  <div class="item" style={{backgroundColor: this.state.backgroundColor9}} onMouseDown={ this.handleclick8 } onMouseUp={ this.handleclick8 } onClick={start9}></div>
                </div>
                <div>
      </div>
            </div>
            );
    }
}

export default DrumBoxes
export {audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8, audio9}