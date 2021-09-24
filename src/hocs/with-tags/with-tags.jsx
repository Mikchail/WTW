import React, {PureComponent} from 'react';
import {getRandomElement} from '../../utils.ts';
import {connect} from 'react-redux';
import {getIsLoading, getTags} from '../../store/reducers/films/films-selectors';

import {getFilmsByGenre, getActiveTag} from '../../store/reducers/shown-films/shown-films-selector';
import { chooseFilm, chooseGenre } from '../../store/actions/shown-film-actions';

const withTags = (Component) => {
  class WithTags extends PureComponent {
    constructor(_props) {
      super();
      this.state = {
        sortedFilms: null,
        sortedTag: `All genres`,
        activeFilm: null,
      };
      // this.handlerSorted = this.handlerSorted.bind(this);
      // this.handlerFilmClick = this.handlerFilmClick.bind(this);
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
const mapStateToProps = (state) => ({
  films: getFilmsByGenre(state),
  tag: getActiveTag(state),
  tags: getTags(state),
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  handlerSorted(activeTag) {
    dispatch(chooseGenre(activeTag));
  },
  handleSelectedFilms(film) {
    dispatch(chooseFilm(film));
  },
});
export {withTags};
export default (Component) => connect(mapStateToProps, mapDispatchToProps)(withTags(Component));
