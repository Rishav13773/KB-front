import axios from 'axios';
import { Form, Formik, Field } from 'formik'
import Cookies from 'js-cookie';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from "yup";

const LoginForm = () => {
    const loginInfos = { email: '', password: '' }
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [login, setLogin] = useState(loginInfos);
    const { email, password } = login;
    const handleLoginChange = (e) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };
    const loginValidation = Yup.object({
        email: Yup.string()
            .required("Email address is required.")
            .email("Must be a valid email.")
            .max(100),
        password: Yup.string().required("Password is required"),
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const loginSubmit = async () => {
        try {
            setLoading(true);
            const { data } = await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/login`,
                {
                    email,
                    password,
                }
            );
            dispatch({ type: "LOGIN", payload: data });
            Cookies.set("user", JSON.stringify(data));
            navigate("/home");
        } catch (error) {
            setLoading(false);
            setError(error.response.data.message);
        }
    };

    return (
        <div className='register'>
            <Formik
                enableReinitialize
                initialValues={{
                    email, password
                }}
                validationSchema={loginValidation}
                onSubmit={() => { loginSubmit() }}
            >
                {(formik) => (
                    <Form className='register_form'>
                        <div className="reg_mail">
                            <Field onChange={handleLoginChange} type="email" placeholder='Email address' name='email' />
                        </div>
                        <div className="reg_pass reg_mail">
                            <Field onChange={handleLoginChange} type="password" placeholder='Enter your password' name='password' />
                        </div>

                        <div className="btn_sub">
                            <button disabled={loading} type='submit'>Submit</button>
                        </div>

                    </Form>
                )}
            </Formik>
            <div className="reg_nav">
                <h5>Don't have an account ? <span style={{ color: '#a0cfde', cursor: 'pointer' }} onClick={() => navigate('/')}>Sign up</span></h5>
            </div>
        </div>
    )
}

export default LoginForm