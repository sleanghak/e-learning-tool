import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Box, Avatar, Divider, Stack } from '@mui/material';
import { Card, CardContent, CardActionArea } from '@mui/material';
import { Typography } from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import ClassIcon from '@mui/icons-material/Class';
import VerifiedIcon from '@mui/icons-material/Verified';


export default function UpcomingCourseCard({ profile, title, month, course, desc, desc1, desc2 }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Box className={classes.ribbon}>
                    <span className={classes.ribbonContent}>new</span>
                </Box>

                <Box className={classes.backgroundColor} ><br />
                    <Avatar
                        className={classes.avatar}
                        alt="poster"
                        src={profile}
                        sx={{ width: 80, height: 80, marginLeft: 2, }}
                    />
                </Box><br /><br />
                <CardContent>
                    <Typography className={classes.title} gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>

                    <Stack
                        sx={{ justifyContent: 'space-between', marginTop: 1.5, }}
                        direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}
                    >
                        <Box>
                            <EventIcon />
                            <Typography className={classes.subtitle} variant="subtitle2" gutterBottom>
                                {month} Months
                            </Typography>
                        </Box>
                        <Box>
                            <ClassIcon />
                            <Typography className={classes.subtitle} variant="subtitle2" gutterBottom>
                                {course} Courses
                            </Typography>
                        </Box>
                    </Stack>
                    <Box sx={{ marginTop: 1 }}>
                        <VerifiedIcon className={classes.icon} />
                        <Typography className={classes.desc} variant="subtitle2" gutterBottom>
                            {desc}
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 1 }}>
                        <VerifiedIcon className={classes.icon} />
                        <Typography className={classes.desc} variant="subtitle2" gutterBottom>
                            {desc1}
                        </Typography>
                    </Box>
                    <Box sx={{ marginTop: 1 }}>
                        <VerifiedIcon className={classes.icon} />
                        <Typography className={classes.desc} variant="subtitle2" gutterBottom>
                            {desc2}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

const useStyles = makeStyles(({
    root: {
        width: '100%',
        color: '#25265EB3',
    },
    ribbon: {
        width: 130,
        height: 130,
        position: "absolute",
        top: -40,
        left: -40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 999,
    },
    ribbonContent: {
        transform: "rotate(-45deg) translateY(-20px)",
        position: "absolute",
        width: "150%",
        padding: "35px 0px 10px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ff0000",
        boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.192)",
        color: "#FFFFFF",
        textShadow: "0px 1px 1px rgba(0,0,0,.2)",
        textTransform: "uppercase",
        textAlign: "center",
    },
    backgroundColor: {
        width: '100%',
        height: '10vh',
        background: ' #55ACEE',
        backgroundImage: 'radial-gradient(circle at 28% 36%, #00c5e3,  #55ACEE 99%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    avatar: {
        border: '3px solid #FFF',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,.1)',
    },
    title: {
        fontFamily: 'Barlow',
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.5,
    },
    subtitle: {
        display: 'inline',
        verticalAlign: 'super',
        marginLeft: 10,
    },
    desc: {
        display: 'inline',
        verticalAlign: 'baseline',
        marginLeft: 10,
    },
    icon: {
        verticalAlign: 'sub',
        color: '#55ACEE',
        fontSize: 15,
    },
}));

UpcomingCourseCard.defaultProps = {
    profile: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    month: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
};

UpcomingCourseCard.propTypes = {
    profile: "https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg",
    title: "Basic Web Development",
    month: "4",
    course: "4",
    desc: "Structure pages with HTML",
    desc1: "Present data with tables",
    desc2: "And more.",
};