import React from "react";
import { Typography, Box } from "@mui/material";
import { Player } from "video-react";
const PlayVideoCard = ({
    coverFileName,
    isPlay,
    fileName,
    name,
    desc,
}) => {
    return (
        <Box>
            <Player
                className="video"
                playInline
                poster={coverFileName}
                autoPlay={isPlay}
                src={fileName}
            />
            <br />
            {name && <Typography variant="h6">{name}</Typography>}
            {desc && <Typography>{desc} </Typography>}
        </Box>
    );
};

export default PlayVideoCard;
