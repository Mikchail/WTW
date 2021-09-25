import React, {PureComponent} from 'react';

type Props = {
  muted: boolean,
  src: string,
  poster: string,
  isPlaying: boolean
}

type State = {
  
}

class VideoPlayer extends PureComponent<Props, State> {
  private videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props: Props) {
    super(props);

    this.videoRef = React.createRef();
  }
  componentDidMount() {
    const {muted,src,isPlaying} = this.props;
    const video = this.videoRef.current;
    if(video){
      video.muted = muted || false;
      if (isPlaying) {
        video.src = src;
        video.play();
      } else {
        video.src = ``;
        // video.pause();
      }
    }
   
  }

  componentDidUpdate() {
    const video = this.videoRef.current;
    if(video){
      const {src, isPlaying} = this.props;
      video.src = src;
  
  
      if (isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    }
    
  }
  componentWillUnmount() {
    const video = this.videoRef.current;
    if(video){
      video.src = ``;
      video.muted = false;
      video.onplay = null;
    }
   
  }

  render() {
    const {poster} = this.props;
    return (
      <video poster={poster} width="280" height="175" ref={this.videoRef}>
        your browser doesn`t support embedded videos
      </video>
    );
  }
}

export default VideoPlayer;
