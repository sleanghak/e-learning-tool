import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from '@mui/material';

export default function Divider() {
    const classes = useStyles();
    return (
        <Box sx={{ mb: 2, ml: 35, mr: 35, mt: 2 }}>
            <Box className={classes.divider} />
        </Box>
    );
};


const useStyles = makeStyles((theme) => ({
    root: {
        // padding: '15px 250px 15px 250px',
    },
    divider: {
        width: "auto",
        height: 2,
        backgroundColor: '#0D99FF',
        boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
    },
}));
