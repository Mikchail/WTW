import React, {FC} from 'react';

type Props = {
  link: string,
  key: string,
  className: {
    active: boolean,
  },
  onChangeActiveTab: (activeTab: string, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void,
};

const MovieNavLink: FC<Props> = (props) => {
  const {link, onChangeActiveTab, className} = props;
  const {active} = className;
  const clazz = active ? ` movie-nav__item--active` : ``;
  return (
    <li onClick={(event) => onChangeActiveTab(link, event)} className={`movie-nav__item${clazz}`}>
      <a href="#" className="movie-nav__link">
        {link}
      </a>
    </li>
  );
};

export default MovieNavLink;
