import * as actions from "./projectActionTypes";

export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: profile.userId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({
          type: actions.CREATE_PROJECT,
          project,
        });
      })
      .catch((err) => {
        dispatch({
          type: actions.CREATE_PROJECT_ERROR,
          err,
        });
      });
  };
};
