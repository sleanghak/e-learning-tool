import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, CardMedia, } from '@mui/material';
import { Typography } from '@mui/material';

interface Props {
    image: string;
    title: string;
    desc: string;
}
export default function RCProjectCard({ image, title, desc }: Props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cardMedia}
                sx={{ height: 210 }}
                image={image}
                title="poster"
            />
            <CardContent>
                <Typography variant='title'>
                    {title}
                </Typography><br /><br />
                <Typography gutterBottom component="div">
                    {desc}
                </Typography>
            </CardContent>
        </Card >
    );
};

const useStyles = makeStyles((theme) => ({

    root: {
        border: '0px',
        // maxWidth: 345,
    },
    cardMedia: {
        borderRadius: 5,
    },
}));

