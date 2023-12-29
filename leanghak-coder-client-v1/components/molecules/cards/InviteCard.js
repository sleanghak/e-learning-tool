
import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { CardContent, CardMedia } from '@mui/material';
import { Box } from '@mui/material';
import { Paragraph } from './../../atoms/typographys';
import { motion } from "framer-motion";

export default function InviteCard({ profile, desc }) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.center}>
                <Box className={classes.backgroundColor}>
                    <motion.div whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.9 }}>
                        <CardMedia
                            className={classes.avatar}
                            component="img"
                            height="45"
                            image={profile}
                            alt="img"
                        />
                    </motion.div>
                </Box>
            </Box>
            <CardContent className={classes.center}>
                <Paragraph title={desc} />
            </CardContent>
        </Box>
    );
};


const useStyles = makeStyles(({
    root: {
        width: '100%',
        color: '#25265EB3',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
    backgroundColor: {
        margin: '0 auto',
        boxShadow: '0px 2px 10px rgba(17,121,239,.1)',
        borderRadius: '50%',
        width: 80,
        height: 80,
        backgroundColor: '#FFF',
        display: 'inline-block',
        textAlign: 'center',
    },
    avatar: {
        width: 40,
        display: 'block',
        textAlign: 'center',
        margin: '0 auto',
        marginTop: 15,
    },
}));

InviteCard.defaultProps = {
    profile: PropTypes.string.isRequired,

};

InviteCard.propTypes = {
    profile: "https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg",
};
