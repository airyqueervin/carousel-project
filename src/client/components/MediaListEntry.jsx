import React, { Component } from 'react';
import axios from 'axios';

class MediaListEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heartVis: true
    };
  }

  handleLike = () => {
    console.log('hand like cliked')
    this.setState({heartVis: !this.state.heartVis})
  }

  render() {
    return (
      <div className="mySlides fade media-container" style={{flexDirection: "row"}}>
        { this.state.heartVis ? <i className="material-icons" onClick={this.handleLike}>favorite</i> : null }
        <img src={this.props.item.itemData.image} style={{width: "224px", height: "283px", marginBottom: "24px"}} />
        <div className="text" style={{fontSize: "24px"}}>{this.props.item.name}</div>
        <div className="text" style={{fontSize: "18px"}}>{this.props.item.itemData.definingInfo}</div>
      </div>
    );
  }
}

export default MediaListEntry;