
import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Card, CardContent, CardActionArea, Avatar } from '@mui/material';
import { Typography, Box } from '@mui/material';

export default function StudentCard({ bgImage, profile, name, title, course, href }) {
    const classes = useStyles();
    return (
        <Card className={classes.root} >
            <CardActionArea href={href}>
                <Box className={classes.backgroundImage} sx={{ backgroundImage: `url(${bgImage})` }}>
                    <br /><br /><br />
                    <Avatar
                        className={classes.avatar}
                        alt="profile"
                        src={profile}
                        sx={{ width: 110, height: 110, marginLeft: 2, }}
                    />
                </Box>
                <br /><br /><br /><br />

                <CardContent>
                    <Box className={classes.cardContent} textAlign="center">
                        <Typography className={classes.name} gutterBottom variant="h6" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ color: '#FFC107', fontSize: 16 }} gutterBottom variant="h6" component="div">
                            {title}
                        </Typography>
                        <Typography sx={{ fontSize: 15 }} variant="h6" gutterBottom>
                            Course : {course}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}


const useStyles = makeStyles(({
    root: {
        width: '100%',
        borderBottom: '5px solid #55ACEE',
    },
    backgroundImage: {
        width: '100%',
        height: '15vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    avatar: {
        display: 'block',
        margin: '0 auto',
        border: '3px solid #FFF',
        boxShadow: '0 2px 8px 0 rgba(0,0,0,.1)',

    },
    cardContent: {
        color: '#25265EB3',
    },
    name: {
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.5,
    },
}));

StudentCard.defaultProps = {
    bgImage: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
};

StudentCard.propTypes = {
    bgImage: "http://wallpaperstock.net/laptop-macbook-iphone-apple_wallpapers_54218_852x480.jpg",
    profile: "https://yt3.ggpht.com/OLuhaGN_2txsq-blg1AqTdsCzHw_Rv21CeGTQP2_IUEwQ-S_2ki8iguQPpY7Y9HCMSB4W6n5-ihRmJU=s640-c-fcrop64=1,00000000ffffffff-nd-v1",
    name: " SEIREY Leanghak",
    title: "Student",
    course: "Basic Web Development",
};