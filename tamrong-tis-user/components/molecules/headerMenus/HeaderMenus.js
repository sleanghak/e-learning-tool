import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Stack, Box, Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';
import Image from "next/image";


export default function HeaderMenus(
    {
        imgMajor,
        majorName,
        imgUniversity,
        UniversityName,
        imgScholarship,
        scholarshipName
    }
) {
    const classes = useStyles();
    return (
        <Grid container justifyContent={"center"}>
            <Grid item xs={12} sm={6} md={4}>
                <Grid container spacing={1}>
                    <Paper className={classes.paper} elevation={2} >
                        <Stack direction="row" spacing={2}>
                            <Box>
                                <Image
                                    width={40}
                                    height={40}
                                    className={classes.ionImg}
                                    src={imgMajor}
                                    alt="imgMajor"
                                />
                            </Box>
                            <Box>
                                <Typography variant="h6" gutterBottom>
                                    {majorName}
                                </Typography>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Grid container spacing={1}>
                    <Paper className={classes.paper} elevation={2} >
                        <Stack direction="row" spacing={2}>
                            <Box>
                                <Image
                                    width={40}
                                    height={40}
                                    className={classes.ionImg}
                                    src={imgUniversity}
                                    alt="imgUniversityr"
                                />
                            </Box>
                            <Box>
                                <Typography variant="h6" gutterBottom>
                                    {UniversityName}
                                </Typography>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <Grid container spacing={1}>
                    <Paper className={classes.paper} elevation={2} >
                        <Stack className={classes.layout} direction="row" spacing={2}>
                            <Box>
                                <Image
                                    width={40}
                                    height={40}
                                    className={classes.ionImg}
                                    src={imgScholarship}
                                    alt="imgScholarshi"
                                />
                            </Box>
                            <Box>
                                <Typography variant="h6" gutterBottom>
                                    {scholarshipName}
                                </Typography>
                            </Box>
                        </Stack>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    );
};


const useStyles = makeStyles((theme) => ({

    paper: {

        padding: "15px 15px 15px 15px",
        width: '200px',
        height: 'auto',
    },
    layout: {
        display: "flex",
        justifyContent: "space-between",
    },
}));


HeaderMenus.propTypes = {
    srcLogo: PropTypes.string.isRequired,
    imgMajor: PropTypes.string.isRequired,
    majorName: PropTypes.string,
    imgUniversity: PropTypes.string,
    UniversityName: PropTypes.string,
    imgScholarship: PropTypes.string,
    scholarshipName: PropTypes.string,

};

HeaderMenus.defaultProps = {

    imgMajor: "/icons/major.png",
    majorName: 'Major',
    imgUniversity: "/icons/university.png",
    UniversityName: 'University',
    imgScholarship: "/icons/scholarship.png",
    scholarshipName: 'Scholarship',

};