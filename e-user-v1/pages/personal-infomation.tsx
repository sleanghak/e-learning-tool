import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { RCFooter, RCUserAppBar } from "./../components/templates";
import { Box, Button, Grid } from "@mui/material";
import { RCTypograpy, RCTitle } from "../components/atoms";
import { RCTextField } from '../components/atoms/rc-text-field';
import { personalInformation } from './../utils/constant/person-infor';

export default function PersonalInformation() {
    const classes = useStyles();
    return (
        <>
            <RCUserAppBar /><br />
            <Box className={classes.root}>
                <Box className={classes.paper}>
                    <Box textAlign={"center"}>
                        <RCTitle children='Personal Account' /><br />
                        <RCTypograpy children='Add information about yourself' />
                    </Box><br />

                    <form className={classes.form}>
                        {personalInformation.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={12} md={12} lg={12}>
                                    <RCTextField
                                        key={index}
                                        startIcon={item.startIcon}
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
                                Save
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


