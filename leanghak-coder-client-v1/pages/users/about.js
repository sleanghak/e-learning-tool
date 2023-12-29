import React from 'react';
import { makeStyles } from "@mui/styles";
import { Box } from '@mui/material';
import { Title, Paragraph } from "./../../components/atoms/typographys";
import { Footer } from "./../../components/templates/layouts";
import { UserAppBar } from "./../../components/templates/appbars";

export default function About() {
    const classes = useStyles();
    return (
        <Box>
            {/* AppBar */}
            <Box>
                <UserAppBar />
            </Box>
            About
            {/* Footer */}
            <Box>
                <Footer />
            </Box>
        </Box>
    );
};



const useStyles = makeStyles( ({
    root: {
        width: "100%",
    },

}));

