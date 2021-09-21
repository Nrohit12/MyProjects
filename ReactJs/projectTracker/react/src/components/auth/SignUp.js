import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../redux/actions/authActions";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const state = {
    email,
    password,
    firstName,
    lastName,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.signUp(state);
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "firstName":
        setFirstName(e.target.value);
        break;
      default:
        setLastName(e.target.value);
    }
  };
  const { auth, authError } = props;
  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <form className="white" onSubmit={(e) => handleSubmit(e)}>
        <h4 className="grey-text text-darken-4">Sign Up</h4>
        <div className="input-field">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" onChange={(e) => handleChange(e)} />
        </div>
        <div className="input-field">
          <label htmlFor="firstName">Last Name</label>
          <input type="text" id="lastName" onChange={(e) => handleChange(e)} />
        </div>
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
          <button className="btn black lighten-2 z-depth-0">Register </button>
        </div>

        <div className="red-text center">
          {authError ? <p>{authError}</p> : null}
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
