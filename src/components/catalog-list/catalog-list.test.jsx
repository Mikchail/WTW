import React from 'react';
import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import configureStore from 'redux-mock-store';
import { Router as BrowserRouter } from 'react-router-dom';
import { films } from '../../../mocks/films';
import CatalogList from './catalog-list';
import history from '../../history';
import { Provider } from 'react-redux';
const mockStore = configureStore([]);

jest.mock("history", () => ({
  createLocation: jest.fn,
  createBrowserHistory: () => {
    return {
      listen: jest.fn,
      createHref: jest.fn,
      push: jest.fn(),
      location: {
        pathname: `/singin`,
      }
    }
  }
}))
describe(`CatalogList is testing`, () => {
  it(`Renderer Catalog with props`, async () => {
    const store = mockStore({});
    const onSelectedFilm = () => { };

    render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <CatalogList history={history} films={films} onSelectedFilm={onSelectedFilm} />
        </BrowserRouter>
      </Provider>
    )
    const filmItems = await screen.findAllByTestId("film-item");
    expect(filmItems.length).toBe(films.length)
    expect(screen.getByText(/Films/i)).toBeInTheDocument();
  });
});
