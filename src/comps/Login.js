import React from 'react'
import loginImage from './asset/login.png'
import { Link, useNavigate } from 'react-router-dom'
import {FaUserSecret, FaKey} from 'react-icons/fa'

const Login = () => {

    let navigate = useNavigate()

    return (
        <div className='login'>
            <div className='section-1'>
                <img src={loginImage} alt='login'/>
            </div>
            <div className='section-2'>
                <form>
                    <h1>account login here</h1>
                    
                    <div className='input-field'>
                        <FaUserSecret className='icon__' />
                        <span><input type="text" placeholder='Username' name='name' required/></span>
                    </div>
                    <div className='input-field'>
                        <FaKey className='icon__'/>
                        <span><input type="password" placeholder='Password' name='password' required/></span>
                    </div>
                    <Link to="/app/register">Not have a account?</Link>
                    <br/>
                    <button onClick={() => navigate('/app/user/dashboard')}>login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
