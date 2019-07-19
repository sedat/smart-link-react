import React, { Component } from 'react';
import './App.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Link extends Component {
  constructor() {
    super();

    this.getThumbnail = this.getThumbnail.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });

    this.getThumbnail();
  }

  extractVideoIdFromYouTubeUrl(url) {
    let id = url.substring(url.lastIndexOf("v=")+2,url.length);
    return id;
  }
  
  extractVideoIdFromDailymotionUrl(url) {
    let id = url.substring(url.lastIndexOf('vi')+6, url.length);
    return id;
  }
  
  getThumbnail() {
    let url = this.props.url;
    if (url[12] === 'y') {
      let id = this.extractVideoIdFromYouTubeUrl(url)

      fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&fields=items/snippet(thumbnails)&key=${key}&id=${id}`)
        .then(res => res.json()).then(data => this.setState({ thumb: data.items[0].snippet.thumbnails.standard.url}))
    }
    else if (url[12] === 'd') {
      let id = this.extractVideoIdFromDailymotionUrl(url);
      fetch(`https://api.dailymotion.com/video/${id}?fields=thumbnail_480_url`)
        .then(res => res.json()).then(data => this.setState({ thumb: data.thumbnail_480_url}))

    }
    else {
      this.setState({ thumb: `https://image.thum.io/get/width/800/crop/600/${this.props.url}`})
    }
}


  render() {
    return (
      <div className='button' onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
        <a href={this.props.url} target='#' id={"Popover" + this.props.id}>
          {this.props.title}
        </a>
        <Popover placement="bottom" isOpen={this.state.popoverOpen} target={"Popover" + this.props.id} toggle={this.toggle}>
          <PopoverBody><img src={this.state.thumb}/></PopoverBody>
        </Popover>
      </div>
    )
  }
}

export default Link;
