import React from 'react';
import { makeStyles } from "@mui/styles";
import { Grid, Box, Stack } from "@mui/material";
import { Typography, Button, TextField } from "@mui/material";
import Footer from '../../components/templates/layout/Footer';


export default function Password({ user }) {
    const classes = useStyles();

    return (
        <Box>
            <Grid container justifyContent={"center"} spacing={4}>
                <Grid item xs={11} sm={8} md={6}>
                    <Box sx={{ mt: 4 }}>
                        <Typography align='center' variant="h6" gutterBottom component="div">
                            Change password
                        </Typography>
                    </Box>
                    <form>
                        <Stack spacing={4}>
                            <TextField
                                fullWidth
                                required
                                name="email"
                                type="email"
                                label="Email"
                                variant="standard"
                                defaultValue={user?.data?.email}
                            />
                            <TextField
                                fullWidth
                                required
                                name="password"
                                type="password"
                                label="Password"
                                variant="standard"
                                defaultValue={"***********"}
                            />

                            <TextField
                                fullWidth
                                required
                                name="newPassword"
                                type="password"
                                label="New password"
                                variant="standard"
                            />

                            <TextField
                                fullWidth
                                required
                                name="confirmPassword"
                                type="password"
                                label="Confirm password"
                                variant="standard"
                            />

                            <Box>
                                <Button variant="contained" type="submit" className={classes.button}>
                                    Change
                                </Button>
                            </Box>
                        </Stack>
                    </form>
                </Grid >
            </Grid >
            <Box sx={{ mt: 2 }}>
                <Footer />
            </Box>
        </Box>
    );
};


const useStyles = makeStyles((theme) => ({
    button: {
        margin: '0px auto',
        display: 'block',
        padding: '5px 50px',
        color: '#FFF',
    },
}));