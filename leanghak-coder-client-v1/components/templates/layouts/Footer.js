import React from 'react';
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';
import { Paragraph } from './../../atoms/typographys';
import { IconButton, Link } from '@mui/material';
import { Box, Stack } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.root}>
                <Stack direction="row" spacing={2}>
                    <IconButton href="https://t.me/SEIREY_Leanghak" target='_blank'>
                        <TelegramIcon />
                    </IconButton>
                    <IconButton href="https://www.facebook.com/sleanghak?mibextid=ZbWKwL" target='_blank'>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton href='https://www.youtube.com/channel/UCLp7o4pQrhcfVI20pCclByw' target='_blank'>
                        <YouTubeIcon />
                    </IconButton>
                </Stack><br />
                <Box>
                    <Paragraph title='&copy; Copyright 2023, Leanghak Coder. All Rights Reserved.' />
                </Box>
            </Box>
        </>
    );
};



const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f9fafb',
        padding: '2rem 0',
        borderTop: ' 1px solid #eaeaea',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

Footer.propTypes = {
    // name: PropTypes.string.isRequired,
};

Footer.defaultProps = {
    // name: "Forgot Password?",
};