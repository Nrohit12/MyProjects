import * as actionTypes from "../actions/projectActionTypes";
const initSate = {
  projects: [{ id: 1, title: "My project", content: "Some definition" }],
};

const projectReducer = (state = initSate, action) => {
  switch (action.type) {
    case actionTypes.CREATE_PROJECT:
      console.log("create", action.project);
      return state;
    case actionTypes.CREATE_PROJECT_ERROR:
      console.log("error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
