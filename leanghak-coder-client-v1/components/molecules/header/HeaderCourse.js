import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from '@mui/material';
import { Title } from './../../atoms/typographys';

export default function HeaderCourse({ title }) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Typography className={classes.title} sx={{ fontSize: { xs: 20, md: 25, lg: 25 }, maxWidth: 650, fontFamily: 'Barlow', }} variant="h3" gutterBottom>
                {"Build Responsive Real-World Websites with HTML and CSS"}
            </Typography>
            <Typography variant="subtitle2" gutterBottom sx={{ maxWidth: 750, }}>
                {"Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid"}
            </Typography>
        </Box>
    );
};

const useStyles = makeStyles(({
    root: {
        padding: 20,
        width: '100%',
        height: '40vh',
        background: '#00546C',
        backgroundImage: 'radial-gradient(circle at 28% 36%, #00546C, #25265EB3 99%)',
        color: '#fff',
    },
    title: {
        fontWeight: 700,
        lineHeight: 1.5,
    },
}));

HeaderCourse.defaultProps = {
    title: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
};

HeaderCourse.propTypes = {
    title: "Student",
    course: "Basic Web Development",
};