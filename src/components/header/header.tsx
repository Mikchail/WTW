import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../../store/reducers/user/user-selector';
import { RootState } from '../../store/reducers/root-reducer';
import { IUser } from '../../models/models';

type Props = {
  className?: string;
  Breadcrumbs?: any;
  id?: number;
  user: IUser | null;
}

const Header: FC<Props> = (props) => {
  const { className, Breadcrumbs, id } = props;
  return (
    <header className={`page-header movie-card__head ${className || ``}`}>
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>
      {Breadcrumbs && <Breadcrumbs id={id} />}
      <div className="user-block">
        {props.user && (
          <div className="user-block__avatar">
            <Link to="/mylist">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </Link>
          </div>
        )}
        {!props.user && (
          <Link
            data-testid="link-signin"
            to="/singin"
            className="user-block__link">
            Sign in
          </Link>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state: RootState) => ({
  user: getUser(state),
});

export default connect(mapStateToProps)(Header);
