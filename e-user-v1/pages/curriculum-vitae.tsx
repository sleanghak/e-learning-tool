import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { RCFooter, RCUserAppBar } from "./../components/templates";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { RCTypograpy, RCTitle } from "../components/atoms";
import { RCIconTypography } from "../components/molecules/rc-typography";
import { resume } from "./../utils/constant/contact";
import Image from "next/image";

export default function CurriculumVitae() {
  const classes = useStyles();
  return (
    <>
      <RCUserAppBar /><br />
      <Box textAlign={"center"}>
        <RCTitle children='Create a professional CV/Resume' />
      </Box><br />

      <Box>
        <Grid container justifyContent={"center"}>
          <Grid item xs={11} sm={4} md={4} lg={4}>
            <Box>
              <Image className={classes.profile} src="/photo_2022-05-12_09-56-11.jpg" alt="logo" width={210} height={280} />
            </Box><br />
          </Grid>

          <Grid item xs={11} sm={5} md={5} lg={5}>
            <Box textAlign={'center'} >
              <Typography variant="h4" gutterBottom sx={{ textTransform: 'uppercase', color: '#FFC107', }}>
                seirey leanghak
              </Typography>
              <br />
              <Typography variant="h5" gutterBottom sx={{ textTransform: 'uppercase', color: 'red', }}>
                web developer
              </Typography>
            </Box><br />
            <RCTypograpy children='I&apos;m Seirey Leanghak. I was born in Kandal province in 2003. My goal is to keep getting better. I&apos;ll use what I learn to create something practical for our everyday lives. Specifically, I wish to fulfill my potential as a Full Stack Developer.' />
          </Grid>

          <Grid item xs={11} sm={4} md={4} lg={4}>
            <Box>
              <Stack spacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
                <Box >
                  <RCTitle children="Contact Me" />
                </Box>
                {resume.map((item, index) => {
                  return (
                    <RCIconTypography
                      key={index}
                      icon={item.icon}
                      title={item.title}
                    />
                  );
                })}
              </Stack>
            </Box><br />

            <Box>
              <Box >
                <RCTitle children="Skills" />
              </Box><br />
              <RCTypograpy children='• Computer Programming: C, JavaScript' />
              <RCTypograpy children='• Web Development : Web Development: HTML, CSS, Bootstrap, Tailwind CSS, Material-UI, StoryBook, Atomic Design, ReactJS, and NextJS' />
              <RCTypograpy children='• Web Service : EmailJS, Firebase ' />
              <RCTypograpy children='• Version Control System(VCS) : GitHub' />
              <RCTypograpy children='• Collaboration tool : Trello, Jira' />
              <RCTypograpy children='• Design tool : Figma' />
              <RCTypograpy children='• Good communication Skill' />
              <RCTypograpy children='• Leadership and mentorship skill' />
            </Box>

            <Box>
              <Box >
                <RCTitle children="Language" />
              </Box><br />
              <RCTypograpy children='• Khmer : Mother tongue' />
              <RCTypograpy children='• English: Medium' />
            </Box>
          </Grid>

          <Grid item xs={11} sm={5} md={5} lg={5}>
            <Box >
              <RCTitle children="Work Experience" />
            </Box><br />
            <RCTypograpy children='• February 2022-August 2022: Internship as a Web Front-end Developer at SabaiCode.' />
            <RCTypograpy children='• September 2022-Present: Freelance UI/UX Designer, Web Front-end Developer at ReanCode101.' />
            <RCTypograpy children='• January 2023-Present: As a part-time teacher in basic web development.' />

            <Box >
              <RCTitle children="Rraning Course" />
            </Box><br />
            <RCTypograpy children='• Successfully finished Microsoft Word and PowerPoint computer classes at Win World School.' />
            <RCTypograpy children='• Successfully finished the Web course at the Information Technology Skill Center.' />

            <Box >
              <RCTitle children="Interests and Hobbies" />
            </Box><br />
            <RCTypograpy children='• Leisure: Learn new technology, coding, listen to music, reading book.' />
            <RCTypograpy children='• Sports: Volleyball and Football.' />

            <Box >
              <RCTitle children="Education" />
            </Box><br />
            <RCTypograpy children='• 2020 - Until now: pursuing a bachelor&apos;s degree in information technology at RUPP.' />
            <RCTypograpy children='• 2017 - 2020 : High School Diploma at Krang Yov high school.' />
          </Grid>
        </Grid>
      </Box>

      <br />
      <RCFooter />
    </>
  );
};


const useStyles = makeStyles((theme) => ({
  root: {

  },
  profile: {
    borderRadius: 5,
    [theme.breakpoints.down("sm")]: {
      display: 'block',
      margin: '0 auto',
    },
  }
}));


