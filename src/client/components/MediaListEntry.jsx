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
    axios.post(`/items/${this.props.item.uuid}`, {
      rating: 'like'
    })
    .then(data => {
      console.log('data in handleLike', data)
    })
    .catch(err => {
      throw err
    })
    this.props.fetch(this.props.currPage, this.props.pages);
    this.setState({heartVis: !this.state.heartVis})
  }

  render() {
    return (
      <div className="slideSpace mySlides media-container" style={{flexDirection: "row"}}>
        { this.props.item.rating === null ? <i className="material-icons" onClick={this.handleLike}>favorite</i> : null }
        { this.props.item.itemData.youtube_video ? <i className="material-icons play" onClick={() => window.open(`https://www.youtube.com/watch?v=${this.props.item.itemData.youtube_video}`)}>play_circle_outline</i> : null }
        <img src={this.props.item.itemData.image} style={{width: "224px", height: "283px", marginBottom: "24px", boxShadow:"10px 10px 50px black"}} />
        <div className="text" style={{fontSize: "24px"}}>{this.props.item.name}</div>
        <div className="text" style={{fontSize: "18px"}}>{this.props.item.itemData.definingInfo}</div>
      </div>
    );
  }
}

export default MediaListEntry;