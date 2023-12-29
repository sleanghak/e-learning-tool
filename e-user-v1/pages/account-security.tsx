import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Box, Button, Grid } from "@mui/material";
import { RCTypograpy, RCTitle } from "../components/atoms";
import { RCTextField } from '../components/atoms/rc-text-field';
import { accountSecurity } from '../utils/constant/acc-security';
import { RCFooter, RCUserAppBar } from "./../components/templates";


export default function AccountSecurity() {
    const classes = useStyles();
    return (
        <>
            <RCUserAppBar /><br />

            <Box className={classes.root}>
                <Box className={classes.paper}>
                    <Box textAlign={"center"}>
                        <RCTitle children="Account Security" /><br />
                        <RCTypograpy children="Edit your account settings and change your password here." />
                    </Box><br />

                    <form className={classes.form}>
                        {accountSecurity.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <RCTextField
                                        key={index}
                                        placeholder={item.placeholder}
                                        name={item.name}
                                        type={item.type}
                                    />
                                </Grid>
                            );
                        })}
                        <Box className={classes.center}>
                            <Button
                                className={classes.button}
                                variant="contained"
                                type="submit"
                            >
                                Change
                            </Button>
                        </Box>
                    </form>
                </Box><br />
            </Box>
            <RCFooter />
        </>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        // height: "100vh",
        maxWidth: 510,
        margin: '0px auto',
        padding: 5
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
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        width: "auto",
        color: '#FFF',
        marginTop: 20,
        display: "flex",
        justifyContent: 'left',
    },
}));

