// projectActions.js
export const SET_PROJECTS = "SET_PROJECTS";

export const setProjects = (projects) => ({
  type: SET_PROJECTS,
  payload: projects,
});
