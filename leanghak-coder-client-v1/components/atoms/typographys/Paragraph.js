import React from "react";
import styles from './../../../styles/Responsive.module.css'
import PropTypes from "prop-types";
// import makeStyles from '@mui/styles/makeStyles';
import { Typography } from '@mui/material';


export default function Paragraph({ title }) {
    // const classes = useStyles();

    return (
        <Typography className={styles.typography} variant="body1" gutterBottom>
            {title}
        </Typography>
    );
};

// const useStyles = makeStyles(({
//     root: {

//     },
// }));

Paragraph.propTypes = {
    title: PropTypes.string.isRequired,
};

Paragraph.defaultProps = {
    title: "Hello! My name is Typography",
};