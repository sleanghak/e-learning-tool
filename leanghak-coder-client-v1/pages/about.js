import React from 'react';
import { makeStyles } from "@mui/styles";
import { Box, Grid } from '@mui/material';
import Image from "next/image";
import { motion } from "framer-motion";
import { Title, Paragraph, TitleAnimate } from "../components/atoms/typographys";
import { Footer } from "../components/templates/layouts";
import { GuestAppBar } from "../components/templates/appbars";

export default function About() {
    const classes = useStyles();
    return (
        <Box>
            {/* AppBar */}
            <Box >
                <GuestAppBar />
            </Box>

            <Grid sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }} container justifyContent={"center"}>
                <Grid item xs={12} sm={11}>

                    {/* header title */}
                    <Box textAlign="center">
                        <TitleAnimate>
                            <Title title='About Us' />
                        </TitleAnimate><br />
                        <Paragraph title="It is not a problem if you don&apos;t know and learn. It is intellectual if you do not know and do not learn." /><br />
                    </Box>

                    {/* line */}
                    <Box className={classes.line} /><br />

                    {/* profile */}

                    <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                        <Image className={classes.profile}
                            src="/leanghak-profile.jpg"
                            alt="profile"
                            width={300}
                            height={400}
                        />
                    </Grid><br />

                    {/* line */}
                    <Box className={classes.line} /><br />

                    <Box textAlign="center">
                        <TitleAnimate>
                            <Title title="I made this website for what purpose?" />
                        </TitleAnimate>
                    </Box><br />
                </Grid>
            </Grid>

            {/* Footer */}
            <Box>
                <Footer />
            </Box>
        </Box>
    );
};



const useStyles = makeStyles(({
    root: {
        width: "100%",
    },
    profile: {
        borderRadius: 5,
        borderBottom: '7px solid #55ACEE',
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
        "&:hover": {
            boxShadow: "1px 2px 2px 2px rgba(0, 0, 0, 0.25)",
        },
    },
    line: {
        margin: '0 auto',
        backgroundColor: "#FFC107",
        width: 100,
        height: 5,
        borderRadius: 5,
    },
}));

