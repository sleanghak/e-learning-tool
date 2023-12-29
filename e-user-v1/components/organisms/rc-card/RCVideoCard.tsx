import React from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
import { Typography } from '@mui/material';

interface Props {
    image: string,
    title: string,
}

export default function RCVideoCard({ image, title }: Props) {
    return (
        <Card sx={{ border:'0px',}}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="img"
            />
            <CardContent>
                <Typography gutterBottom variant="title" component="div">
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}
