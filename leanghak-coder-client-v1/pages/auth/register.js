import React from "react";
import PropTypes from "prop-types";
import { fireAuth } from "./../../services/firebase";
import { useRouter } from "next/router";
import makeStyles from '@mui/styles/makeStyles';
import { Box, TextField, Grid, Stack } from "@mui/material";
import { Button, Typography } from '@mui/material';
import { Paragraph, Title } from './../../components/atoms/typographys';
import { Paper } from '@mui/material';
import Link from "@mui/material/Link";
import Image from "next/image";


export default function Register({
    imgLogo,
    nameTitle,
    desc,
}) {
    const classes = useStyles();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const router = useRouter();


    const handleUserRegister = (e) => {
        e.preventDefault();
        const form = e.target.elements;
        setError("");
        setLoading(true);
        fireAuth
            .createUserWithEmailAndPassword(form.email.value, form.password.value)
            .then((res) => {

                const user = fireAuth.currentUser;
                user
                    // .updateProfile({
                    //     displayName: form.username.value,
                    // })
                    .then((res) => {
                        router.push("/home");
                    })
                    .catch((err) => {
                        setError(err.message);
                    });
                console.log(res);
                console.log("Successfully!");
                setLoading(false);
                e.target.elements.username.value = "";
                e.target.elements.email.value = "";
                e.target.elements.password.value = "";

            })
            .catch((err) => {
                console.log(err);
                console.log("Unsuccessfully!");
                // setError(err.message);
                setError(err.message.slice(9));
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
                <Box sx={{ my: 2, mx: 4, }} className={classes.container}>

                    {/* image logo */}
                    <Box>
                        <Image src="/leanghak-coder.png" alt="logo" width={80} height={80} />
                    </Box>

                    {/* description register */}
                    <Box align="center">
                        <Title title="Sign up for Leanghak Coder" /><br />
                        <Paragraph title="Sign up for an account to track your progress or your child&apos;s progress or manage your classroom. Your password must be at least 6 characterslong, containing at least one letter and one number." />
                    </Box><br />

                    {/* form register */}
                    <form className={classes.form} onSubmit={handleUserRegister}>
                        <Stack spacing={2}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField
                                    size="small"
                                    fullWidth
                                    required
                                    label="Name"
                                    name="username"
                                    type="text"
                                    variant="outlined"
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
                                    variant="outlined"
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
                                    variant="outlined"
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Button
                                    className={classes.signup}
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                >
                                    {
                                        loading ? 'Loading ...' : 'Singup'
                                    }
                                </Button>

                            </Grid>
                            <Typography color="error" variant="body2" gutterBottom>{error}</Typography>

                            <Link className={classes.link} href="/auth/login"><Typography>You already have account? Sign in</Typography></Link>
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
        backgroundImage: "url(https://images.unsplash.com/photo-1607119967691-2cef21d2b0a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80)",
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
    signup: {
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

Register.propTypes = {
    // imgLogo: PropTypes.string.isRequired,
    nameTitle: PropTypes.string.isRequired,
    desc: PropTypes.string,
};

Register.defaultProps = {
    // imgLogo: "https://cdn-icons-png.flaticon.com/512/3573/3573187.png",
    nameTitle: "Sign up and start learning !",
    desc: "Your password must be at least 6 characterslong, containing at least one letter and one number.",

};