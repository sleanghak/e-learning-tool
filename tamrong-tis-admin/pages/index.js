import React from "react";
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';
import { useRouter } from 'next/router';
import { Box, TextField, Grid, Stack } from "@mui/material";
import { Button, Typography } from '@mui/material';
import Link from "@mui/material/Link";
import Image from "next/image";


export default function SignIn({
    imgLogo,
    nameTitle
}) {
    const classes = useStyles();
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const handleUserSignIn = (e) => {
        e.preventDefault();
        const form = e.target.elements;
        setError("");
        setLoading(true);

    };

    return (
        <Box className={classes.root}>
            <Box className={classes.paper}>
                <Image
                    // src="/images/trt-logo.png"
                    className={classes.logo}
                    src={imgLogo}
                    alt="imgLogo"
                    width={80}
                    height={80}
                /><br />

                {/* <Typography sx={{ color: '#0D99FF' }}  gutterBottom component="div">
                    {nameTitle}
                </Typography> */}

                <form className={classes.form} onSubmit={handleUserSignIn}>
                    <Stack spacing={2}>

                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
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
                                className={classes.signin}
                                type="submit"
                                fullWidth
                                variant="outlined"
                            >
                                {
                                    loading ? 'Loading ...' : 'Sing In'
                                }
                            </Button><br />
                            {/* <Typography color="error"  gutterBottom>{error}</Typography> */}

                        </Grid>
                        <Stack direction={"row"} justifyContent="space-between">
                            {/* <Typography>
                                <Link className={classes.link} href="/auth/forgotPassword">
                                    Forgot password ?
                                </Link>
                            </Typography>
                            <Typography>
                                <Link className={classes.link} href="/auth/signup">
                                    Don&apos;t have account? sign up
                                </Link>
                            </Typography> */}
                        </Stack>
                    </Stack>

                </form>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        // height: "100vh",
        maxWidth: 450,
        margin: '0px auto',
        padding: 8
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
        width: "100%", // Fix IE 11 issue.
        marginTop: 1,
    },
    signin: {
        color: '#000',
        textTransform: 'none',
        border: '1px solid #0D99FF',
        boxSizing: 'border-box',
        borderRadius: 40,
    },
    link: {
        textDecoration: 'none',
    }

}));

SignIn.propTypes = {
    imgLogo: PropTypes.string.isRequired,
    nameTitle: PropTypes.string.isRequired,

};

SignIn.defaultProps = {
    imgLogo: "/images/trt-logo.png",
    nameTitle: "Admin Login to your account !",

};