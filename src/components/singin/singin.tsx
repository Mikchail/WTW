import React, {PureComponent} from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import {connect} from 'react-redux';
import {getUser, getAuthStatus} from '../../store/reducers/user/user-selector';
import {triggerLogin} from '../../store/actions/user-actions';
import { IAuth, IUser } from '../../models/models';
import { AppDispatch } from '../..';
import { RootState } from '../../store/reducers/root-reducer';

type Props = {
  signIn?: (email: string, password: string) => void;
  auth?: IAuth;
  user?: IUser | null;
};

type State = {
  email: string,
  password: string,
};

class SignIn extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: ``,
      password: ``,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.signIn?.(this.state.email,this.state.password);
  }
  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const name = event.target.name as "password" // TODO
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    const {auth} = this.props;
    const isInvalidRequest = auth?.error ? (
      <React.Fragment>
        <div className="sign-in__message">
          <p>Please enter a valid email address</p>
        </div>
      </React.Fragment>
    ) : (
      ``
    );

    return (
      <div className="user-page">
        <Header className={`user-page__head`} />

        <div className="sign-in user-page__content">
          {!this.props.user && (
            <form onSubmit={this.handleSubmit} action="#" className="sign-in__form">
              {isInvalidRequest}
              <div className="sign-in__fields">
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="email"
                    placeholder="Email address"
                    name="email"
                    id="user-email"
                    onChange={this.handleChange}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-email">
                    Email address
                  </label>
                </div>
                <div className="sign-in__field">
                  <input
                    className="sign-in__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="user-password"
                    onChange={this.handleChange}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-password">
                    Password
                  </label>
                </div>
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit">
                  Sign in
                </button>
              </div>
            </form>
          )}
        </div>

        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  signIn: (email: string, password: string) => {
    dispatch(triggerLogin({email, password}));
  },
});

const mapStateToProps = (state: RootState) => ({
  user: getUser(state),
  auth: getAuthStatus(state),
});

export {SignIn};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
