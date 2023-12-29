import React from 'react';
import { makeStyles } from "@mui/styles";
import GuestAppBar from '../components/templates/layout/GuestAppBar';
import Header from '../components/molecules/headers/Header';
import Footer from '../components/templates/layout/Footer';
import Divider from '../components/atoms/dividers/Divider';
import { Box, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import VideoHeader from '../components/molecules/headerVideo/VideoHeader';

export default function video() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
           
            {/* components import GuestAppBar */}
            <GuestAppBar />

            {/* components import headers */}
            <Box>
                {/* <Header /> */}
                <VideoHeader />
            </Box>

            {/* components import divider */}

            <Grid item xs={0} sm={12} md={12}>
                <Divider />
            </Grid>


            {/* components import Footer */}
            <Footer />
        </Box>
    );
};


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },

}));


