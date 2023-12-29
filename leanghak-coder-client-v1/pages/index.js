import React from 'react';
import { makeStyles } from "@mui/styles";
import { Box, Grid } from '@mui/material';
import { Title, Paragraph } from "../components/atoms/typographys";
import { Footer } from "../components/templates/layouts";
import { GuestAppBar } from "../components/templates/appbars";
import { UpcomingCourseCard } from './../components/organisms/cards';
import { upcomingCourse } from './../utils/constant/upcomingCourse';
import { ReviewCard } from './../components/organisms/cards';
import { review } from './../utils/constant/alumni';
import { HeaderCourse } from './../components/molecules/header';

export default function Index() {
    const classes = useStyles();
    return (
        <Box>
            {/* AppBar */}
            <Box>
                <GuestAppBar />
            </Box>


            {/* <HeaderCourse/> */}

            {/* UpcomingCourseCard */}
            <Grid sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }} container justifyContent={"center"}>
                <Grid item xs={12} sm={11}>
                    <Grid container spacing={1}>
                        {upcomingCourse.map((data, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                    <Box sx={{ ml: 1, mr: 1, mt: 1 }}>
                                        <UpcomingCourseCard
                                            key={index}
                                            profile={data.profile}
                                            title={data.title}
                                            month={data.month}
                                            course={data.course}
                                            desc={data.desc}
                                            desc1={data.desc1}
                                            desc2={data.desc2}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={11}>
                    <Grid container spacing={1}>
                        {review.map((data, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
                                    <Box sx={{ ml: 1, mr: 1, mt: 1, }}>
                                        <ReviewCard
                                            key={index}
                                            href={data.href}
                                            profile={data.profile}
                                            name={data.name}
                                            title={data.title}
                                            desc={data.desc}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
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

}));


