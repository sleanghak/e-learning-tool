import React from "react";
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';
import { fireAuth } from "./../../services/firebase";
import { useRouter } from "next/router";
import { Box, TextField, Grid, Stack } from "@mui/material";
import { Button, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { Paragraph, Title } from './../../components/atoms/typographys';
import Link from "@mui/material/Link";
import Image from "next/image";


export default function ForgotPassword({
    logo,
    name,
}) {
    const classes = useStyles();
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const handleForgotPassword = (e) => {
        e.preventDefault();
        const form = e.target.elements;
        setError("");
        setLoading(true);
        fireAuth
            .sendPasswordResetEmail(form.email.value)
            .then((res) => {
                router.push('/auth/login');
                console.log(res);
                console.log("Successfully!");
                setLoading(false);
                e.target.elements.password.value = "";
            })
            .catch((err) => {
                console.log(err);
                console.log("Unsuccessfully!");
                setError(err.message);
                setLoading(false);
            });
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            {/*  background image */}
            <Grid item xs={false} sm={4} md={7}>
                <Box className={classes.backgroundImage} />
            </Grid>

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box sx={{ my: 5, mx: 4, }} className={classes.container}>

                    {/* image logo */}
                    <Box>
                        <Image src="/leanghak-coder.png" alt="logo" width={80} height={80} />
                    </Box>

                    {/* description ForgotPassword */}
                    <Box align="center">
                        <Title title="Forgot your password?" /><br />
                        <Paragraph title="Enter your email address associated with your account below and we'll send you password reset instructions." />
                    </Box><br />

                    {/* form ForgotPassword */}
                    <form className={classes.form} onSubmit={handleForgotPassword}>
                        <Stack spacing={2}>

                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField
                                  size="small"
                                    fullWidth
                                    required
                                    label="Email"
                                    name="email"
                                    type="email"
                                    variant="outlined"
                                />
                            </Grid>


                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Button
                                    className={classes.fpassword}
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                >
                                    {
                                        loading ? 'Loading ...' : 'Send Recovery Email'
                                    }
                                </Button>

                            </Grid>
                            <Typography color="error" variant="body2" gutterBottom>{error}</Typography>


                            <Typography>
                                <Link className={classes.link} href="/auth/login">
                                    Just remember? Return to sign in
                                </Link>
                            </Typography>
                        </Stack>

                    </form>
                </Box>
                <footer align="center">
                    <Paragraph title='&copy; Copyright 2023, Leanghak Coder. All Rights Reserved.' />
                </footer>
            </Grid>
        </Grid>

    );
};

const useStyles = makeStyles(({
    backgroundImage: {
        width: '100%',
        height: '100vh',
        backgroundImage: "url(https://images.unsplash.com/photo-1559163387-e46e8dcb27f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&w=1000&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        // marginTop: 1,
    },
    fpassword: {
        backgroundColor: ' #55ACEE',
        color: '#FFF',
        textTransform: 'none',
        border: '1px solid #55ACEE',
        boxSizing: 'border-box',
        "&:hover": {
            backgroundColor: ' #55ACEE',
            border: '1px solid #55ACEE',
        },
    },
    link: {
        textDecoration: 'none',
        color: ' #55ACEE',
    },

}));

ForgotPassword.propTypes = {
    name: PropTypes.string.isRequired,
};

ForgotPassword.defaultProps = {
    name: "Forgot Password?",
};