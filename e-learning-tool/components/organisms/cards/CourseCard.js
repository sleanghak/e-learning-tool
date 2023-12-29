
import React from "react";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import PropTypes from "prop-types";
import { Button, Typography, Rating } from "@mui/material";
import { Box, Stack, Grid, } from "@mui/material";
import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import Link from "next/link";
import { motion } from "framer-motion";


export default function CourseCard({
    image,
    title,
    alt,
    name,
    rate,
    hour,
    minute,
    href,
}) {
    const classes = useStyles();
    const [value, setValue] = useState(5);

    return (
        <>
            <Card className={classes.root}>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <CardMedia
                        component="img"
                        className={classes.image}
                        alt={alt}
                        image={image}
                        title={title}
                    />
                </motion.div>

                <CardContent >
                    <Typography variant="h6" gutterBottom component="div">{name}</Typography>
                </CardContent>

                <CardContent>
                    <Box className={classes.layout}>

                        <Stack sx={{ alignItems: "center", }} direction="row" spacing={1}>
                            <Box>
                                <Typography className={classes.RateText}>{rate}</Typography>
                            </Box>

                            <Box>
                                <Rating
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </Box>
                        </Stack>

                        <Stack sx={{ alignItems: "center", }} direction="row" spacing={1}>
                            <Box>
                                <RestoreIcon />
                            </Box>

                            <Box>
                                <Typography>{hour}h {minute}m</Typography>
                            </Box>
                        </Stack>
                    </Box>
                </CardContent>

                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <CardActions >
                        <Link href={`href`}>
                            <Button
                                fullWidth
                                size="small"
                                variant="outlined"
                            >
                                Learn more
                            </Button>
                        </Link>
                    </CardActions>
                </motion.div>

            </Card>
        </>
    );
};


const useStyles = makeStyles((theme) => ({
    root: {
        width: "auto",
        maxWidth: 500,
        padding: "15px 15px 15px 15px",
        boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.25)",
    },
    image: {
        height: 225,
    },
    layout: {
        display: "flex",
        justifyContent: "space-between",
    },
    RateText: {
        color: '#FFC107',
    },
}));

CourseCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    alt: PropTypes.string,
    rate: PropTypes.string,
    hour: PropTypes.number,
    minute: PropTypes.number,
};

CourseCard.defaultProps = {
    image: "/images/full-stack-devlopment-min.png",
    title: "img Full Stack Devlopment",
    alt: "img",
    name: "Introduction Web Developer |",
    hour: "0",
    minute: "15",
    rate: "4.8",
};
