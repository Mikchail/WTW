import { IFilm } from 'models/models';
import React, {PureComponent} from 'react';
import {Subtract} from 'utility-types';
const COUNT_OF_FILMS = 4;


type Props = {
  history: any,
  handlerSorted: (activeTag: string) => void,
  tags: string[],
  activeTag: string,
  films: IFilm[]
  isLoading: boolean,
}

type State = {
  numberOfmovie: number,
}

type InjectedProps = {
  numberOfmovie: number,
  addMovies: () => void,
  resetMovies: () => void,
}

const withCountFilms = (Component: React.ComponentType<Props & InjectedProps>) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectedProps>;
  class WithCountFilms extends PureComponent<T,State> {
    constructor(props: Props) {
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
          {...this.props}
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
