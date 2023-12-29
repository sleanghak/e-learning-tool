import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, } from '@mui/material';
import { makeStyles } from '@mui/styles';


const Header = ({ imagePath, title }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} sx={{ backgroundImage: `url(${imagePath})` }}>
            <Box className={classes.title_box}>
                <Typography className={classes.title}>
                    {title}
                </Typography>
            </Box>
        </Box>
    );
}

export default Header;


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '50vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginBottom: 0,
        [theme.breakpoints.down("md")]: {
            height: '50vh',
        },
        [theme.breakpoints.down("sm")]: {
            height: '40vh',
        },
    },
    title_box: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'Arial',
        fontSize: 50,
        fontWeight: 'bold',
        color: '#0D99FF',
        textAlign: 'center',
        textShadow: '-3px -4px 1px #D3EDFF',
        [theme.breakpoints.down("md")]: {
            fontSize: 40,
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: 30,
        },
    }
}));


Header.propTypes = {
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string,
};

Header.defaultProps = {
    imagePath: './images/header.jpg',
    title: 'E-Learning-Tool',
};