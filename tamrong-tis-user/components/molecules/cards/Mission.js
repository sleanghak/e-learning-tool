import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardMedia } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { CardActionArea } from '@mui/material';


export default function Mission({
    title,
    image,
    desc,
}) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <Typography sx={{ mt: 2, mb: 2 }} align='center' gutterBottom variant="h5" component="div">
                {title}
            </Typography>
            <CardMedia
                sx={{ mt: 2, mb: 2 }}
                component="img"
                height="450"
                image={image}
                alt="imgMission"
            />
            <CardContent sx={{ mt: 2, mb: 2 }}>
                <Typography align='center' variant="subtitle2" gutterBottom component="div">
                    {desc}
                </Typography>
            </CardContent>
        </Card>
    );
};


const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        border: '1px solid #0D99FF',
    }

}));



Mission.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string,
};

Mission.defaultProps = {
    title: "MISSION",
    image: "/images/mission.jpg",
    desc: " A mission statement is like a road map of how to achieve the goals set in your vision statement. It defines the purpose of the organization.",
};
