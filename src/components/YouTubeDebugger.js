// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  state = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  }

  handleBitrateChange = () => {
    this.setState(
      {settings: {...this.state.settings, bitrate: 12}}
      );
  }

  handleResolutionChange = () => {
    this.setState( 
      {settings: {...this.state.settings, video:
        {resolution: '720p'}}}
      );
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrateChange}/>
        <button className="resolution" onClick={this.handleResolutionChange}/>
      </div> 
    )
  }
}