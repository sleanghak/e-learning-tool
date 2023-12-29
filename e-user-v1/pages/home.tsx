import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { RCFooter, RCUserAppBar } from "./../components/templates";
import { RCTypograpy, RCTitle } from "../components/atoms";
import { RCOpeningCourseCard, RCCourseCard, RCReviewCard } from './../components/organisms/rc-card';
import { RCListItemCollapse } from './../components/molecules';
import { openingCours, courseCard, coreValue, coursesFocus, review, listQA } from './../utils/constant/home';
import { RCListTypography } from './../components/atoms';
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";


export default function Home() {
    const classes = useStyles();
    return (
        <>
            <RCUserAppBar />
            <Grid sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }} container justifyContent={"center"}>
                <Grid item xs={11}>
                    <Typography gutterBottom variant="title" component="div">
                        {"UPCOMING COURSES"}
                    </Typography><br />

                    <Grid container spacing={1}>
                        {openingCours.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <RCOpeningCourseCard
                                        key={index}
                                        image={item.image}
                                        level={item.level}
                                        title={item.title}
                                        startDate={item.startDate}
                                        schedule={item.schedule}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid><br /><br />

                    <Box sx={{ textTransform: "uppercase", }} textAlign={"center"}>
                        <RCTitle children="The ​Learning Digital" /><br />
                        <RCTypograpy children="Premium digital skills training for the future of work." />
                    </Box><br />

                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Typography textAlign={"center"} gutterBottom variant="title" component="div">
                                {"Digital Skills Training for the 21st Century"}
                            </Typography>
                            <RCTypograpy children="ReanCode 101 is a world leader in digital skills training, empowering businesses and brands to succeed in the digital age." /><br />
                            <RCTypograpy children="Founded in 2022, ReanCode 101 has worked with teachers from the most innovative companies developing real-world digital education, empowering many professionals and some of the largest corporations in the world." />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Image src="/digital-skills.png" alt="logo" width={350} height={320} />
                        </Grid>
                    </Grid><br />

                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Image src="/core-value.png" alt="logo" width={350} height={320} />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Typography textAlign={"center"} gutterBottom variant="title" component="div">
                                {"CORE VALUE IN OUR SCHOOL"}
                            </Typography>

                            <>
                                {coreValue.map((item, index) => {
                                    return (
                                        <>
                                            <RCListTypography
                                                key={index}
                                                title={item.title}
                                                desc={item.desc}
                                            />
                                        </>
                                    );
                                })}
                            </>

                        </Grid>
                    </Grid><br />

                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Typography textAlign={"center"} sx={{ textTransform: "uppercase", }} gutterBottom variant="title" component="div">
                                {"Courses focused on building strong foundational skills for career growth"}
                            </Typography>
                            <>
                                {coursesFocus.map((item, index) => {
                                    return (
                                        <>
                                            <RCListTypography
                                                key={index}
                                                title={item.title}
                                                desc={item.desc}
                                            />
                                        </>
                                    );
                                })}
                            </>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Image src="/certificate.png" alt="logo" width={450} height={320} />
                        </Grid>
                    </Grid><br />

                    <Typography sx={{ textTransform: "uppercase", }} gutterBottom variant="title" component="div">
                        {"Recommended Courses"}
                    </Typography><br />
                    <Grid container spacing={1}>
                        {courseCard.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <RCCourseCard
                                        key={index}
                                        image={item.image}
                                        level={item.level}
                                        title={item.title}
                                        star={item.star}
                                        learner={item.learner}
                                        lesson={item.lesson}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid><br />


                    <Typography sx={{ textTransform: "uppercase", }} gutterBottom variant="title" component="div">
                        {"Explore Online Courses"}
                    </Typography><br />


                    <Grid container spacing={1}>
                        {courseCard.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <RCCourseCard
                                        key={index}
                                        image={item.image}
                                        level={item.level}
                                        title={item.title}
                                        star={item.star}
                                        learner={item.learner}
                                        lesson={item.lesson}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid><br />


                    <Typography sx={{ textTransform: "uppercase", }} gutterBottom variant="title" component="div">
                        {"Learners Reviews"}
                    </Typography><br />
                    
                    <Grid container spacing={1}>
                        {review.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <RCReviewCard
                                        key={index}
                                        profile={item.profile}
                                        name={item.name}
                                        title={item.title}
                                        desc={item.desc}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid><br />

                    <Typography sx={{ textTransform: "uppercase", }} gutterBottom variant="title" component="div">
                        {"Frequently Asked Questions"}
                    </Typography><br />

                    <Box>
                        {listQA.map((item, index) => {
                            return (
                                <>
                                    <RCListItemCollapse
                                        key={index}
                                        title={item.title}
                                        desc={item.desc}
                                    />
                                </>
                            );
                        })}
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

