import React, { Component } from 'react';
import axios from 'axios';
import MediaList from './MediaList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      pageNum: {
        1: {
          start: 0,
          end: 4
        },
        2: {
          start: 4,
          end: 8
        },
        3: {
          start: 8,
          end: 12
        },
        4: {
          start: 12,
          end: 16
        },
      },
      currPage: 1
    };
  }

  componentWillMount() {
    axios.get('/items')
    .then(items => {
      this.setState({ data: items });
    })
    .catch(err => {
      throw err;
    })
  }

  plusSlides = (val) => {
    if ((this.state.currPage + val) > 4) {
      this.setState({currPage: 1})  
    } else if ((this.state.currPage + val) < 1) {
      this.setState({currPage: 4})
    } else {
      this.setState({currPage: this.state.currPage + val})
    }
  }

  currentSlide = (val) => {
    this.setState({currPage: val});
  }

  render() {
    return (
      <div>
        <div style={{fontSize: "34px", marginBottom: "40px"}}>Top recommendations for you</div>
        <div className="slideshow-container">
          {this.state.data ? <MediaList media={this.state.data} pageNum={this.state.pageNum} currPage={this.state.currPage} /> : null}
          <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
        </div>
        <div style={{textAlign: "center"}}>
          <span className="dot" onClick={() => this.currentSlide(1)}></span> 
          <span className="dot" onClick={() => this.currentSlide(2)}></span> 
          <span className="dot" onClick={() => this.currentSlide(3)}></span> 
          <span className="dot" onClick={() => this.currentSlide(4)}></span> 
        </div>
      </div>
    ) 
  }
}

export default App;