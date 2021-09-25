import React, {FC} from 'react';
import {Route, Redirect, RouteComponentProps, RouteProps} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../store/reducers/user/user-reducer';
import {getAuthStatus} from '../../store/reducers/user/user-selector';
import Loading from '../loading/loading';
import {RootState} from '../../store/reducers/root-reducer';
import {IAuth} from '../../models/models';

type Props = {
  auth: IAuth,
  render: (routerProps: RouteComponentProps) => React.ReactNode,
} & RouteProps;

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

const mapStateToProps = (state: RootState) => ({
  auth: getAuthStatus(state),
});

export {PrivateRouter};
export default connect(mapStateToProps)(PrivateRouter);
