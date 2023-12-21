// import "./style.css";
// import { Formik, Field, Form } from "formik";

// import * as Yup from "yup";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import Button from '@mui/material-next/Button';

// const ProfileInputs = ({ profile, setProfile, setVisible }) => {
//   const refInput = useRef(null);
//   const [error, setError] = useState("");
//   const dipatch = useDispatch();
//   const { user } = useSelector((state) => ({ ...state }));
//   const { token } = user;
//   const { firstName, lastName, bio, picture } = profile;
//   const profileOnChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({ ...profile, [name]: value });
//   };

//   const profileValidation = Yup.object({
//     firstName: Yup.string()
//       .required("What's your First name ?")
//       .min(2, "Fisrt name must be between 2 and 16 characters.")
//       .max(16, "Fisrt name must be between 2 and 16 characters.")
//       .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
//     lastName: Yup.string()
//       .required("What's your Last name ?")
//       .min(2, "Last name must be between 2 and 16 characters.")
//       .max(16, "Last name must be between 2 and 16 characters.")
//       .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
//     bio: Yup.string()
//       .required("Please enter your bio")
//       .min(10, "Bio must be between 10 and 200 characters")
//       .max(200, "Bio must be between 50 and 200 characters")
//       .matches(
//         /^[-@./#&+\w\s]*$/,
//         "Numbers and special characters are not allowed."
//       ),
//   });

//   const onProfileSave = async (values) => {
//     try {
//       const file = refInput.current.files[0];

//       const formData = new FormData();
//       for (let value in values) {
//         formData.append(value, values[value]);
//       }
//       formData.append("picture", file);

//       const { data } = await axios.post(
//         `${process.env.REACT_APP_BACKEND_URL}/profile`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//             "x-access-token": token,
//           },
//         }
//       );
//       dipatch({ type: "LOGIN", payload: data }); // using redux - it is calling action
//       setError("");
//       toast.success(data.message, {
//         position: toast.POSITION.TOP_CENTER,
//       });
//       setTimeout(() => {
//         setVisible(true);
//       }, 2000);
//     } catch (error) {
//       setError(error.response.data.message);
//       toast.error(error.response.data.message, {
//         position: toast.POSITION.TOP_LEFT,
//       });
//     }
//   };

//   return (
//     <div className="profile_wrap">
//       <Formik
//         enableReinitialize
//         initialValues={{
//           firstName,
//           lastName,
//           picture,
//           bio,
//         }}
//         validationSchema={profileValidation}
//         onSubmit={(values) => {
//           onProfileSave(values);
//         }}
//       >
//         {(formik) => (
//           <Form className="profile_form" encType="multipart/form-data">
//             <div className="profile_pic">
//               <img src={user.picture} alt="userImg" name="picture" />
//               <input
//                 type="file"
//                 name="picture"
//                 accept="image/*"
//                 ref={refInput}
//                 onChange={(e) => {
//                   const file = e.currentTarget.files[0];
//                   formik.setFieldValue("picture", file);
//                 }}
//               />
//             </div>
//             <div className="profile_first">
//               <label htmlFor="">First Name : </label>
//               <Field
//                 type="text"
//                 placeholder="First Name "
//                 name="firstName"
//                 onChange={profileOnChange}
//                 value={formik.values.firstName}
//               />
//             </div>
//             <div className="profile_last">
//               <label htmlFor="">Last Name : </label>
//               <Field
//                 type="text"
//                 placeholder="Last Name "
//                 name="lastName"
//                 onChange={profileOnChange}
//                 value={formik.values.lastName}
//               />
//             </div>
//             <div className="profile_bio">
//               <label htmlFor="">Enter Bio : </label>
//               <textarea
//                 name="bio"
//                 id=""
//                 cols="30"
//                 rows="10"
//                 onChange={profileOnChange}
//                 value={formik.values.bio}
//               ></textarea>
//             </div>
//             <div className="btn_save">
//               <button type="submit">Save</button>
//               <button onClick={() => setVisible(true)} type="button">
//                 Cancel
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//       <ToastContainer />
//     </div>
//   );
// };

// export default ProfileInputs;

import "./style.css";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProfileInputs = ({ profile, setProfile, setVisible }) => {
  const refInput = useRef(null);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const { token } = user;
  const { userId, firstName, lastName, bio, picture, } = profile;
  const profileOnChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  console.log("in profileInput print  user.pictureUrl :", user.pictureUrl);
  console.log("in profileInput print  profile :", profile);
  console.log("in profileInput print  user.id :", userId);

  const profileValidation = Yup.object({
    firstName: Yup.string()
      .required("What's your First name ?")
      .min(2, "First name must be between 2 and 16 characters.")
      .max(16, "First name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    lastName: Yup.string()
      .required("What's your Last name ?")
      .min(2, "Last name must be between 2 and 16 characters.")
      .max(16, "Last name must be between 2 and 16 characters.")
      .matches(/^[aA-zZ]+$/, "Numbers and special characters are not allowed."),
    bio: Yup.string()
      .required("Please enter your bio")
      .min(10, "Bio must be between 10 and 200 characters")
      .max(200, "Bio must be between 50 and 200 characters")
      .matches(
        /^[-@./#&+\w\s]*$/,
        "Numbers and special characters are not allowed."
      ),
  });

  const onProfileSave = async (values) => {
    try {
      const file = refInput.current.files[0];

      const formData = new FormData();
      console.log("formData: ",values)
      for (let value in values) {
        formData.append(value, values[value]);
      }
      formData.append("picture", file);
      console.log("formData: ",values)

      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/profile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-access-token": token,
          },
        }
      );

      dispatch({ type: "LOGIN", payload: data }); // Dispatching the action
      setError("");
      toast.success(data.message, {
        position: toast.POSITION.TOP_CENTER,
      });
      setTimeout(() => {
        setVisible(true);
      }, 2000);
    } catch (error) {
      setError(error.response.data.message);
      toast.error(error.response.data.message, {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };

  return (
    <div className="profile_wrap">
      <Formik
        enableReinitialize
        initialValues={{
          userId,
          firstName,
          lastName,
          picture,
          bio,
        }}
        validationSchema={profileValidation}
        onSubmit={(values) => {
          onProfileSave(values);
        }}
      >
        {(formik) => (
          <Form className="profile_form" encType="multipart/form-data">
            <div className="profile_pic">
            <img src={user.pictureUrl} alt="userImg" name="picture" />

              <input
                type="file"
                name="picture"
                accept="image/*"
                ref={refInput}
                onChange={(e) => {
                  const file = e.currentTarget.files[0];
                  formik.setFieldValue("picture", file);
                }}
              />
            </div>
            <div className="profile_first">
              <label htmlFor="">First Name : </label>
              <Field
                type="text"
                placeholder="First Name "
                name="firstName"
                onChange={profileOnChange}
                value={formik.values.firstName}
              />
            </div>
            <div className="profile_last">
              <label htmlFor="">Last Name : </label>
              <Field
                type="text"
                placeholder="Last Name "
                name="lastName"
                onChange={profileOnChange}
                value={formik.values.lastName}
              />
            </div>
            <div className="profile_bio">
              <label htmlFor="">Enter Bio : </label>
              <textarea
                name="bio"
                id="bio"
                cols="30"
                rows="10"
                onChange={profileOnChange}
                value={formik.values.bio}
              ></textarea>
            </div>
            <div className="btn_save">
              <button type="submit">Save</button>
              <button onClick={() => setVisible(true)} type="button">
                {/* <Button type="submit">Save</Button>
              <Button onClick={() => setVisible(true)} type="button"> */}
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default ProfileInputs;
