import React from "react";
import { Box, Grid, } from '@mui/material';
import GuestAppBar from "../components/templates/layout/GuestAppBar";
import Divider from "../components/atoms/dividers/Divider";
import Header from "../components/molecules/headers/Header";
import Footer from './../components/templates/layout/Footer';
import CourseCard from "../components/organisms/cards/CourseCard";
import { courseCard } from "../utils/constant/courseCard";


export default function Home() {
    return (
        <Box >

            {/* components import GuestAppBar */}
            <Box>
                <GuestAppBar />
            </Box>
            
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

                    <Grid container spacing={1}>
                        {/* components import CourseCard */}
                        {courseCard.map((data, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                                    <Box sx={{ ml: 1, mr: 1, mt: 1 }}>
                                        <CourseCard
                                            image={data.image}
                                            title={data.title}
                                            alt={data.alt}
                                            name={data.name}
                                            hour={data.hour}
                                            minute={data.minute}
                                            rate={data.rate}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>



            {/* components import footer */}
            < Box >
                <Footer />
            </Box >
        </Box >
    );
};