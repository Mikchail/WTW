export interface IFilm {
  id: number;
  title: string;
  srcMovie: string;
  genre: string;
  rating: number;
  countRating: number;
  descriptin: string;
  year: number;
  src: string;
  director: string;
  background_color: string;
  background_image: string;
  poster_image: string;
  isFavorite: boolean;
  starring: string[];
  reviews: IReview[];
}

export interface IReview {
  description: string;
  author: string;
  date: string;
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  avatar_url: string;
}

export interface IComment {
  comment: string;
  rating: number; 
}
