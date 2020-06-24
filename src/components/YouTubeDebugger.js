// Code YouTubeDebugger Component Here
import React, {Component} from 'react'

export default class YouTubeDebugger extends Component{
  constructor(props){
    super();
    this.state={
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
  handleClickBitrate = (e)=>{
      this.setState({
        settings:{
          ...this.state.settings,
          bitrate:12
        }
      })
    }
    handleClickResolution=()=>{
      this.setState({
        settings:{
          ...this.state.settings,
          video:{
            resolution: '720p'
          }
        }
      })
    }
  
  render(){
    console.log(this.state)
    return(<div>
      <button className='bitrate' name='bitrate' onClick={this.handleClickBitrate}>Change Bitrate</button>
      <button className='resolution' name='resolution' onClick={this.handleClickResolution}>Change Resolution</button>
    </div>)
  }
}
