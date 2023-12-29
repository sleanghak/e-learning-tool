import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Stack, Typography, Divider, Button } from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import ListImage from "../components/molecules/ListImage";
import CardVideo from "../components/organisms/cards/CardVideo";
import CardRelatedArticles from "../components/organisms/cards/CardRelatedArticles";
import SliderGallery from "../components/molecules/SliderGallery";
import Bookmark from "../components/organisms/lists/Bookmark";
import { mediaBookmark } from "../utils/constant/bookmark";
import { useRouter } from "next/router";
import SliderVideo from "../components/molecules/SliderVideo";
import HeaderTitle from "../components/molecules/HeaderTitle";

const useStyles = makeStyles((theme) => ({
    root: {},
    container: {
        width: "100%",
        padding: "0px 30px",
        [theme.breakpoints.down("md")]: {
            padding: "0px 20px",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "0px 10px",
        },
    },
}));

export default function Media() {
    const classes = useStyles();
    const router = useRouter();
    const [pressData, setPressData] = React.useState([]);
    const [imageData, setImageData] = React.useState([]);
    const [videoData, setVideoData] = React.useState([]);
    const [img, setImage] = React.useState(router.query.img || "gallery");
    const [video, setVideo] = React.useState(router.query.video || "video");


    return (
        <Box>
            <Box>
                <HeaderTitle />
            </Box>
            <Stack direction="row">
                <Box className={classes.container}>
                    <Stack direction="column" spacing={5} sx={{ width: "100%" }}>
                        <Stack id="gallery" spacing={5}>
                            <Box>
                                <Typography variant="h5" align="center">
                                    GALLERY
                                </Typography>
                            </Box>
                            <Box sx={{ width: "100%" }}>
                                {images && imageData.length >= 0 && (
                                    <SliderGallery imgs={imageData} />
                                )}
                            </Box>
                            <Box sx={{ maxWidth: 500 }}>
                                <Tabs
                                    variant="scrollable"
                                    scrollButtons
                                    allowScrollButtonsMobile
                                    value={img}
                                    onChange={handleChangeImg}
                                >
                                    <Tab
                                        value="gallery"
                                        label={<Typography fontSize={16}>Gallery</Typography>}
                                    />
                                    <Tab
                                        value="student_activity"
                                        label={
                                            <Typography fontSize={16}>Student Active</Typography>
                                        }
                                    />
                                    <Tab
                                        value="school_activity"
                                        label={
                                            <Typography fontSize={16}>School Activity</Typography>
                                        }
                                    />
                                </Tabs>
                            </Box>
                            <Box>
                                {images && imageData?.length >= 0 ? (
                                    <ListImage imgs={imageData} />
                                ) : (
                                    <div>Loading ....</div>
                                )}
                            </Box>
                        </Stack>
                        <Stack id="video" spacing={5}>
                            <Box>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    component="div"
                                    align="center"
                                >
                                    VIDEO
                                </Typography>
                            </Box>
                            <Box>
                                {videos && videoData.length >= 0 && (
                                    <SliderVideo videos={videoData} />
                                )}
                            </Box>
                            <Box sx={{ maxWidth: 600 }}>
                                <Tabs
                                    variant="scrollable"
                                    scrollButtons
                                    allowScrollButtonsMobile
                                    value={video}
                                    onChange={handleChangeMenuVideo}
                                >
                                    <Tab
                                        className={classes.size}
                                        value="video"
                                        label={<Typography fontSize={16}>Videos</Typography>}
                                    />
                                    <Tab
                                        className={classes.size}
                                        value="fireside_chat"
                                        label={<Typography fontSize={16}>Fireside Chat</Typography>}
                                    />
                                    <Tab
                                        className={classes.size}
                                        value="student_activity"
                                        label={
                                            <Typography fontSize={16}>Student Activity</Typography>
                                        }
                                    />
                                    <Tab
                                        className={classes.size}
                                        value="school_activity"
                                        label={
                                            <Typography fontSize={14}>School Activity</Typography>
                                        }
                                    />
                                </Tabs>
                            </Box>
                            <Box>
                                <Grid container spacing={1}>
                                    {videoData.length >= 0 && videos ? (
                                        videoData.map((item, index) => {
                                            return (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={4}
                                                    md={4}
                                                    key={index}
                                                    display="flex"
                                                    justifyContent="center"
                                                >
                                                    <CardVideo {...item} />
                                                </Grid>
                                            );
                                        })
                                    ) : (
                                        <div>Loading ...</div>
                                    )}
                                </Grid>
                            </Box>
                        </Stack>
                        <Stack id="press" spacing={5}>
                            <Box>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    component="div"
                                    align="center"
                                >
                                    RELATED ARTICLES
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    component="div"
                                    align="center"
                                >
                                    welcome to useful articles
                                </Typography>
                            </Box>
                            <Box>
                                <Stack direction="column" spacing={2}>
                                    {pressData ? (
                                        pressData.map((item, index) => {
                                            return (
                                                <Box key={index}>
                                                    <CardRelatedArticles {...item} />
                                                </Box>
                                            );
                                        })
                                    ) : (
                                        <div>Loading ...</div>
                                    )}
                                </Stack>
                            </Box>
                        </Stack>
                        <Box>
                            <Divider variant="middle" />
                        </Box>
                        <Box>
                            <Button
                                sx={{ margin: "0px auto", display: "block" }}
                                variant="outlined"
                            >
                                View all
                            </Button>
                        </Box>
                    </Stack>
                </Box>
                <Bookmark bookmark={mediaBookmark} />
            </Stack>
        </Box>
    );
}
