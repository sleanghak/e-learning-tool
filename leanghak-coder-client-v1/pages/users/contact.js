import React, { useState } from "react";
import { Box, Stack, Grid, } from "@mui/material";
import { TextField, Button } from '@mui/material';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { makeStyles } from "@mui/styles";
import { IconTypography } from "./../../components/molecules/typography";
import { contactBy } from "./../../utils/constant/contact";
import { Title, Paragraph } from "./../../components/atoms/typographys";
import { Footer } from "./../../components/templates/layouts";
import { UserAppBar } from "./../../components/templates/appbars";


export default function Contact() {
    const classes = useStyles();
    const [subject, setSubject] = React.useState('');

    const handleChange = (event) => {
        setSubject(event.target.value);
    };

    return (
        <Box>

            {/* AppBar */}
            <Box>
                <UserAppBar />
            </Box>

            <Box sx={{ mb: 3, ml: 0, mr: 0, mt: 0 }} className={classes.root}>
                <Box className={classes.container}>
                    {/* contact by */}
                    <Grid container >
                        <Grid item xs={12} sm={5}>
                            <Box className={classes.contact_by}>
                                <Stack spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
                                    <Box textAlign="center">
                                        <Title title="YOU CAN CONTACT US BY" />
                                    </Box>
                                    {contactBy.map((item, index) => {
                                        return (
                                            <IconTypography
                                                key={index}
                                                icon={item.icon}
                                                title={item.title}
                                            />
                                        );
                                    })}
                                </Stack>
                            </Box>
                        </Grid>

                        {/* google map */}
                        <Grid item xs={12} sm={7}>
                            <Box sx={{ marginTop: { xs: 3, } }} className={classes.map_frame}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d500833.9340390993!2d104.41346168518068!3d11.278669461732893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109614e40ff6789%3A0xfeb5ca3515ffbea3!2z4Z6c4Z634Z6R4Z-S4Z6Z4Z624Z6b4Z-Q4Z6Z4Z6f4Z6Y4Z-S4Z6P4Z-B4Z6F4Z6P4Z-B4Z6H4Z-E4Z6g4Z-K4Z674Z6T4Z6f4Z-C4Z6T4Z6A4Z-S4Z6a4Z624Z-G4Z6E4Z6Z4Z-J4Z684Z6c!5e0!3m2!1skm!2skh!4v1679698753614!5m2!1skm!2skh"
                                    loading="lazy"
                                    className={classes.iframeMap}
                                />
                            </Box>
                        </Grid>
                    </Grid>

                    {/* contact information*/}
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={12}>
                            <Box className={classes.title_contact_information}>
                                <Title title="CONTACT SUPPORT" />
                                <br />
                                <Paragraph title="Whether you're interested in our partner program, advertising service or a custom solution, we're here to help you find the right plan to support your need. Tell us about you and we'll be in touch." />
                            </Box>
                        </Grid>
                    </Grid>


                    {/* from inputs */}

                    <form >
                        <Grid container rowSpacing={2} columnSpacing={2}>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    required
                                    type="text"
                                    // size="small"
                                    label="Name"
                                    name="name"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    required
                                    type="email"
                                    // size="small"
                                    label="Email"
                                    name="email"
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    required
                                    variant="outlined"
                                    fullWidth
                                    type="tel"
                                    // size="small"
                                    label="Phone Number"
                                    name="phone"
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Subject</InputLabel>
                                    <Select
                                        required
                                        value={subject}
                                        label="Subject"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Programming Language</MenuItem>
                                        <MenuItem value={20}>Basic Web Development</MenuItem>
                                    </Select>
                                </FormControl>

                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    required
                                    type="text"
                                    // size="small"
                                    multiline
                                    rows={6}
                                    label="Message"
                                    name="message"
                                />
                            </Grid>

                            <Grid item >
                                <Button className={classes.button} type="submit" variant="outlined">
                                    Send Messenger
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>

            {/* Footer */}
            <Box>
                <Footer />
            </Box>
        </Box>
    );
};



const useStyles = makeStyles(({
    root: {
        width: "100%",
    },
    container: {
        padding: "0px 30px",
    },
    contact_by: {
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    map_frame: {
        width: "100%",
        height: 500,
    },
    iframeMap: {
        width: "100%",
        height: "100%",
        border: "none",
    },
    title_contact_information: {
        margin: "0px auto",
        marginTop: 20,
        marginBottom: 10,
        textAlign: "center",
    },
    button: {
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
}));