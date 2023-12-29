
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@mui/styles';
import { Avatar, Box } from "@mui/material";
import { Title, Paragraph } from './typographys'
import Link from "next/link";

export default function LeanghakCoderLogo({ imgPath, href }) {
    const classes = useStyles();
    return (
        <Box sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }}>
            <Box className={classes.root}>
                <Link href={href}>
                    <Avatar
                        alt="Logo"
                        src={imgPath}
                        sx={{ width: 65, height: 65 }}
                    />
                </Link>

                <Box sx={{ flexDirection: 'column', ml: 2, minWidth: '281px' }}>
                    <Title title='Leanghak Coder' />
                    <Paragraph title=' Beginners for the Youngsters' />
                </Box>
            </Box>
        </Box>
    );
};


LeanghakCoderLogo.propTypes = {
    imgPath: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

LeanghakCoderLogo.defaultProps = {
    imgPath: "https://cdn-icons-png.flaticon.com/512/3573/3573187.png",
    href: '',
};


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
}));

