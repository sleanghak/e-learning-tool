import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardMedia } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { motion } from "framer-motion";
import { CardActionArea } from '@mui/material';

export default function AboutMyself({
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
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <CardMedia
                    sx={{ mt: 2, mb: 2 }}
                    component="img"
                    height="400px"
                    image={image}
                    alt="imgMission"
                />
            </motion.div>
            <CardContent sx={{ mt: 2, mb: 2 }}>
                <Typography align='center' variant="subtitle2" gutterBottom component="div">
                    {desc}
                </Typography>
            </CardContent>
        </Card >
    );
};



const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        border: '1px solid #0D99FF',
    }

}));


AboutMyself.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    desc: PropTypes.string,
};

AboutMyself.defaultProps = {
    title: "ABOUT MYSELF",
    image: "/images/sleanghak.jpg",
    desc: "I'm Seirey Leanghak. I was born in Kandal province in 2003. My goal is to keep getting better. I'll use what I learn to create something practical for our everyday lives. Specifically, I wish to fulfill my potential as a Full Stack Developer.",
};
