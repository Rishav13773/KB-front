import React, { useState, useEffect } from 'react'
import { useSelector } from "react-redux";
import axios from 'axios';

import ProfileInputs from './ProfileInputs'
import ShowProfile from './ShowProfile'

const ProfileEdit = () => {
    const [data, setData] = useState([]); // create State to store data value from the response of api(get).

    const [visible, setVisible] = useState(true) // creating state of type boolean for visibility of components 
    const { user } = useSelector((state) => ({ ...state })); //Getting user id ... getting data from redux 

    const [profile, setProfile] = useState([]) //setting / storing profile from the data or userInfos
    console.log("in profile edit printing user.id: " ,user.id ) // printing user id 

    // useEffect(() => {
    //     getItems(); // calling a function through which we getting data from the api(get).
    //   },[user.id]);
    
    //   const getItems = async () => { // written the logoc of fun to get data from api(get).
    //     try {
    //       const response = await axios
    //         .get(`${process.env.REACT_APP_BACKEND_URL}/profile/${user.id}`) ///fetching all projects of user
    //         .then((response) => setData(response.data)); // setting/storing data of response to the data State.
            
    //         const userInfos = { // creating object of user to store userInfo from Sate or redux
    //             userId: data.id,
    //             firstName: data.firstName,
    //             lastName: data.lastName,
    //             picture: data.picture,
    //             bio: data.details.bio,
    //         };

    //         setProfile(userInfos);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/profile/${user.id}`);
                setData(response.data);
    
                const userInfos = {
                    userId: user.id,
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    picture: response.data.picture,
                    bio: response.data.details.bio,
                };
                setProfile(userInfos);
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
    }, [user.id]);
    
      console.log("data: ", data); // printing data 

   
   
    // console.log("in profile edit printing userInfos: " , userInfos ) // pritning userInfos

   

    console.log("in profile edit printing profile: " , profile ) // printing profile
    

    return (
        <div className='profile_wrap'>
            {
                visible ? <ShowProfile profile={profile} setVisible={setVisible} /> : <ProfileInputs profile={profile} setProfile={setProfile} setVisible={setVisible} />
            }
        </div>
    )
}

export default ProfileEdit