import React, { useState } from "react";
import { connect } from "react-redux";
import { signIn } from "../redux/actions/authActions";
import { Redirect } from "react-router-dom";
const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const state = {
    email,
    password,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.signIn(state);
  };
  const handleChange = (e) => {
    e.target.id === "email"
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  };
  const { authError, auth } = props;
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <form className="white" onSubmit={(e) => handleSubmit(e)}>
        <h4 className="grey-text text-darken-4">Sign In</h4>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(e) => handleChange(e)} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="input-field">
          <button className="btn black lighten-2 z-depth-0">Login </button>
        </div>
        {authError ? <div className="red-text center">{authError}</div> : null}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
