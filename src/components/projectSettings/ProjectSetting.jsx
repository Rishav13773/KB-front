import "./style.css";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControlLabel, Checkbox, TextField } from "@mui/material";
import { Formik, Field, Form } from "formik";
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

  //Form validation to check
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
    console.log('Reached')
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
    <Dialog open={true} onClose={() => setWindowview(false)}>
      <DialogTitle>
        <div className="icon_close" onClick={() => setWindowview(false)}>
          <AiOutlineCloseCircle />
        </div>
        <h1>Start New Project</h1>
      </DialogTitle>
      <DialogContent>
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
            <Form>
              <div>
                <TextField
                  label="Project Name"
                  variant="outlined"
                  fullWidth
                  onChange={handleOnChange}
                  type="text"
                  name="projectName"
                  value={formik.values.projectName}
                />
              </div>

              <div className="des_wrap">
                <TextField
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                  onChange={handleOnChange}
                  name="description"
                  value={formik.values.description}
                />
              </div>

              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="isPrivate"
                      checked={formik.values.isPrivate}
                      onChange={(e) => {
                        const flag = e.target.checked;
                        formik.setFieldValue("isPrivate", flag);
                      }}
                    />
                  }
                  label="Private"
                />
              </div>
              <DialogActions>
                <Button type="submit">Create</Button>
                <Button onClick={() => setWindowview(false)}>Cancel</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>

    </Dialog>
  );
};

export default ProjectSetting;
