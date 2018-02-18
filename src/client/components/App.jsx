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
      currPage: 1,
      pages: 4
    };
  }

  componentWillMount() {
    this.fetch();
  }

  componentDidMount() {
    this.activateDots(this.state.currPage);
  }

  fetch = () => {
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
      this.activateDots(1);
      this.setState({currPage: 1})  
    } else if ((this.state.currPage + val) < 1) {
      this.activateDots(4);
      this.setState({currPage: 4})
    } else {
      this.activateDots(this.state.currPage + val);
      this.setState({currPage: this.state.currPage + val})
    }
  }

  currentSlide = (val) => {
    this.activateDots(val);
    this.setState({currPage: val});
  }

  activateDots = (n) => {
    let dots = document.getElementsByClassName("dot");
    console.log(dots)
 
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[n-1].className += " active";
  } 
    

  render() {
    const dots = [];
    for (let i = 0; i < this.state.pages; i++) {
      dots.push(<span key={i+'dot'} className="dot" onClick={() => this.currentSlide(i+1)}></span> )
    }
    return (
      <div className="container">
        <div style={{fontSize: "34px", marginBottom: "40px", position:"relative"}}>Top recommendations for you
          <div className="dot-container">
            {dots}
          </div>
        </div>
        <div className="slideshow-container">
          {this.state.data ? <MediaList media={this.state.data} pageNum={this.state.pageNum} currPage={this.state.currPage} fetch={this.fetch} /> : null}
        </div>
        <div className="prevNextPos">
          <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
        </div>
        {/* This is where the dots live */}
          {/* <span className="dot" onClick={() => this.currentSlide(1)}></span> 
          <span className="dot" onClick={() => this.currentSlide(2)}></span> 
          <span className="dot" onClick={() => this.currentSlide(3)}></span> 
          <span className="dot" onClick={() => this.currentSlide(4)}></span>  */}
      </div>
    ) 
  }
}

export default App;