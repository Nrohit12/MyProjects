import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createProject } from "../redux/actions/projectActions";

const CreateProject = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const state = {
      title,
      content,
    };
    props.createProject(state);
    props.history.push("/");
  };
  const handleChange = (e) => {
    e.target.id === "title"
      ? setTitle(e.target.value)
      : setContent(e.target.value);
  };
  const { auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="container">
      <form className="white" onSubmit={(e) => handleSubmit(e)}>
        <h4 className="grey-text text-darken-4">Create New Project</h4>
        <div className="input-field">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={(e) => handleChange(e)} />
        </div>
        <div className="input-field">
          <label htmlFor="content">Project Content</label>
          <textarea
            className="materialize-textarea"
            id="content"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn black lighten-2 z-depth-0">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchTOProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project)),
  };
};

export default connect(mapStateToProps, mapDispatchTOProps)(CreateProject);
