import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { films } from '../../../mocks/films';
import App from './app';
import NameSpace from '../../store/name-space';

const mockStore = configureStore([]);
describe(`App`, () => {
  it(`Render pageMain`, async () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        films,
        isLoading: false,
      },
      [NameSpace.SHOW]: {
        currentGenre: `All genres`,
        filmsByGenre: [],
        sameFilms: [],
        selectedFilm: false,
        favoriteFilms: [],
      },
      [NameSpace.USER]: {
        user: false,
        isLogin: false,
      },
      [NameSpace.FILMS]: {
        films: [],
        isLoading: false,
      },
      [NameSpace.SHOWN_FILM]: {
        currentGenre: ""
      },
      [NameSpace.PROMO_FILM]: {
        filmPromo: null
      }
    });

    render(
      <Provider store={store}>
        <App onFilmSelect={() => { }} />
      </Provider>,
    )

    const mainPage = screen.getByTestId("main-page")
    // const signPage = screen.getByTestId("signin-page")
    const linkSign = screen.getByTestId("link-signin")
    const elem = screen.getByText(/WTW/i)
    expect(elem).toBeInTheDocument()
    userEvent.click(linkSign)
    const signPage = await screen.findByTestId("signin-page")
    expect(signPage).toBeInTheDocument()
  });
});
