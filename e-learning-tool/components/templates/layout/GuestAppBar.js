
import React from "react";
import { Stack, Box } from "@mui/material";
import { AppBar, Toolbar, Button, } from "@mui/material";
import ELearningToolLogo from "../../atoms/ELearningToolLogo";
import { makeStyles } from "@mui/styles";


const GuestAppBar = ({ onMobile, }) => {
    const classes = useStyles();

    return (
        <AppBar color="white" position="static">
            <Toolbar className={classes.root}>
                <ELearningToolLogo href="/" />
                <Box className={classes.menus}>

                    {!onMobile ? (
                        <Button size="small" variant="outlined" href="/auth/signin">
                            Sign in
                        </Button>
                    ) : (
                        <Stack direction={"row"} spacing={2}>
                            <Button size="small" variant="outlined" href="/auth/signin">
                                Sign in
                            </Button>
                            <Button sx={{ color: '#FFF' }} size="small" variant="contained" href="/auth/signup">
                                Sign up
                            </Button>
                        </Stack>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default GuestAppBar;

const useStyles = makeStyles((theme) => ({
    root: {
        height: 70,
        borderTop: '6px solid #0D99FF',
        boxSizing: 'border-box',
    },
    menus: {
        display: "flex",
        marginLeft: "auto",
        alignItems: "center",
        gap: 5,
    },
}));
