import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Grid, Box, Stack, } from "@mui/material";
import { Typography, Link, } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = ({
    srcLogo,
    inAbout,
    living,
    phone,
    email,
    location,
    imageFb,
    imageYt,
    imageIn,
}) => {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container spacing={7}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Typography variant="h6" gutterBottom component="div">About</Typography>
                    <br />
                    <Box >
                        <Image
                            className={classes.logo}
                            width={80}
                            height={80}
                            src={srcLogo}
                            alt="imgLogo"
                        />
                    </Box><br />
                    <Typography variant="body1" gutterBottom>{inAbout}</Typography>
                </Grid>


                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Typography variant="h6" gutterBottom component="div">Contact Us</Typography>
                    <br />
                    <Typography variant="subtitle2" gutterBottom>{living}</Typography>
                    <br />
                    <Typography variant="body1" gutterBottom>{phone}</Typography>
                    <br />
                    <Typography variant="body1" gutterBottom>{email}</Typography>
                    <br />
                    <Link sx={{ textDecoration: 'none' }} href="https://goo.gl/maps/aAMd13qxANFuXYeq9">
                        <Typography variant="body1" gutterBottom>{location}</Typography>
                    </Link>
                </Grid>


                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Typography variant="h6" gutterBottom component="div">Follow Us</Typography>
                    <br />
                    <Stack direction="row" spacing={4}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Box>
                                <Link href="https://www.facebook.com/leanghak.seirey.79">
                                    <Image
                                        width={40}
                                        height={40}
                                        className={classes.iconImg}
                                        src={imageFb}
                                        alt="facebook_img"
                                    />
                                </Link>
                            </Box>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Box>
                                <Link href="https://www.youtube.com/channel/UCLp7o4pQrhcfVI20pCclByw">
                                    <Image
                                        width={40}
                                        height={40}
                                        className={classes.iconImg}
                                        src={imageYt}
                                        alt="youtube_img"
                                    />
                                </Link>
                            </Box>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            <Box>
                                <Image
                                    width={40}
                                    height={40}
                                    className={classes.icon_img}
                                    src={imageIn}
                                    alt="linkedIn_img"
                                />
                            </Box>
                        </motion.div>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Footer;


const useStyles = makeStyles((theme) => ({

    root: {
        background: '#D3EDFF',
        borderTop: '6px solid #0D99FF',
        padding: "3%",
        zIndex: 1,
        position: "absolute",
        width: "100%",
    },
    logo: {
        borderRadius: 5,
    },
    iconImg: {
        borderRadius: 5,
        cursor: "pointer",
    },
}));


Footer.propTypes = {
    srcLogo: PropTypes.string.isRequired,
    inAbout: PropTypes.string.isRequired,
    living: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    imageFb: PropTypes.string,
    imageYt: PropTypes.string,
    imageIn: PropTypes.string,

};

Footer.defaultProps = {
    srcLogo: "/images/trt-logo.png",
    inAbout: "Tamrong Tis is a website for students to find information about the university or institute to choose to continue their studies.",
    living: "Sangkat Toek L'ak III, Khan Toul Kork, Phnom Penh.",
    phone: "Phone : (+885) 87 84 19 63",
    email: "Email : tamrongtis@gmail.com",
    location: "Location : 28 saint 265, Phnom Penh, Cambodia.",
    imageFb: "/icons/facebook.png",
    imageYt: "/icons/youtube.png",
    imageIn: "/icons/linkedIn.png",
};
