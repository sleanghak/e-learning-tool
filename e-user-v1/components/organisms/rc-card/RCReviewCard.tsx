import React from 'react';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import { Box, Rating, Typography, Badge } from '@mui/material';
import { Card, CardContent, Avatar } from '@mui/material';
import { RCTypograpy } from './../../../components/atoms';


interface Props {
    profile: string;
    name: string;
    title: string;
    desc: string;
}


const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 25,
    height: 25,
    border: `2px solid ${theme.palette.background.paper}`,
    boxShadow: '0 2px 8px 0 rgba(0,0,0,.1)',
}));

export default function RCReviewCard({ profile, name, title, desc, }: Props) {
    const classes = useStyles();
    const [value, setValue] = useState(5);

    return (
        <Card className={classes.root}>
            <Box className={classes.backgroundColor} ><br />
                <Box>
                    <Badge
                        sx={{ marginLeft: 2 }}
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        badgeContent={
                            <SmallAvatar src="https://www.facebook.com/images/fb_icon_325x325.png" />
                        }
                    >
                        <Avatar className={classes.avatar} alt="profile" src={profile} />
                    </Badge>
                    <Box sx={{ marginLeft: 14, marginTop: -7.7 }}>
                        <Typography className={classes.name} gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography className={classes.title} variant="h6" gutterBottom>
                            {title}
                        </Typography>
                        {/* <Rating
                            readOnly
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        /> */}
                    </Box>
                </Box>
            </Box>
            <CardContent className={classes.cardContent} >
                <RCTypograpy children={desc} />
            </CardContent>
        </Card>
    );
};

const useStyles = makeStyles(({
    root: {
        border: '0px',
        borderBottom: "7px solid #118AEF",
    },
    backgroundColor: {
        width: '100%',
        height: '10vh',
        background: ' #55ACEE',
        backgroundImage: 'radial-gradient(circle at 28% 36%, #00c5e3, #55ACEE 99%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    avatar: {
        float: 'left',
        width: 80,
        height: 80,
        border: '3px solid #FFF',
        boxShadow: "0px 2px 2px rgba(17, 138, 239, 0.10)",
    },
    name: {
        fontFamily: 'Barlow',
        color: "#FFF",
        fontSize: 16,
        fontWeight: 700,
        lineHeight: 1.5,
    },
    title: {
        fontFamily: 'Barlow',
        fontSize: 15,
        fontWeight: 700,
        color: '#FFC107',
    },
    cardContent: {
        marginTop: 27,
    },
}));
