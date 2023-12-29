
import React from "react";
import { makeStyles } from "@mui/styles";
import { useRouter } from 'next/router';
import TamrongTisLogo from "../../atoms/TamrongTisLogo";
import { Stack, Box } from "@mui/material";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const GuestAppBar = ({ onMobile, }) => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <AppBar color="white" position="static">
            <Toolbar className={classes.root}>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'block' } }}>
                    <TamrongTisLogo href="/" />
                </Box>
                <Box className={classes.menus}>
                    <Stack direction={"row"} spacing={2}>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'block' } }}>
                            <Button variant="text" onClick={() => router.push("/home")}>home</Button>
                            <Button variant="text" onClick={() => router.push("/video")}>video</Button>
                            <Button variant="text" onClick={() => router.push("/scholarship")}>scholarship</Button>
                            <Button variant="text" onClick={() => router.push("/media")}>media</Button>
                            <Button variant="text" onClick={() => router.push("/about")}>about</Button>
                            <Button variant="text" onClick={() => router.push("/contact")}>contact</Button>
                        </Box>

                        <Button size="small" variant="outlined" href="/auth/signin">
                            Sign in
                        </Button>

                    </Stack>
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
