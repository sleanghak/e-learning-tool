import React from "react";
import PropTypes from "prop-types";
import makeStyles from '@mui/styles/makeStyles';
import { useRouter } from "next/router";
import { Box, TextField, Grid, Stack } from "@mui/material";
import { Button, Typography } from '@mui/material';
import Link from "@mui/material/Link";
import Image from "next/image";


export default function ForgotPassword({
    imgLogo,
    nameTitle,
    desc,
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
       
    };

    return (
        <Box className={classes.root}>
            <Box className={classes.paper}>
                <Image
                    // src="/images/trt-logo.jpg"
                    className={classes.logo}
                    src={imgLogo}
                    alt="imgLogo"
                    width={80}
                    height={80}
                /><br />
                <Typography sx={{ color: '#0D99FF' }} variant="h6" gutterBottom component="div">
                    {/* Forgot Password? */}
                    {nameTitle}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {/* No worries! Just enter your email and we&apos;ll send you a reset
                    password link. */}
                    {desc}
                </Typography>

                <form className={classes.form} onSubmit={handleForgotPassword}>
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
                            <Link className={classes.link} href="/auth/signin">
                                Just remember? Return to sign in
                            </Link>
                        </Typography>
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
        padding: 8,
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
    fpassword: {
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

ForgotPassword.propTypes = {
    imgLogo: PropTypes.string.isRequired,
    nameTitle: PropTypes.string.isRequired,
    desc: PropTypes.string,
};

ForgotPassword.defaultProps = {
    imgLogo: "/images/trt-logo.png",
    nameTitle: "Forgot Password?",
    desc: "No worries! Just enter your email and we'll send you a reset password link.",

};