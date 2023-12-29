import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Typography, Box } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function List({ children }) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <VerifiedIcon className={classes.icon} />
            <Typography className={classes.desc} variant="subtitle2" gutterBottom>
                {children}
            </Typography>
        </Box>
    );
};


const useStyles = makeStyles(({
    root: {
        color: '#25265EB3',
    },
    desc: {
        display: 'inline',
        verticalAlign: 'baseline',
        marginLeft: 10,
    },
    icon: {
        verticalAlign: 'sub',
        color: '#0099c3',
        fontSize: 15,
    },
}));

List.defaultProps = {
    children: PropTypes.string.isRequired,
};

List.propTypes = {
    children: "Student",
};