import React, { FC } from 'react';

type Props = {
  title: string,
  handlerSorted: (tag: string) => void,
  activeTag: string,
};

const TagItem: FC<Props> = (props) => {
  const {title, handlerSorted, activeTag} = props;
  const handlerClick = (tagTitle: string, evt: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    evt.preventDefault();
    handlerSorted(tagTitle);
  };
  const activeClass = activeTag === title ? ` catalog__genres-item--active` : ``;
  return (
    <li onClick={(evt) => handlerClick(title, evt)} className={`catalog__genres-item${activeClass}`}>
      <a href="#" className="catalog__genres-link">
        {title}
      </a>
    </li>
  );
};

export default TagItem;
