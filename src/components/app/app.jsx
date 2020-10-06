import React, {useState, useEffect} from 'react';
import Main from '../main/main';
import Content from '../content/content';
import Singin from '../singin/singin';
import Addreview from '../addreview/addreview';
import MoviePage from '../pages/movie/movie';
import Mylist from '../mylist/mylist';
import Player from '../player/player';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {getRandomElement} from '../../utils';
import {films} from '../../../mocks/films';
import {tags} from '../../../mocks/tags';
import MylistPage from '../pages/mylist-page/mylist-page';

const App = () => {
  const [sortedFilms, setSortedFilms] = useState(films);
  const [sortedTag, setSortedTag] = useState(`All genres`);

  useEffect(() => {
    const newFilms = films.filter((item) => {
      if (sortedTag === `All genres`) {
        return item;
      }
      return item.genre === sortedTag;
    });
    setSortedFilms(newFilms);
  }, [sortedTag]);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main randomFilm={getRandomElement(films)} />
          <Content
            handlerSorted={setSortedTag}
            tags={tags}
            activeTag={sortedTag}
            films={sortedFilms}
          />
        </Route>
        <Route path="/singin">
          <Singin />
        </Route>
        <Route
          path="/films/:id/review"
          render={(props) => {
            return <Addreview {...props} />;
          }}
        />
        <Route
          path="/films/:id"
          exact
          render={(props) => {
            return <MoviePage {...props} films={films} />;
          }}
        />
        <Route path="/mylist">
          <MylistPage />
        </Route>
        <Route
          path="/player/:id"
          render={(props) => {
            return <Player {...props} films={films} />;
          }}
        />

        <Route
          render={() => (
            <>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;