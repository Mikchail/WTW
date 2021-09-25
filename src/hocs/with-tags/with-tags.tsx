import React, {PureComponent} from 'react';
import {getRandomElement} from '../../utils';
import {connect} from 'react-redux';
import {getIsLoading, getTags} from '../../store/reducers/films/films-selectors';

import {getFilmsByGenre, getActiveTag} from '../../store/reducers/shown-films/shown-films-selector';
import { chooseFilm, chooseGenre } from '../../store/actions/shown-film-actions';
import { RootState } from '../../store/reducers/root-reducer';
import { AppDispatch } from '../..';
import { IFilm } from '../../models/models';

type Props = {
  films: IFilm[];
  handlerSorted: (activeTag: string) => void;
  handleSelectedFilms: (film: IFilm) => void;
  tags: string[];
  tag: string;
  isLoading: boolean;
}

type State = {
  sortedFilms: any,
  sortedTag: string,
  activeFilm: any,
}

const withTags = <BaseProps extends Props>(Component: React.ComponentType<BaseProps>) => {
  class WithTags extends PureComponent<BaseProps & Props,State> {
    constructor(props: BaseProps & Props) {
      super(props);
      this.state = {
        sortedFilms: null,
        sortedTag: `All genres`,
        activeFilm: null,
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          randomFilm={getRandomElement(this.props.films)}
          handlerSorted={this.props.handlerSorted}
          handleSelectedFilms={this.props.handleSelectedFilms}
          tags={this.props.tags}
          activeTag={this.props.tag}
          films={this.props.films}
          isLoading={this.props.isLoading}
        />
      );
    }
  }
  return WithTags;
};
const mapStateToProps = (state: RootState) => ({
  films: getFilmsByGenre(state),
  tag: getActiveTag(state),
  tags: getTags(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  handlerSorted(activeTag: string) {
    dispatch(chooseGenre(activeTag));
  },
  handleSelectedFilms(film: IFilm) {
    dispatch(chooseFilm(film));
  },
});
export {withTags};
export default (Component: React.ComponentType<any>) => connect(mapStateToProps, mapDispatchToProps)(withTags(Component));
