import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Toolbar, Button, } from "@mui/material";
import { LeanghakCoderLogo } from './../../atoms';
import { Box,  } from '@mui/material';
import { GuestDrawer } from './../layouts';

const GuestAppBar = ({ }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} position="static" >
            <Toolbar className={classes.toolbar} >
                <Box sx={{ display: { xs: 'flex', md: 'flex', lg: 'none' }, }}>
                    <GuestDrawer/>
                </Box>

                <LeanghakCoderLogo href="/" />
                <Box className={classes.menus}>
                    <Box sx={{ display: { xs: 'none', md: 'none', lg: 'flex' }, marginRight: 4 }}>
                        <Button className={classes.text} variant="text" href="/">Home</Button>
                        <Button className={classes.text} variant="text" href="/alumni">Alumni</Button>
                        <Button className={classes.text} variant="text" href="/student-projects">Student&apos;s Project</Button>
                        <Button className={classes.text} variant="text" href="/about">About</Button>
                        <Button className={classes.text} variant="text" href="/contact">Contact</Button>
                    </Box>

                    <Button className={classes.login} size="medium" variant="outlined" href="/auth/login">
                        Login
                    </Button>
                </Box>
            </Toolbar>
        </Box>
    );
};

export default GuestAppBar;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f9fafb',
        borderBottom: ' 1px solid #eaeaea',
    },
    toolbar: {
        // height: 50,
        boxSizing: 'border-box',
    },
    menus: {
        display: "flex",
        marginLeft: "auto",
        alignItems: "center",
        gap: 5,
    },
    text: {
        textTransform: 'none',
        color: '#25265EB3',
    },
    login: {
        backgroundColor: ' #55ACEE',
        color: '#FFF',
        textTransform: 'none',
        border: '1px solid #55ACEE',
        "&:hover": {
            backgroundColor: ' #55ACEE',
            border: '1px solid #55ACEE',
        },
    },
}));

GuestAppBar.defaultProps = {

};

GuestAppBar.propTypes = {

};