import React, { FC } from 'react';
import TagItem from '../tag-item/tag-item';

type Props = {
  items: string[],
  handlerSorted: (tag: string) => void,
  resetMovies: () => void,
  activeTag: string,
}

const TagList: FC<Props> = (props) => {
  const {items, handlerSorted, resetMovies, activeTag} = props;
  const handlerClick = (item: string) => {
    resetMovies();
    handlerSorted(item);
  };
  return (
    <ul className="catalog__genres-list">
      <TagItem
        activeTag={activeTag}
        handlerSorted={()=>handlerClick(`All genres`)}
        title={`All genres`}
      />
      {items &&
        items.map((item) => {
          return (
            <TagItem
              activeTag={activeTag}
              handlerSorted={()=>handlerClick(item)}
              key={item}
              title={item}
            />
          );
        })}
    </ul>
  );
};

export default TagList;
