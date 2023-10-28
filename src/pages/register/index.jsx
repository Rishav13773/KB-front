import RegisterForm from '../../components/login/RegisterForm'
import './style.css'

const Register = () => {
    return (
        <div className='login'>
            <div className="login_header">
                <h1> Welcome to Personal Knowledge <span style={{ color: '#a0cfde' }}>Base</span></h1>
            </div>
            <div className="login_wrap">
                <RegisterForm />
            </div>
        </div>
    )
}

export default Register