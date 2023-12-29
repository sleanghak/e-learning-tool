import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import makeStyles from '@mui/styles/makeStyles';
import { Box, TextField, Grid, Stack } from "@mui/material";
import { Button, Typography } from '@mui/material';
import Link from "@mui/material/Link";
import Image from "next/image";


export default function SignUp({
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

                <Typography sx={{ color: '#0D99FF' }} variant="h6" gutterBottom component="div">
                    {nameTitle}
                    {/* Sign up and start learning ! */}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {desc}
                    {/* Your password must be at least 6 characterslong, containing at least one letter and one number. */}
                </Typography>
                <form className={classes.form} onSubmit={handleUserRegister}>
                    <Stack spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
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
                                className={classes.signup}
                                type="submit"
                                fullWidth
                                variant="outlined"
                            >
                                {
                                    loading ? 'Loading ...' : 'Sing Up'
                                }
                            </Button>

                        </Grid>
                        <Typography color="error" variant="body2" gutterBottom>{error}</Typography>

                        <Link className={classes.link} href="/auth/signin"><Typography>You already have account? Sign in</Typography></Link>
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
        width: "100%",
        marginTop: 1,
    },
    signup: {
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

SignUp.propTypes = {
    imgLogo: PropTypes.string.isRequired,
    nameTitle: PropTypes.string.isRequired,
    desc: PropTypes.string,
};

SignUp.defaultProps = {
    imgLogo: "/images/trt-logo.png",
    nameTitle: "Sign up and start learning !",
    desc: "Your password must be at least 6 characterslong, containing at least one letter and one number.",

};