import React, { Component } from 'react';
import axios from 'axios';
import MediaList from './MediaList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      currPage: 1,
      pages: 4
    };
  }

  componentWillMount() {
    this.fetchData(this.state.currPage, this.state.pages);
  }

  componentDidMount() {
    this.activateDots(this.state.currPage);
  }

  fetchData = (page, amt) => {
    axios.get(`/items/?page=${page}&amt=${amt}`)
    .then(items => {
      this.setState({ data: items });
    })
    .catch(err => {
      throw err;
    })
  }

  plusSlides = (val) => {
    let currPage = this.state.currPage;
    if ((currPage + val) > 4) {
      this.activateDots(1);
      this.setState({currPage: 1}, () => {
        this.fetchData(1, this.state.pages)
      })  
    } else if ((currPage + val) < 1) {
      this.activateDots(4);
      this.setState({currPage: 4}, () => {
        this.fetchData(4, this.state.pages)
      })
    } else {
      this.activateDots(currPage + val);
      this.setState({currPage: currPage + val}, () => {
        this.fetchData(this.state.currPage, this.state.pages)
      })
    }
  }

  currentSlide = (val) => {
    this.activateDots(val);
    this.setState({currPage: val}, () => {
      this.fetchData(this.state.currPage, this.state.pages)
    })
  }

  activateDots = (n) => {
    let dots = document.getElementsByClassName("dot");
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
            {/* --------- Dots Being Rendered Here ------ */}
            { dots }
          </div>
        </div>
        <div className="slideshow-container">
          { this.state.data ? <MediaList media={this.state.data} currPage={this.state.currPage} pages={this.state.pages} fetch={this.fetchData} /> : null }
        </div>
        <div className="prevNextPos">
          <a className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => this.plusSlides(1)}>&#10095;</a>
        </div>
      </div>
    ) 
  }
}

export default App;