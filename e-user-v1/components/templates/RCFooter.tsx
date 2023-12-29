import React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Stack, Divider, Grid } from '@mui/material';
import { Typography, IconButton } from '@mui/material';
import Image from "next/image";
import Link from 'next/link';


export default function RCFooter() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container>
                <Grid xs={12} sm={6} md={6} lg={6} >
                    <Stack spacing={2} direction="row" alignItems="center" className={classes.center}>
                        <Stack>
                            <Image className={classes.logo} src="/reancode101.png" alt="logo" width={50} height={50} />
                        </Stack>
                        <Stack sx={{ minWidth: 0 }}>
                            <Typography noWrap>ReanCode101</Typography>
                        </Stack>
                    </Stack><br />
                    <Box className={classes.center}>
                        <Box className={classes.menus}>
                            <Link className={classes.text} href="/media">Media</Link>
                            <Link className={classes.text} href="/alumni">Alumni</Link>
                            <Link className={classes.text} href="/student-project">Student&apos;sProject</Link>
                            <Link className={classes.text} href="/about">About</Link>
                            <Link className={classes.text} href="/contact">Contact</Link>
                        </Box>
                    </Box>
                </Grid>

                <Grid xs={12} sm={6} md={6} lg={6} >
                    <Box className={classes.center}>
                        <Typography className={classes.right}>
                            Download the app
                        </Typography>
                    </Box>

                    <Box className={classes.center}>
                        <Box className={classes.right}>
                            <Stack spacing={1} direction="row" alignItems="center">
                                <Stack>
                                    <Image src="/app-store.png" alt="logo" width={90} height={55} />
                                </Stack>
                                <Stack >
                                    <Image src="/play-store.png" alt="logo" width={85} height={40} />
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Grid>
            </Grid> <br />

            <Box >
                <Divider color="white" />
            </Box><br />

            <Grid container>
                <Grid item xs={12} sm={6} md={6} lg={6} className={classes.center}>
                    <Stack spacing={1} direction="row" alignItems="center">
                        <Stack>
                            <IconButton size="small">
                                <Image className={classes.icon} src="/facebook.png" alt="logo" width={30} height={30} />
                            </IconButton>
                        </Stack>
                        <Stack >
                            <IconButton size="small">
                                <Image className={classes.icon} src="/telegram.png" alt="logo" width={30} height={30} />
                            </IconButton>
                        </Stack>
                        <Stack >
                            <IconButton size="small">
                                <Image className={classes.icon} src="/linkedin.png" alt="logo" width={30} height={30} />
                            </IconButton>
                        </Stack>
                        <Stack >
                            <IconButton size="small">
                                <Image className={classes.icon} src="/youtube.png" alt="logo" width={30} height={30} />
                            </IconButton>
                        </Stack>
                    </Stack>
                </Grid>

                <Grid xs={12} sm={6} md={6} lg={6} className={classes.center}>
                    <Typography className={classes.right}>
                        &copy; Copyright {"2022"},ReanCode101.
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({

    root: {
        padding: '4%',
        width: '100%',
        height: '48vh',
        background: '#118AEF',
        color: "#FFF",
        opacity: 0.9,
        // boxShadow: ' 0px 0px 6px rgba(0, 0, 0, 0.25)',
    },

    logo: {
        border: "1px solid #FFF",
        borderRadius: 5,
    },
    menus: {
        display: "flex",
        marginLeft: "auto",
        alignItems: "center",
        gap: 5,
    },
    text: {
        textTransform: 'none',
        color: "#FFF",
        marginRight: 15,
    },
    icon: {
        border: "2px solid #FFF",
        borderRadius: "100%",
        background: "#FFF",
    },
    center: {
        // [theme.breakpoints.down("sm")]: {
        //     display: "flex",
        //     justifyContent: "center",
        // },
    },
    right: {
        display: "flex",
        justifyContent: "right",

    },
}));

