import React from "react";
import { makeStyles } from '@mui/styles';
import PropTypes from "prop-types";
import { CardActionArea, Card, CardContent, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CardVideo({ img, title, alt }) {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <CardMedia
                        component="img"
                        height="205"
                        image={img}
                        alt={alt}
                    />
                </motion.div>
                <CardContent>
                    <Typography sx={{ mb: 2 }} variant="h6" gutterBottom component="div">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
};


const useStyles = makeStyles((theme) => ({
    root: {
        width: "auto",
        maxWidth: 500,
        boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
    },

}));

CardVideo.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string,
    alt: PropTypes.string,

};

CardVideo.defaultProps = {
    img: "https://i0.wp.com/hocjavascript.net/wp-content/uploads/2022/02/Lam-the-nao-de-hoc-Full-Stack-Development.jpg",
    title: "video title ",
    alt: "imgVideo"

};