import React from 'react';
import { makeStyles } from "@mui/styles";
import GuestAppBar from '../components/templates/layout/GuestAppBar';
import Header from '../components/molecules/headers/Header';
import Footer from '../components/templates/layout/Footer';
import Divider from '../components/atoms/dividers/Divider';
import HeaderMenus from '../components/molecules/headerMenus/HeaderMenus';
import { Box, Grid } from '@mui/material';
import { Typography } from '@mui/material';

export default function Scholarship() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>

            {/* components import GuestAppBar */}
            <GuestAppBar />

            {/* components import headers */}
            <Box>
                <Header />
            </Box>

            {/* components import divider */}

            <Grid item xs={0} sm={12} md={12}>
                <Divider />
            </Grid>
            
            {/* components import HeaderMenus */}
            <HeaderMenus />


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

