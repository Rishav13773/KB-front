import React from 'react'
import LoginForm from '../../components/login/LoginForm'
import '../register/style.css'

const Login = () => {
    return (
        <div className='login'>
            <div className="login_header">
                <h1> Welcome to Personal Knowledge <span style={{ color: '#a0cfde' }}>Base</span></h1>
            </div>
            <div className="login_wrap">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login