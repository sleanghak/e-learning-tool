import React from 'react';
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Player } from "video-react";
import { Box } from '@mui/material';

export default function VideoHeader({
    posterImg,
    srcVideo,
}) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Player
                playInline
                poster={posterImg}
                autoPlay={false}
                src={srcVideo}
            />
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: 'auto',
        height: 'auto',
    },

}));

VideoHeader.propTypes = {
    posterImg: PropTypes.string.isRequired,
    srcVideo: PropTypes.string.isRequired,
};

VideoHeader.defaultProps = {
    posterImg: "https://media.bitdegree.org/storage/media/images/2018/08/what-is-a-web-developer.jpg",
    srcVideo: "./video/Demo Project Database.webm",
};

