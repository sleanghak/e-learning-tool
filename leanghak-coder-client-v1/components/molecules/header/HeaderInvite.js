import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Box } from '@mui/material';
import { Title, Paragraph } from './../../atoms/typographys';

export default function HeaderInvite() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box sx={{ p: 5 }}>
                <Box>
                    <Title title='Invite your friends' />
                </Box><br />
                <Box className={classes.line} />
                <br />
                <Box>
                    <Paragraph title='Get your friends to join Leanghak Coder and enroll into as many FREE courses as you like.' />
                </Box>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles(({
    root: {
        width: '100%',
        height: '50vh',
        paddingBottom: 164,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: ' top center',
        background: 'url(https://www.simplilearn.com/ice9/refer/tab-banner.svgz)',
    },
    line: {
        marginLeft: '5%',
        width: 100,
        height: 4,
        borderRadius: 5,
        backgroundColor: "#FFC107",
    },
}));

HeaderInvite.defaultProps = {
    profile: PropTypes.string.isRequired,

};

HeaderInvite.propTypes = {
    profile: "https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg",
};
