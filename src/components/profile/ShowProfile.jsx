// ProfilePage.js
import React from 'react';
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

const ShowProfile = () => {
    return (
        <Container>
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={3} align="center">
                        <Avatar
                            alt="Profile Picture"
                            src="https://via.placeholder.com/150"
                            sx={{ width: 150, height: 150 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Typography variant="h4" gutterBottom>
                            Your Name
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Your Email
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </Typography>
                    </Grid>
                </Grid>
                <Divider style={{ margin: '20px 0' }} />
                <List>
                    <ListItem>
                        <ListItemText primary="Bio" secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
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
        </Container>
    );
};

export default ShowProfile;
