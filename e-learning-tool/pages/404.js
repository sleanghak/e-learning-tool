import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@mui/styles';
import Image from 'next/image';
import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const NotFounded = ({
    src,
    nameTitle
}) => {
    const classes = useStyles()
    return (
        <Box sx={{ mb: 6 }}>
            <Box className={classes.root}>
                <Image
                    className='img'
                    src={src}
                    alt='unknow page'
                    width={500}
                    height={450}
                />
                <Typography variant="h4" gutterBottom component="div">
                    {nameTitle}
                </Typography>
            </Box>
            <Typography align='center'>
                <Link href="/">
                    <Button variant="outlined">
                        Home Page
                    </Button>
                </Link>
            </Typography>
        </Box>
    );
}

export default NotFounded;

const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        margin: '0px auto',
        textAlign: 'center'
    }

}));

NotFounded.propTypes = {
    src: PropTypes.string.isRequired,
    nameTitle: PropTypes.string,

};

NotFounded.defaultProps = {
    src: "/images/404.jpg",
    nameTitle: "Not Founded Page",

};