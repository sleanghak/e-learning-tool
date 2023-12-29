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
            <CardActionArea>
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
            </CardActionArea>
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
    desc: "Our mission is to organize lessons on technology and make it universally accessible and useful.",
};
