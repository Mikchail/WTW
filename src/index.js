import React from 'react';
import ReactDOM from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {redirect} from './store/middlewares/redirect';
import {createAPI} from './api';
import reducer from './store/reducers/root-reducer';
import App from './components/app/app';
import sagas from './store/sagas';
import { triggerLoadFilms } from './store/actions/films-actions';
import { triggerCheckAuth } from './store/actions/user-actions';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const onUnauthorize = () => {
  // вызов разлогиванивания
};

export const API = createAPI(onUnauthorize);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(API)), applyMiddleware(redirect), applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas)

store.dispatch(triggerLoadFilms());
store.dispatch(triggerCheckAuth());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector(`#root`)
);
