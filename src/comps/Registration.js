import React from 'react'
import { GrOrganization } from 'react-icons/gr'
import { FaUserSecret, FaKey } from 'react-icons/fa'
import { GiConfirmed } from 'react-icons/gi'
import { MdOutlineAlternateEmail } from 'react-icons/md'


const Registration = () => {
    return (
        <div className='register'>
            <h1>Create an account here</h1>
            <div className='input-section'>
                <GrOrganization className='icon_-' />
                <span><input type="text" placeholder='Company name' name='company' required/></span>
            </div>
            <div className='input-section'>
                <MdOutlineAlternateEmail className='icon_-'/>
                <span><input type="email" placeholder='Email address' name='email' required/></span>
            </div>
            <div className='input-section'>
                <FaUserSecret className='icon_-'/>
                <span><input type="text" placeholder='Username' name='username' required/></span>
            </div>
            <div className='input-section'>
                <FaKey className='icon_-' />
                <span><input type="password" placeholder='Password' name='password' required/></span>
            </div>
            <div className='input-section'>
                <GiConfirmed className='icon_-'/>
                <span><input type="password" placeholder='Confirm Password' name='confirm' required/></span>
            </div>
            <button>register</button>
        </div>
    )
}

export default Registration
