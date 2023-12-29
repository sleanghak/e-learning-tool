import React from "react";
import { Box, Grid } from "@mui/material";
import CardVideo from "../components/organisms/cards/CardVideo";
import { cardVideo } from "../utils/constant/cardVideo";
import ListImage from "../components/molecules/ListImage";
import { listImage } from './../utils/constant/listImage';
import Divider from "../components/atoms/dividers/Divider";
import Header from "../components/molecules/headers/Header";
import Footer from './../components/templates/layout/Footer';
import GuestAppBar from '../components/templates/layout/GuestAppBar';


export default function Media({ }) {
    return (
        <Box>
            {/* components import GuestAppBar */}
            <Box>
                <GuestAppBar />
            </Box>

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
                <Grid item xs={12} sm={11}>
                    {/* <Grid container spacing={1}>
                        {listImage.map((data, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                                    <Box sx={{ ml: 1, mr: 1, mt: 1 }}>
                                        <ListImage
                                            src={data.src}
                                            title={data.title}
                                            alt={data.alt}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid> */}
                    <ListImage/>
                </Grid>
            </Grid>


            <Grid sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }} container justifyContent={"center"}>
                <Grid item xs={12} sm={11}>
                    <Grid container spacing={1}>
                        {cardVideo.map((data, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                                    <Box sx={{ ml: 1, mr: 1, mt: 1 }}>
                                        <CardVideo
                                            img={data.img}
                                            title={data.title}
                                            alt={data.alt}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>

            {/* components import footer */}
            <Box>
                <Footer />
            </Box>
        </Box>
    );
};