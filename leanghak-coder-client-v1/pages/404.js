import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Box } from '@mui/material';
import { Paragraph } from './../components/atoms/typographys';

export default function NotFound() {
    const classes = useStyles();
    return (
        <Box sx={{ my: 35, }} className={classes.root}>
            <Paragraph title='404 | This page could not be found.' />
        </Box>
    );
};


const useStyles = makeStyles(({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

}));
