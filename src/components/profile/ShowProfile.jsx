import { useSelector } from 'react-redux'
import './style.css'
import { useState } from 'react'

const ShowProfile = ({ setVisible }) => {
    const { user } = useSelector((state) => ({ ...state }))
    console.log(user)
    const handleClick = () => {
        setVisible(false)
    }
    return (
        <>
            {
                
                user ? <div className='sprofile_wrap'>
                    <div className='sprofile_pic'>
                        <img src={user.picture} alt="img" />
                    </div>
                    <div className='sprofile_first'>
                        <label >First Name:</label>
                        <h4>{user.firstName}</h4>
                    </div>
                    <div className='sprofile_last'>
                        <label >Last Name:</label>
                        <h4>{user.lastName}</h4>
                    </div>
                    <div className='sprofile_bio'>
                        <label>Bio:</label>
                        <p>{user.details.bio}</p>
                    </div>
                    <div className='sbtn_save'>
                        <button onClick={handleClick} type='submit'>Edit profile</button>
                    </div>

                </div>
                    :
                    'Profile does not exist'
            }

        </>
    )
}

export default ShowProfile