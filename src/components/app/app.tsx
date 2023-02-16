import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Router as BrowserRouter, Switch, Route, Link, Redirect, RouteChildrenProps } from 'react-router-dom';
import Main from '../main/main';
import Singin from '../singin/singin';
import Addreview from '../addreview/addreview';
import MoviePage from '../pages/movie/movie';
import PrivateRouter from '../private-route/private-route';
import history from '../../history';
import MylistPage from '../pages/mylist-page/mylist-page';
import Player from '../player/player';
import withPlayer from '../../hocs/withPlayer/withPlayer';
import withTags from '../../hocs/with-tags/with-tags';
import Loading from '../loading/loading';
import { getIsLoading } from '../../store/reducers/films/films-selectors';
import { RootState } from '../../store/reducers/root-reducer';

const VideoWrappedPlayer = withPlayer(Player);
const MainWithTags = withTags(Main);

type Props = {
  isLoading: boolean,
};

const App: FC<Props> = (props) => {
  const { isLoading } = props;
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <MainWithTags history={history} />;
          }}
        />
        <Route path="/singin">
          <Singin />
        </Route>
        <PrivateRouter
          path="/films/:id/review"
          render={(routerProps: RouteChildrenProps<{ id?: string }>) => {
            const selectedID = routerProps?.match?.params?.id;
            if (!selectedID) {
              return <Redirect to="/" />;
            }
            return isLoading ? (
              <div style={{ background: `black`, height: `100vh` }}>
                <Loading />
              </div>
            ) : (
              <Addreview selectedID={+selectedID} />
            );
          }}
        />
        <Route
          path="/films/:id"
          exact
          render={(routerProps: RouteChildrenProps<{ id?: string }>) => {
            const selectedID = routerProps?.match?.params?.id;
            if (!selectedID) {
              return <Redirect to="/" />;
            }
            return isLoading ? (
              <div style={{ background: `black`, height: `100vh` }}>
                <Loading />
              </div>
            ) : (
              <MoviePage selectedID={+selectedID} history={history} />
            );
          }}
        />
        <PrivateRouter
          render={() => {
            return <MylistPage />;
          }}
          path="/mylist"
        />
        <Route
          path="/player/:id"
          render={(routerProps: RouteChildrenProps<{ id?: string }>) => {
            const selectedID = routerProps?.match?.params?.id;
            console.log(selectedID);
            if (!selectedID) {
              return <Redirect to="/" />;
            }
            return isLoading ? (
              <div style={{ background: 'black', height: '100vh' }}>
                <Loading />
              </div>
            ) : (
              <VideoWrappedPlayer history={routerProps.history} selectedID={+selectedID} {...props} />
            );
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

const mapStateToProps = (state: RootState) => ({
  isLoading: getIsLoading(state),
});

export default connect(mapStateToProps)(App);
