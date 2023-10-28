import React, { useState } from 'react'
import ProfileInputs from './ProfileInputs'
import ShowProfile from './ShowProfile'

const ProfileEdit = () => {
    const [visible, setVisible] = useState(true)
    const userInfos = {
        firstName: '',
        lastName: '',
        picture: '',
        bio: '',
    }
    const [profile, setProfile] = useState(userInfos)

    return (
        <div className='profile_wrap'>
            {
                visible ? <ShowProfile setVisible={setVisible} /> : <ProfileInputs profile={profile} setProfile={setProfile} setVisible={setVisible} />
            }
        </div>
    )
}

export default ProfileEdit