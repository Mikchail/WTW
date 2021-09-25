import { IFilm } from './models/models';
import {extend} from './utils';
export const adaptiveFilms = (film: IFilm) => {
  return extend(film, {
    title: film.name,
    srcMovie: film.preview_video_link,
    rating: 4,
    countRating: 240,
    year: film.released,
    src: film.background_image,
    src_test: film.poster_image,
    isFavorite: film.is_favorite,
  });
};
/*
id: 0,
title: 'Fantastic Beasts: The Crimes of Grindelwald',
srcMovie:
  'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
genre: 'Documentary',
rating: 4,
countRating: 240,
descriptin:
  'Beautiful & luxurious apartment at great location Nice, cozy, warm big bed apartment Wood and stone place',
year: 2005,
src: '/img/fantastic-beasts--the-crimes-of-grindelwald.jpg',
director: 'Wes Andreson',
starring: [
  'Bill Murray',
  'Edward Norton',
  'Jude Law',
  'Willem Dafoe',
  'and other',
],



*/
