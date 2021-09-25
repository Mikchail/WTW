import React, {PureComponent, ReactElement} from 'react';
import MovieNavLink from './movie-nav-link';
import {IFilm} from '../../../models/models';

type Props = {
  children: ReactElement[],
  film: IFilm,
};

type State = {
  activeTab: null | string,
};

class MovieTabBar extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeTab: null,
    };
    this.setActiveTab = this.setActiveTab.bind(this);
  }

  componentDidMount() {
    const {children} = this.props;
    const activeTab = this.getChildrenLabels(children as ReactElement[])[0];
    this.setActiveTab(activeTab);
  }

  getChildrenLabels(children: ReactElement[]) {
    return children.map(({props}) => props.label);
  }

  setActiveTab(activeTab: string, event?: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    if (event) {
      event.preventDefault();
    }
    const {activeTab: currentTab} = this.state;
    if (currentTab !== activeTab) {
      this.setState({
        activeTab,
      });
    }
  }

  renderTabs() {
    const {children = []} = this.props;
    const {activeTab} = this.state;

    return this.getChildrenLabels(children as ReactElement[]).map((link) => {
      return (
        <MovieNavLink
          key={link}
          link={link}
          className={{active: activeTab === link}}
          onChangeActiveTab={this.setActiveTab}
        />
      );
    });
  }

  render() {
    const {activeTab} = this.state;
    const {children, film} = this.props; 

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">{this.renderTabs()}</ul>
        </nav>
        {React.Children.map(children, (child) => React.cloneElement(child as ReactElement, {activeTab, film}))}
      </div>
    );
  }
}

export default MovieTabBar;
