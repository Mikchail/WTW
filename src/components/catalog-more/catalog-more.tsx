import React, { FC } from 'react';

type Props = {
  addMovies: () => void;
}

const CatalogMore: FC<Props> = (props) => {
  const {addMovies} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={addMovies}>
        Show more
      </button>
    </div>
  );
};

export default CatalogMore;
