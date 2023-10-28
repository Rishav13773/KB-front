import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import HashLoader from "react-spinners/HashLoader";

const RegisterForm = ({ setVisible }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const override: CSSProperties = {
    position: "absolute",
    marginLeft: "6rem",
    marginTop: "2rem",
  };

  const userInfos = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(userInfos);
  const { firstName, lastName, email, password } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  //validating the user details before it send req to server
  const registerValidation = Yup.object({
    firstName: Yup.string()
      .required("What's your First name ?")
      .min(2, "Fisrt name must be between 2 and 16 characters.")
      .max(16, "Fisrt name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    lastName: Yup.string()
      .required("What's your Last name ?")
      .min(2, "Last name must be between 2 and 16 characters.")
      .max(16, "Last name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    email: Yup.string()
      .required(
        "You'll need this when you log in and if you ever need to reset your password."
      )
      .email("Enter a valid email address."),
    password: Yup.string()
      .required(
        "Enter a combination of at least six numbers,letters and punctuation marks(such as ! and &)."
      )
      .min(6, "Password must be atleast 6 characters.")
      .max(36, "Password can't be more than 36 characters"),
  });

  const registerSubmit = async () => {
    //this function handles api call
    console.log("function registerSubmit");
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      setError("");
      setLoading(true);
      setSuccess(data.message);
      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      const { message, ...rest } = data;
      setTimeout(() => {
        dispatch({ type: "LOGIN", payload: rest });
        Cookies.set("user", JSON.stringify(rest));
        navigate("/home");
      }, 2000);
      console.log(rest);
    } catch (error) {
      setLoading(false);
      setSuccess("");
      setError(error.response.data.message);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  return (
    <div className="register">
      <Formik
        enableReinitialize
        initialValues={{ firstName, lastName, email, password }}
        validationSchema={registerValidation}
        onSubmit={() => {
          registerSubmit();
        }}
      >
        {(errors, touched) => (
          <Form className="register_form">
            <div className="reg_mail">
              <Field
                onChange={handleChange}
                type="text"
                placeholder="First name"
                name="firstName"
              />
            </div>

            <div className="reg_mail">
              <Field
                onChange={handleChange}
                type="text"
                placeholder="Last name"
                name="lastName"
              />
            </div>

            <div className="reg_mail">
              <Field
                onChange={handleChange}
                type="email"
                placeholder="Email address"
                name="email"
              />
            </div>

            <div className="reg_pass reg_mail">
              <Field
                onChange={handleChange}
                type="password"
                placeholder="Enter your password"
                name="password"
              />
            </div>

            <div className="btn_sub">
              <button disabled={loading} type="submit">
                Submit
              </button>
            </div>
            <ToastContainer />
          </Form>
        )}
      </Formik>
      {error && <div>{error}</div>}
      <div className="reg_nav">
        <h5>
          Already have an account ?{" "}
          <span
            style={{ color: "#a0cfde", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </h5>
      </div>
      <HashLoader
        cssOverride={override}
        className="loading"
        color="#a0cfde"
        loading={loading}
        size={30}
      />
    </div>
  );
};

export default RegisterForm;
