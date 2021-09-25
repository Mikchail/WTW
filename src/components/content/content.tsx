import React, {FC} from 'react';
import {IFilm} from '../../models/models';
import CatalogList from '../catalog-list/catalog-list';
import CotalogMore from '../catalog-more/catalog-more';
import Footer from '../footer/footer';
import Loading from '../loading/loading';
import TagList from '../tag-list/tag-list';

type Props = {
  films: IFilm[],
  tags: string[],
  activeTag: string,
  handlerSorted: () => void,
  history: any,
  isLoading: boolean,
  numberOfmovie: number,
  addMovies: () => void,
  resetMovies: () => void,
};

const Content: FC<Props> = (props) => {
  const {films, tags, activeTag, handlerSorted, isLoading, numberOfmovie, addMovies, resetMovies} = props;
  const showFilms = films.slice(0, numberOfmovie);
  return (
    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        {isLoading ? (
          <TagsAndList
            films={showFilms}
            activeTag={activeTag}
            handlerSorted={handlerSorted}
            tags={tags}
            resetMovies={resetMovies}
          />
        ) : (
          <Loading />
        )}
        {numberOfmovie < films.length && <CotalogMore addMovies={addMovies} />}
      </section>

      <Footer />
    </div>
  );
};

type PropsTagsAndList = {
  films: IFilm[],
  tags: string[],
  handlerSorted: (tag: string) => void,
  resetMovies: () => void,
  activeTag: string,
}

const TagsAndList: FC<PropsTagsAndList> = ({activeTag, handlerSorted, tags, films, resetMovies}) => (
  <React.Fragment>
    <TagList resetMovies={resetMovies} activeTag={activeTag} handlerSorted={handlerSorted} items={tags} />
    <CatalogList films={films} />
  </React.Fragment>
);

export default Content;
