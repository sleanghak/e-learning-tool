import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, } from '@mui/material';
import { makeStyles } from '@mui/styles';



const IconTypography = ({
    title,
    icon
}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.icon}>
                {icon}
            </Box>
            <Typography variant='primary' flexWrap>
                {title}
            </Typography>
        </Box>
    );
};
export default IconTypography;

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        display: 'flex',
        alignItems: 'end',
    },
    icon: {
        display: 'flex',
        marginRight: 30,
        [theme.breakpoints.down("md")]: {
            marginRight: 20,
        },
        [theme.breakpoints.down("sm")]: {
            marginRight: 10,
        },
    },
}));

IconTypography.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.any,
};

IconTypography.defaultProps = {
    title: '(+855) 87 84 19 63',
};