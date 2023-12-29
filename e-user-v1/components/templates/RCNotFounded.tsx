import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Stack, } from '@mui/material';
import { RCTitle, RCTypograpy } from '../atoms';

export default function RCNotFounded() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box sx={{ my: 15, }} className={classes.content}>
                <Stack direction="row" spacing={2}>
                    <Box sx={{display: { xs: 'none', md: 'flex', lg: 'flex' }}} className={classes.image} />
                    <Box>
                        <RCTitle children='404 Error Causes' />
                        <RCTypograpy children='• A misspelled URL' />
                        <RCTypograpy children='• The page has been moved or deleted and ther&apos;s no redirect set up' />
                        <RCTypograpy children='• The URL wasn&apos;t correct when it was originally set up or it was linked incorrectry' />
                        <RCTypograpy children='• The server malfunctioned or has been shut down' />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        padding: '2%',
        background: 'rgba(17, 138, 239, 0.05)',
        borderRadius: 5,
    },
    image: {
        width: '100%',
        height: '45vh',
        backgroundImage: 'url(https://yt3.ggpht.com/MeXC2P7f7vizD7TyS-A1CLsrvYQb7Po5PTEA-gEZkeafY2xBnDNdbX9uu4TlC891lnPfNgqoEZmtHU0=s640-c-fcrop64=1,00000000ffffffff-nd-v1)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

