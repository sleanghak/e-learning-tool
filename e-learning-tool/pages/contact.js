import React, { useState } from "react";
import { Box, Stack, Typography, Grid, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import IconTypography from "../components/molecules/typography/IconTypography";
import { contactBy } from "../utils/constant/contact";
import Footer from './../components/templates/layout/Footer';
import Header from './../components/molecules/headers/Header';
import Divider from "../components/atoms/dividers/Divider";

const Contact = ({ }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>

            {/* components import headers */}
            <Box>
                <Header />
            </Box>

            {/* components import divider */}
            {/* <Grid container justifyContent={"center"}> */}
                <Grid item xs={0} sm={12} md={12}>
                    <Divider />
                </Grid>
            {/* </Grid> */}

            <Grid sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }} container justifyContent={"center"}>
                <Grid item xs={11}>
                    <Box className={classes.container}>
                        {/* contact by */}
                        <Grid container rowSpacing={4} columnSpacing={2}>
                            <Grid item xs={12} sm={5}>
                                <Box className={classes.contact_by}>
                                    <Stack spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
                                        <Typography variant="h6" gutterBottom component="div">
                                            You Can Contact Us By:
                                        </Typography>
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
                            <Grid item xs={12} sm={7}>
                                <Box className={classes.map_frame}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3882.675620102311!2d103.84787305064931!3d13.308192190589754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311019a3422af079%3A0xc3ec604987f983cb!2sAranh%20Sakor%20Cuthbert%20Primary%20and%20Junoir%20High%20School!5e0!3m2!1sen!2skh!4v1630332892578!5m2!1sen!2skh"
                                        loading="lazy"
                                        className={classes.iframeMap}
                                    />
                                </Box>
                            </Grid>
                        </Grid>

                        {/* contact information*/}
                        <Grid container rowSpacing={4} columnSpacing={2}>
                            <Grid item xs={12}>
                                <Box className={classes.title_contact_information}>
                                    <Typography variant="h6" gutterBottom component="div">CONTACT INFORMATION</Typography>
                                    <br />
                                    <Typography variant="body1" gutterBottom>
                                        Don&rsquo;t hesitate to ask questions or make comments
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={0} sm={12} md={6}>
                                <Box className={classes.contact_image} />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <from>
                                    <Stack spacing={4}>
                                        <TextField
                                            variant="standard"
                                            fullWidth
                                            required
                                            type="text"
                                            size="small"
                                            label="Name"
                                            name="name"
                                        />
                                        <TextField
                                            variant="standard"
                                            fullWidth
                                            required
                                            type="email"
                                            size="small"
                                            label="Email"
                                            name="email"
                                        />

                                        <TextField
                                            variant="outlined"
                                            fullWidth
                                            required
                                            type="text"
                                            size="small"
                                            multiline
                                            rows={10}
                                            label="Message"
                                            name="message"
                                        />
                                    </Stack>
                                    <Box>
                                        <Button
                                            className={classes.button}
                                            variant="outlined"
                                            type="submit"
                                        >
                                            Send Messenger
                                        </Button>
                                    </Box>
                                </from>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
            <Footer />
        </Box>
    );
};

export default Contact;


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    container: {
        width: "100%",
        marginTop: 80,
        padding: "0px 30px",
        [theme.breakpoints.down("md")]: {
            padding: "0px 20px",
            marginTop: 60,
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0px 10px",
            marginTop: 40,
        },
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
        [theme.breakpoints.down("md")]: {
            height: 400,
        },
        [theme.breakpoints.down("sm")]: {
            height: 300,
        },
    },
    iframeMap: {
        width: "100%",
        height: "100%",
        border: "none",
    },
    title_contact_information: {
        margin: "0px auto",
        marginTop: 80,
        marginBottom: 20,
        textAlign: "center",
        [theme.breakpoints.down("md")]: {
            marginTop: 60,
            marginBottom: 10,
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: 40,
            marginBottom: 5,
        },
    },
    contact_image: {
        width: "70%",
        height: "100%",
        margin: "0 auto",
        backgroundImage: "url(./images/contact_img.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    button: {
        width: "auto%",
        color: '#FFF',
        marginTop: 20,
        display: "flex",
        justifyContent: 'left',
    },
}));

