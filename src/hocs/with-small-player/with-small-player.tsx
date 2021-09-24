import React, {PureComponent} from 'react';
type Props = {

}

type State = {
  isPlaying: boolean;
}

const withSmallPlayer = <BaseProps extends Props>(Component: React.ComponentType<BaseProps>) => {
  class WithSmallPlayer extends PureComponent<BaseProps & Props,State> {
    constructor(props: BaseProps & Props) {
      super(props);
      this.state = {
        isPlaying: false,
      };


      this._handleIsPlayingChange = this._handleIsPlayingChange.bind(this);
    }

    _handleIsPlayingChange(isPlaying: boolean) {
      this.setState({
        isPlaying,
      });
    }

    // const playerToggler = (currentTime * 100) / duration + `%`;

    render() {
      return (
        <Component
          {...this.props}
          onIsPlayingChange={this._handleIsPlayingChange}
          isPlaying={this.state.isPlaying}
        ></Component>
      );
    }
  }
  return WithSmallPlayer;
};

export default withSmallPlayer;
