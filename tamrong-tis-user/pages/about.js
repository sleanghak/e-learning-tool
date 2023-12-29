import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import Divider from "../components/atoms/dividers/Divider";
import Header from "../components/molecules/headers/Header";
import Footer from './../components/templates/layout/Footer';
import { vision, mission, leanghak, somavutey, sreysor } from '../utils/constant/about';
import Vision from '../components/molecules/cards/Vision';
import Mission from '../components/molecules/cards/Mission';
import AboutMyself from '../components/molecules/cards/AboutMyself';
import GuestAppBar from '../components/templates/layout/GuestAppBar';

export default function About() {
    return (
        <Box>
            {/* components import GuestAppBar */}
            <GuestAppBar />
            {/* components import headers */}
            <Box>
                <Header />
            </Box>

            {/* components import divider */}

            <Grid item xs={0} sm={12} md={12}>
                <Divider />
            </Grid>


            <Grid sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }} container justifyContent={"center"}>
                <Grid item xs={12} sm={11}>
                    <Grid container spacing={2}>
                        {/* components import Vision */}
                        {vision.map((data, index) => {
                            return (
                                <Grid key={index} item xs={12} sm={6} md={6}>
                                    <Box sx={{ ml: 1, mr: 1, mt: 1 }}>
                                        <Vision
                                            title={data.title}
                                            image={data.image}
                                            desc={data.desc}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })}

                        {/* components import Mission */}
                        {mission.map((data, index) => {
                            return (
                                <Grid key={index} item xs={12} sm={6} md={6}>
                                    <Box sx={{ ml: 1, mr: 1, mt: 1 }}>
                                        <Mission
                                            title={data.title}
                                            image={data.image}
                                            desc={data.desc}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>

                <Box sx={{ ml: 2, mr: 2, mt: 3 }}>
                    <Typography align='center' variant="h6" gutterBottom component="div">ABOUT US</Typography>
                </Box>
                {/* components import AboutMyself */}
                <Grid item xs={12} sm={11}>
                    <Grid container spacing={2}>
                        {somavutey.map((data, index) => {
                            return (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <Box sx={{ ml: 1, mr: 1, mt: 1 }}>
                                        <AboutMyself
                                            title={data.title}
                                            image={data.image}
                                            desc={data.desc}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })}
                        {leanghak.map((data, index) => {
                            return (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <Box sx={{ ml: 1, mr: 1, mt: 1 }}>
                                        <AboutMyself
                                            title={data.title}
                                            image={data.image}
                                            desc={data.desc}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })}

                        {sreysor.map((data, index) => {
                            return (
                                <Grid key={index} item xs={12} sm={6} md={4}>
                                    <Box sx={{ ml: 1, mr: 1, mt: 1 }}>
                                        <AboutMyself
                                            title={data.title}
                                            image={data.image}
                                            desc={data.desc}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid >

                </Grid>
            </Grid >

            {/* components import footer */}
            < Box >
                <Footer />
            </Box >
        </Box >

    );
};

