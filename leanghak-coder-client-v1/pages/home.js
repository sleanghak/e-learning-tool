import React from 'react';
import { makeStyles } from "@mui/styles";
import { Box, Button, IconButton } from '@mui/material';
import { Title, Paragraph } from "../components/atoms/typographys";
import { Footer } from "../components/templates/layouts";
import { UserAppBar } from "../components/templates/appbars";
import { CopyLink } from './../components/molecules';

export default function Home() {
    const classes = useStyles();
    return (
        <Box>
            {/* AppBar */}
            <Box>
                <UserAppBar /><br /><br /><br />
            </Box>


            {/* Footer */}
            <Box><br /><br /><br />
                <Footer />
            </Box>
        </Box>
    );
};



const useStyles = makeStyles(({
    root: {
        width: "100%",
    },

}));
