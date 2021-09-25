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
  run_time: number;
  description: string;
  starring: string[];
  reviews: IReview[];
  name: string;
  preview_video_link: string;
  released: string;
  is_favorite: string;
}

export interface IReview {
  id: number;
  rating: number;
  description: string;
  author: string;
  comment: string;
  date: string;
  user: IUser;
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

export interface IAuth {
  status: string;
  error: boolean;
  isProgress: boolean;
}
