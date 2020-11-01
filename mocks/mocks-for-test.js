

const movies = [{
  id: 2,
  title: `Bohemian Rhapsody`,
  cardImg: `../../img/bohemian-rhapsody.jpg`,
  genre: `Drama`,
  year: 2000,
  backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
  posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
  rating: 5,
  ratingCount: 240,
  description: `In the 1930s, theher murder.`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`],
  preview: `https://upload.wikimedia.org`,
  videoLink: `https://download.blender4`,
  runTime: 99,
  isFavorite: true,
}, {
  id: 3,
  title: `Macbeth`,
  cardImg: `../../img/macbeth.jpg`,
  genre: `Drama`,
  year: 2002,
  backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
  posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
  rating: 2,
  ratingCount: 240,
  description: `In the 1930s`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`],
  preview: `https://480p.mp4`,
  videoLink: `https://480p.mp4`,
  runTime: 200,
  isFavorite: true,
}, {
  id: 4,
  title: `Aviator`,
  cardImg: `../../img/aviator.jpg`,
  genre: `Comedy`,
  year: 1988,
  backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
  posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
  rating: 7,
  ratingCount: 188,
  description: `in her murder.`,
  director: `Leo Dicaprio`,
  starring: [`Bill Murray`],
  preview: `400p.ogv.360p.webm`,
  videoLink: `mp4`,
  runTime: 188,
  isFavorite: true,
}];
const comments = [{
  "id": 1,
  "user": {
    "id": 4,
    "name": `Kate Muir`
  },
  "rating": 8.9,
  "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  "date": `2019-05-08T14:13:56.569Z`
}, {
  "id": 2,
  "user": {
    "id": 4,
    "name": `Kate Muir`
  },
  "rating": 8.9,
  "comment": `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
  "date": `2019-05-08T14:13:56.569Z`
}];
const newMovie = {
  id: 2,
  title: `Bohemian Rhapsody`,
  cardImg: `../../img/bohemian-rhapsody.jpg`,
  genre: `Drama`,
  year: 2000,
  backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
  posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
  rating: 5,
  ratingCount: 240,
  description: `In the 1930s, theher murder.`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`],
  preview: `https://upload.wikimedia.org`,
  videoLink: `https://download.blender4`,
  runTime: 99,
  isFavorite: false,
};


const newMovies = [{
  id: 2,
  title: `Bohemian Rhapsody`,
  cardImg: `../../img/bohemian-rhapsody.jpg`,
  genre: `Drama`,
  year: 2000,
  backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
  posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
  rating: 5,
  ratingCount: 240,
  description: `In the 1930s, theher murder.`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`],
  preview: `https://upload.wikimedia.org`,
  videoLink: `https://download.blender4`,
  runTime: 99,
  isFavorite: false,
}, {
  id: 3,
  title: `Macbeth`,
  cardImg: `../../img/macbeth.jpg`,
  genre: `Drama`,
  year: 2002,
  backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
  posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
  rating: 2,
  ratingCount: 240,
  description: `In the 1930s`,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`],
  preview: `https://480p.mp4`,
  videoLink: `https://480p.mp4`,
  runTime: 200,
  isFavorite: true,
}, {
  id: 4,
  title: `Aviator`,
  cardImg: `../../img/aviator.jpg`,
  genre: `Comedy`,
  year: 1988,
  backgroundImg: `img/bg-the-grand-budapest-hotel.jpg`,
  posterImg: `img/the-grand-budapest-hotel-poster.jpg`,
  rating: 7,
  ratingCount: 188,
  description: `in her murder.`,
  director: `Leo Dicaprio`,
  starring: [`Bill Murray`],
  preview: `400p.ogv.360p.webm`,
  videoLink: `mp4`,
  runTime: 188,
  isFavorite: true,
}];
const recivedMovies = [
  {
    "actors": undefined,
    "backgroundColor": undefined,
    "description": undefined,
    "genre": undefined,
    "id": undefined,
    "isFavorite": undefined,
    "movieCoverSrc": undefined,
    "numberVotes": undefined,
    "posterSrc": undefined,
    "previewVideoLink": undefined,
    "producer": undefined,
    "rating": undefined,
    "runTime": undefined,
    "screenshotSrc": undefined,
    "title": undefined,
    "videoSrc": undefined,
    "yearRelease": undefined,
  },
];

export {movies , newMovie,newMovies,recivedMovies,comments};