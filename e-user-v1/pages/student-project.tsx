import React from 'react';
import { makeStyles } from '@mui/styles';
import { RCFooter, RCGuestAppBar } from "./../components/templates";
import { RCTypograpy, RCTitle } from "../components/atoms";
import { Box, Grid, Typography } from '@mui/material';
import { RCProjectCard } from './../components/organisms/rc-card';
import { projectCard } from './../utils/constant/project-card';

export default function StudentProject() {
    const classes = useStyles();
    return (
        <>
            <RCGuestAppBar />

            <Grid sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }} container justifyContent={"center"}>
                <Grid item xs={11}>
                    <Box textAlign={"center"}>
                        <RCTitle children="PROJECT CREATED BY OUR STUDENT" /><br />
                        <RCTypograpy children="Our students build real-world projects to put theories into practice. Our curriculum has dozens of projects and hundreds of smaller exercises." />
                        <br />
                        <Typography gutterBottom variant="title" component="div">
                            Here are some examples
                        </Typography>
                    </Box>
                    <Box>
                        <Typography gutterBottom variant="title" component="div">
                            {"Front End Development"}
                        </Typography><br />

                        <Grid container spacing={1}>
                            {projectCard.map((item, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <RCProjectCard
                                            key={index}
                                            image={item.image}
                                            title={item.title}
                                            desc={item.desc}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box><br/>

                    <Box>
                        <Typography gutterBottom variant="title" component="div">
                            {"Back End Development"}
                        </Typography><br />

                        <Grid container spacing={1}>
                            {projectCard.map((item, index) => {
                                return (
                                    <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <RCProjectCard
                                            key={index}
                                            image={item.image}
                                            title={item.title}
                                            desc={item.desc}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <RCFooter />
        </>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {

    },
}));
