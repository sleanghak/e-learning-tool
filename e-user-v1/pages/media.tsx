import React from 'react';
import { makeStyles } from '@mui/styles';
import { RCFooter, RCGuestAppBar } from "./../components/templates";
import { RCTypograpy, RCTitle } from "../components/atoms";
import { RCListImage } from './../components/molecules';
import { RCVideoCard, RCPlayVideoCard, RCSliderGallery } from './../components/organisms/rc-card';
import { video } from './../utils/constant/media';
import { Box, Grid, } from '@mui/material';

export default function Media() {
    const classes = useStyles();
    return (
        <>
            <RCGuestAppBar />


            <Grid sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }} container justifyContent={"center"}>
                <Grid item xs={11}>

                    <Box textAlign={"center"}>
                        <RCTitle children="GALLERY" /><br />
                    </Box>

                    <Grid container spacing={1}>

                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <RCSliderGallery />
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={6}>

                            <RCListImage />
                        </Grid>
                    </Grid><br />


                    <Box textAlign={"center"}>
                        <RCTitle children="VIDEO" /><br />
                    </Box>

                    <RCPlayVideoCard /><br /><br />

                    <Box sx={{ marginLeft: '20%', marginRight: '20%' }}>
                        <Box className={classes.line} />
                    </Box><br /><br />

                    <Grid container spacing={1}>
                        {video.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                    <RCVideoCard
                                        key={index}
                                        image={item.image}
                                        title={item.title}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>

            <RCFooter />
        </>
    )
};

const useStyles = makeStyles((theme) => ({
    root: {

    },
    line: {
        backgroundColor: '#118AEF',
        width: '100%',
        height: 4,
        borderRadius: 5,
    },
}));

