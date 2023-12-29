import React from 'react';
import { makeStyles } from '@mui/styles';
import { RCFooter, RCGuestAppBar } from "./../components/templates";
import { RCTypograpy, RCTitle } from "../components/atoms";
import { Box, Grid,  } from '@mui/material';
import { RCAboutCard, RCValueCard, RCMemberCard } from './../components/organisms/rc-card';
import { perspectives, values, members } from './../utils/constant/about';


export default function About() {
    const classes = useStyles();
    return (
        <>
            <RCGuestAppBar />

            <Grid sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }} container justifyContent={"center"}>
                <Grid item xs={11}>
                    <Box textAlign={"center"}>
                        <RCTitle children="ABOUT REANCODE 101" /><br />
                    </Box>
                    <Box>
                        <RCTypograpy children="REANCODE 101 is the top Cambodian e-learning platform for students, content creators, and people who want to expand their knowledge. REANCODE 101 provides a digital platform for institutions, training centers and industry-leading experts to share knowledge, tips and tricks, and expertise in the form of video contents. Our platform creates a means to distributing knowledge in a more productive and meaningful way. Students will be able to use REANCODE 101 web as a supporting tool for their lesson reviews, self-learning, and upgrading their skills from anywhere they are via internet. We also provide advertising service for any third-party brand looking to promote their products. Advertisements are curated by our staffs to ensure they fit the guideline." />
                    </Box><br />

                    <Grid container spacing={1}>
                        {perspectives.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={6} lg={6}>
                                    <RCAboutCard
                                        key={index}
                                        image={item.image}
                                        title={item.title}
                                        desc={item.desc}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid><br />

                    <Box sx={{ textTransform: "uppercase", }} textAlign={"center"}>
                        <RCTitle children="OUR CORE VALUES" /><br />
                    </Box>

                    <Grid container spacing={1}>
                        {values.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={4}>
                                    <RCValueCard
                                        key={index}
                                        image={item.image}
                                        desc={item.desc}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid><br />

                    <Box sx={{ textTransform: "uppercase", }} textAlign={"center"}>
                        <RCTitle children="We believe computer science is foundational for all students" /><br />
                    </Box>
                    <Box>
                        <RCTypograpy children="We believe that learning computer science is fundamental to active and informed participation in an increasingly digital society and provides all students with a critical lens for interpreting the world around them. Computer science offers life-changing and economic opportunities, whether they pursue careers in technology or not. We create high-quality, approachable experiences to engage all students in computer science." />
                    </Box><br />

                    <Box sx={{ textTransform: "uppercase", }} textAlign={"center"}>
                        <RCTitle children="We are committed to equity, access, and opportunity" /><br />
                    </Box>
                    <Box>
                        <RCTypograpy children="We believe that every student in every school should have the opportunity to study computer science, regardless of gender, race, nationality, identity, income, family, neighbors or where they come from. To achieve this, we work to identify and eliminate barriers that hinder them. We are committed to providing an integrated environment with equitable access and opportunities for growth and development for students." />
                    </Box><br />

                    <Box sx={{ textTransform: "uppercase", }} textAlign={"center"}>
                        <RCTitle children="We believe in the power of a collaborative education community" /><br />
                    </Box>
                    <Box>
                        <RCTypograpy children="We collaborate with teachers, facilitators, and partners. We value, respect, and learn from the shared expertise of the growing professional computer science education community. We are committed to strengthening this community and we recognize, promote, and amplify the work of all members of this teacher-led movement. We use a unifying approach across diverse and often divided stakeholders." />
                    </Box><br />

                    <Box sx={{ textTransform: "uppercase", }} textAlign={"center"}>
                        <RCTitle children="We&apos;re agile and responsive to feedback" /><br />
                    </Box>
                    <Box>
                        <RCTypograpy children="We act quickly but thoughtfully. We make decisions with available information, and actively collect new data to confirm understanding or inform change. We listen broadly and deeply to a diverse audience and are responsive to feedback." />
                    </Box><br />

                    <Box sx={{ textTransform: "uppercase", }} textAlign={"center"}>
                        <RCTitle children="We act with integrity and transparency" /><br />
                    </Box>
                    <Box>
                        <RCTypograpy children="We act in the best interest of our student-focused mission. In this work, we are accountable to and transparent with our team, Board, donors, facilitators, partners, teachers, and community. We believe in trying new ideas, openly sharing our mistakes, and growing and learning from them. We proactively share information, research, data, processes, decisions, and results. Our products and curriculum are purposefully open for anyone to use or contribute." />
                    </Box><br />

                    <Box sx={{ textTransform: "uppercase", }} textAlign={"center"}>
                        <RCTitle children="We believe broad impact requires thinking big and acting holistically" /><br />
                    </Box>
                    <Box>
                        <RCTypograpy children="We are creating sustainable change in education systems through policies, products, services, and partnerships that impact all levels of education, from the individual student or classroom to entire schools, districts, states, or countries. We strategically use available resources to make long-term investments that will have a positive, lasting impact on students' lives." />
                    </Box><br />

                    <Box sx={{ textTransform: "uppercase", }} textAlign={"center"}>
                        <RCTitle children="Leaderships" /><br />
                        <RCTypograpy children="Board of Directors" />
                    </Box><br />

                    <Grid container spacing={1}>
                        {members.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <RCMemberCard
                                        key={index}
                                        image={item.image}
                                        title={item.title}
                                        desc={item.desc}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid><br />

                    <Box sx={{ textTransform: "uppercase", }} textAlign={"center"}>
                        <RCTitle children="Leadership Teams" />
                    </Box><br />

                    <Grid container spacing={1}>
                        {members.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} lg={3}>
                                    <RCMemberCard
                                        key={index}
                                        image={item.image}
                                        title={item.title}
                                        desc={item.desc}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>

                </Grid>
            </Grid>

            <RCFooter />
        </>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {

    },
}));

