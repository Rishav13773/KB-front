// ProfilePage.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import {
    Container,
    Paper,
    Avatar,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';


const ShowProfile = ({profile, setVisible} ) => {
   

    const { user } = useSelector((state) => ({ ...state }));
    const { token } = user;
    const { firstName, lastName, bio, picture } = profile;

    console.log("profile in showProfile ", profile);
    // console.log("picture from profile: ". )

    const ChangeVisiblity=() =>{
        setVisible(false);
    }

   
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} align="center">
                        <Avatar
                            alt="Profile Picture"
                            src={picture}
                            sx={{ width: 150, height: 150 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Typography variant="h4" gutterBottom>
                            {firstName} {lastName}
                        </Typography>
                        {/* <Typography variant="subtitle1" gutterBottom>
                            {email}
                        </Typography> */}
                        <Typography variant="body1" paragraph>
                            {bio}
                        </Typography>
                    </Grid>
                </Grid>
                <Divider style={{ margin: '20px 0' }} />
                <List>
                    <ListItem>
                        <ListItemText primary="Bio" secondary={bio} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Location" secondary="City, Country" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Phone" secondary="+123 456 7890" />
                    </ListItem>
                    {/* Add more relevant fields as needed */}
                </List>
            </Paper> 
            <button onClick={ChangeVisiblity}> Edit Profile </button>
        </Container>
    );
};

export default ShowProfile;
