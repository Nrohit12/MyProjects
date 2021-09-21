import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../redux/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Projects</NavLink>
      </li>
      <li>
        <button
          className="waves-effect waves-light btn-flat "
          onClick={props.signOut}
        >
          Log Out
        </button>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating black lighten-1">
          {props.profile.initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(SignedInLinks);
