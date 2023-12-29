import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Box, TextField, Grid, Stack } from "@mui/material";
import { Button, Typography, Divider } from '@mui/material';
import { RCTypograpy, RCTitle } from "../components/atoms";
import Link from "@mui/material/Link";
import Image from "next/image";

export default function Register() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.paper}>

                {/* image logo */}
                <Box>
                    <Image className={classes.logo} src="/reancode101.png" alt="logo" width={80} height={80} />
                </Box>

                {/* description register */}
                <Box textAlign={"center"}>
                    <RCTitle children="Sign up for ReanCode101" /><br />
                    <RCTypograpy children="Sign up for an account to track your progress or your child&apos;s progress or manage your classroom. Your password must be at least 6 characterslong, containing at least one letter and one number." />
                </Box><br />

                {/* form register */}
                <form className={classes.form}>
                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<Image className={classes.logo} src="/google.png" alt="logo" width={23} height={23} />}>
                        Continue With Google
                    </Button><br /><br />
                    <Divider><Typography variant='secondary'>Or</Typography> </Divider><br />

                    {/* Sign up with your email address */}
                    {/* <Typography align="center" gutterBottom>Sign up with your email address</Typography> */}
                    <Stack spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                size="small"
                                fullWidth
                                required
                                label="Name"
                                name="username"
                                type="text"
                                variant="standard"
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                size="small"
                                fullWidth
                                required
                                label="Email"
                                name="email"
                                type="email"
                                variant="standard"
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                                size="small"
                                fullWidth
                                required
                                label="Password"
                                name="password"
                                type="password"
                                variant="standard"
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="outlined"
                            >
                                Singup
                            </Button>

                        </Grid>
                        {/* <Typography color="error" variant="body2" gutterBottom>{""}</Typography> */}

                        <Link className={classes.link} href="/login"><Typography variant="primary">You already have account? Signin</Typography></Link>
                    </Stack>
                </form>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        // height: "100vh",
        maxWidth: 510,
        margin: '0px auto',
        padding: 5
    },
    logo: {
        borderRadius: 5,
    },
    paper: {
        margin: '8px 4px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    form: {
        width: "100%",
        marginTop: 1,
    },
    link: {
        textDecoration: 'none',
        color: ' #118AEF',
    }

}));

