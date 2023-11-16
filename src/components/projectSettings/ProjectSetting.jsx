import { Formik, Field, Form } from "formik";
import "./style.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setProjects } from "../../reducers/project/projectsActions";

const ProjectSetting = ({ setWindowview }) => {
  const projectInfo = {
    projectName: "",
    description: "",
    isPrivate: false,
  };
  const { user } = useSelector((state) => ({ ...state }));
  const { token, id } = user;
  const [project, setProject] = useState(projectInfo);
  const { projectName, description, isPrivate } = project;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const projectData = useSelector((state) => state.projects.projects);

  const profileValidation = Yup.object({
    projectName: Yup.string()
      .required("Project Name is required")
      .min(3, "Project Name must be at least 3 characters long"),
    description: Yup.string()
      .required("Description is required")
      .min(3, "Description must be at least 3 characters long")
      .max(150, "Description must be at least 150 characters long"),
    isPrivate: Yup.boolean().notRequired("Private is not required"),
  });

  //Handling onchange events
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  //Handling form submission
  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      for (let data in values) {
        formData.append(data, values[data]);
      }
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/createProject`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(data.project);
      dispatch({ type: "LOADER_SHOW", payload: true });
      setTimeout(() => {
        dispatch(setProjects([...projectData, data.project]));
        navigate(`/projects/${data.project._id}`);
        dispatch({ type: "LOADER_SHOW", payload: false });
      }, 2000);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <div className="projecSetting_window">
      <div className="icon_close" onClick={() => setWindowview(false)}>
        <AiOutlineCloseCircle />
      </div>
      <h1>Start New Project</h1>
      <Formik
        enableReinitialize
        initialValues={{
          projectName,
          description,
          isPrivate,
        }}
        validationSchema={profileValidation}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(formik) => (
          <Form className="form">
            <div>
              <label htmlFor="projectName">Project name: </label>
              <Field
                placeholder="Enter project name"
                onChange={handleOnChange}
                className="name_input"
                type="text"
                name="projectName"
                value={formik.values.projectName}
              />
            </div>

            <div className="des_wrap">
              <label htmlFor="description">Description: </label>
              <textarea
                placeholder="Add description"
                onChange={handleOnChange}
                name="description"
                value={formik.values.description}
                cols="30"
                rows="5"
              ></textarea>
            </div>

            <div>
              <label htmlFor="isPrivate">Private: </label>
              <Field
                type="checkbox"
                name="isPrivate"
                checked={formik.values.isPrivate}
                onChange={(e) => {
                  const flag = e.target.checked;
                  formik.setFieldValue("isPrivate", flag);
                }}
                value={formik.values.isPrivate}
              />
            </div>

            <div className="create_btn">
              <button type="submit">Create</button>
              <button onClick={() => setWindowview(false)}>Cancel</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProjectSetting;
