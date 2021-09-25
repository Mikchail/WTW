import React, {PureComponent} from 'react';
const COUNT_OF_FILMS = 4;


type Props ={
}

type State = {
  numberOfmovie: number,
}

const withCountFilms = <BaseProps extends Props>(Component: React.ComponentType<BaseProps>) => {
  class WithCountFilms extends PureComponent<BaseProps & Props,State> {
    constructor(props: BaseProps & Props) {
      super(props);
      this.state = {
        numberOfmovie: COUNT_OF_FILMS,
      };
      this._handlerCountFilmAdd = this._handlerCountFilmAdd.bind(this);
      this._handlerCountFilmReset = this._handlerCountFilmReset.bind(this);
    }

    _handlerCountFilmAdd() {
      this.setState((state) => {
        return {numberOfmovie: state.numberOfmovie + COUNT_OF_FILMS};
      });
    }
    _handlerCountFilmReset() {
      this.setState({numberOfmovie: COUNT_OF_FILMS});
    }
    render() {
      return (
        <Component
          {...this.props as BaseProps}
          numberOfmovie={this.state.numberOfmovie}
          addMovies={this._handlerCountFilmAdd}
          resetMovies={this._handlerCountFilmReset}
        />
      );
    }
  }
  return WithCountFilms;
};

export default withCountFilms;
