import React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent } from '@mui/material';
import { Typography, Box } from '@mui/material';
import Image from "next/image";


interface Props {
    image: string;
    title: string;
    desc: string;
};

export default function RCMemberCard({ image, title, desc }: Props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Image className={classes.image} src={image} alt="image" width={260} height={300} />
            <CardContent>
                <Box textAlign='center'>
                    <Typography variant='title'>
                        {title}
                    </Typography><br /><br />
                    <Typography className={classes.desc} >
                        {desc}
                    </Typography>
                </Box>
            </CardContent>
        </Box>
    )
};


const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 'auto',
        // height: 300,
    },
    image: {
        marginTop: 20,
        display: 'block',
        margin: '0 auto',
        borderRadius: 5,
    },
    desc: {
        color: '#7665A0',
        fontWeight: 700,
    },
}));

