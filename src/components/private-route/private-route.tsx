import React, { FC } from 'react';
import {Route, Redirect, RouteComponentProps} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AuthorizationStatus} from '../../store/reducers/user/user-reducer';
import {getAuthStatus} from '../../store/reducers/user/user-selector';
import Loading from '../loading/loading';

type Props = {
    auth: {
      status: string,
      error: boolean,
      isProgress: boolean,
    },
    render: (routerProps: RouteComponentProps) => React.ReactNode;
}

const PrivateRouter: FC<Props> = (props) => {
  const {auth, render} = props;

  const isAuth = auth.status === AuthorizationStatus.AUTH;
  const isProgress = auth.isProgress;

  return (
    <Route
      {...props}
      render={(routerProps: RouteComponentProps) => {
        if (isAuth && !isProgress) {
          return render(routerProps);
        }
        if (isProgress) {
          return <Loading />;
        }

        return <Redirect to="/singin" />;
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: getAuthStatus(state),
});


export {PrivateRouter};
export default connect(mapStateToProps)(PrivateRouter);
