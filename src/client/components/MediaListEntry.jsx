import React, { Component } from 'react';
import axios from 'axios';

class MediaListEntry extends Component {
  constructor(props) {
    super(props);
  }

  handleLike = () => {
    axios.post(`/items/${this.props.item.uuid}`, {
      rating: 'like' || null
    })
    .catch(err => {
      throw err
    })
    this.props.fetch(this.props.currPage, this.props.pages)
  }

  render() {
    return (
      <div className="slideSpace media-container" style={{flexDirection: "row"}}>
        { this.props.item.rating === null ? <i className="material-icons" onClick={this.handleLike}>favorite</i> : null }
        { this.props.item.itemData.youtube_video ? <i className="material-icons play" onClick={() => window.open(`https://www.youtube.com/watch?v=${this.props.item.itemData.youtube_video}`)}>play_circle_outline</i> : null }
        <img src={this.props.item.itemData.image || "http://realishracing.com/images/archive/5/5f/20120315120949%21Placeholder.jpg"} style={{width: "224px", height: "283px", marginBottom: "24px", boxShadow:"10px 10px 50px black"}} />
        <div className="text" style={{fontSize: "24px"}}>{this.props.item.name}</div>
        <div className="text" style={{fontSize: "18px"}}>{this.props.item.itemData.definingInfo}</div>
      </div>
    );
  }
}

export default MediaListEntry;