import React from "react";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import { Grid, Box, Typography, Stack } from "@mui/material";
import { Avatar } from "@mui/material";
import { TextField, InputLabel } from "@mui/material";
import { Button, IconButton } from "@mui/material";


export default function PersonalInfo({ user }) {

    const classes = useStyles();
    return (
        <Grid container justifyContent={"center"} spacing={4}>
            <Grid item xs={11} sm={5}>
                <Box sx={{ mt: 4 }} className={classes.container}>
                    <form>
                        <Stack spacing={4}>
                            <label htmlFor="profile">
                            <Avatar
                                className={classes.avatar}
                                alt="img"
                                src=""
                                sx={{ width: 100, height: 100 }}
                            />
                            </label>

                            <input
                                type="file"
                                hidden
                                id="profile"
                                label="profile"
                                variant="outlined"
                                name="coverFileName"
                            />

                            <TextField
                                fullWidth
                                required
                                label="Name"
                                name="name"
                                type="text"
                                variant="standard"

                            />
                            {/* <IconButton sx={{ position: "absolute", right: 0 }}>
                                <Image
                                    width={20}
                                    height={20}
                                    src="/images/edit.png"
                                    alt="edit_img"
                                />
                            </IconButton> */}

                            <TextField
                                fullWidth
                                required
                                label="Email"
                                name="email"
                                type="email"
                                variant="standard"
                            />
                            {/* <IconButton sx={{ position: "absolute", right: 0 }}>
                                <Image
                                    width={20}
                                    height={20}
                                    src="/images/edit.png"
                                    alt="edit_img"
                                />
                            </IconButton> */}

                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone_number"
                                type=" "
                                variant="standard"

                            />
                            {/* <IconButton sx={{ position: "absolute", right: 0 }}>
                                <Image
                                    width={20}
                                    height={20}
                                    src="/images/edit.png"
                                    alt="edit_img"
                                />
                            </IconButton> */}

                            <InputLabel>Bio</InputLabel>
                            <TextField
                                name="bio"
                                fullWidth
                                required
                                multiline
                                placeholder="add bio"
                                rows={4}
                                type="text"
                                variant="standard"

                            />
                            <Box>
                                <Button
                                    className={classes.btnSave}
                                    variant="contained"
                                    type="submit"
                                >
                                    Save
                                </Button>
                            </Box>
                        </Stack>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
};


const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative",
    },
    avatar: {
        display: "block",
        margin: "0 auto",
    },
    btnEditPf: {
        margin: "0px auto",
        display: "block",
        padding: "5px 50px",
    },
    btnSave: {
        margin: "0px auto",
        display: "block",
        padding: "5px 50px",
        color: '#FFF',
    },
}));