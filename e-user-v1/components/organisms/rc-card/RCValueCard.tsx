import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent } from '@mui/material';
import { Typography, Box } from '@mui/material';
import Image from "next/image";
import { RCTypograpy } from './../../atoms';

interface Props {
    image: string;
    desc: string;
};

export default function RCValueCard({ image, desc }: Props) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <Image className={classes.image} src={image} alt="image" width={100} height={100} />
            <CardContent>
                <Box textAlign='center'>
                    <RCTypograpy children={desc} />
                </Box>
            </CardContent>
        </Card>
    )
};


const useStyles = makeStyles((theme) => ({
    root: {
        border:'0px',
        // maxWidth: 'auto',
        height: 200,
    },
    image: {
        marginTop: 20,
        display: 'block',
        margin: '0 auto',
    },
}));

