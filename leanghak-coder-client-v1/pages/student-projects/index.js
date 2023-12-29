import React from 'react';
import { makeStyles } from "@mui/styles";
import { Box } from '@mui/material';
import { Title, Paragraph } from "../../components/atoms/typographys";
import { Footer } from "../../components/templates/layouts";
import { GuestAppBar } from "../../components/templates/appbars";

export default function StudentProject() {
    const classes = useStyles();
    return (
        <Box>
            {/* AppBar */}
            <Box>
                <GuestAppBar />
            </Box>
            StudentProject
            {/* Footer */}
            <Box>
                <Footer />
            </Box>
        </Box>
    );
};



const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },

}));

