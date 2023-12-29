
import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Box } from '@mui/material';
import PropTypes from "prop-types";
import CircularProgress, { circularProgressClasses, } from '@mui/material/CircularProgress';

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
    return (
        <Box sx={{ position: 'relative' }}>
            <CircularProgress
                variant="determinate"
                sx={{
                    color: (theme) =>
                        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
                }}
                size={40}
                thickness={4}
                {...props}
                value={100}
            />
            <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                    color: (theme) => (theme.palette.mode === 'light' ? '#55ACEE' : '#55ACEE'),
                    animationDuration: '550ms',
                    position: 'absolute',
                    left: 0,
                    [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                    },
                }}
                size={40}
                thickness={4}
                {...props}
            />
        </Box>
    );
}

export default function ProgressBar() {
    const classes = useStyles();
    return (
        <Box sx={{ my: 35, }} className={classes.center}>
            <FacebookCircularProgress />
        </Box>
    );
};


const useStyles = makeStyles((theme) => ({
    center: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

}));


ProgressBar.propTypes = {
    // imgPath: PropTypes.string.isRequired,
};

ProgressBar.defaultProps = {
    // imgPath: "https://cdn-icons-png.flaticon.com/512/3573/3573187.png",
};