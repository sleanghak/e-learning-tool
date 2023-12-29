import React from "react";
import { makeStyles } from '@mui/styles';
import { Card, CardMedia, CardContent } from "@mui/material";
import { Typography, Box } from '@mui/material';
interface Props {
    image: string,
    title: string,
    date: string,
    desc: string,
}

export default function RCPlayVideoCard({ image, title, date, desc, }: Props) {
    const classes = useStyles();
    return (
        <Card sx={{ border:'0px',}}>
            <CardMedia
                className={classes.root}
                sx={{ height: 450, }}
                image='https://media.sproutsocial.com/uploads/2017/01/Instagram-Post-Ideas.png'
                title="img"
            />
            <CardContent>
                <Box className={classes.content}>
                    <Typography gutterBottom variant="title" component="div">
                        Image’s Title...
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        08-Oct-2022
                    </Typography>
                </Box>
                <Typography variant="subtitle1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                </Typography>
            </CardContent>
        </Card>
    );
};


const useStyles = makeStyles((theme) => ({
    root: {
        margin: '10px 10px 0px 10px',
        borderRadius: 5,
    },
    content: {
        display: 'flex',
        justifyContent: 'space-between',
    },
}));
