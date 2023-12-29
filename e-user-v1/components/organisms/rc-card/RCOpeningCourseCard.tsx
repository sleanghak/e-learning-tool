import React from 'react';
import { Box, Stack, Typography, } from '@mui/material';
import { Card, CardContent, CardMedia, } from '@mui/material';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined';
interface Props {
    image: string;
    level: string;
    title: string;
    startDate: string;
    schedule: string;
}

export default function RCOpeningCourseCard({ image, level, title, startDate, schedule }: Props) {
    return (
        <Card sx={{ border:'0px',}}>
            <CardMedia
                style={{ borderRadius: 5 }}
                sx={{ height: 210 }}
                image={image}
                title="poster"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {level}
                </Typography>
                <Typography gutterBottom variant="title" component="div">
                    {title}
                </Typography>

                <Box style={{ display: "flex", justifyContent: "space-between" }}>
                    <Stack direction="row" spacing={1}>
                        <Box sx={{ display: "flex", alignItems: "center", }}>
                            <AlarmOutlinedIcon sx={{ color: "#7D7878", }} />
                            <Typography sx={{ color: " #7D7878" }} variant="body2" color="text.secondary">
                                Start:{startDate}
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Box sx={{ display: "flex", alignItems: "center", }}>
                            <AccessTimeOutlinedIcon sx={{ color: "#7D7878", }} />
                            <Typography variant="body2" color="text.secondary">
                                {schedule} hour/week
                            </Typography>
                        </Box>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Box sx={{ display: "flex", alignItems: "center", }}>
                            <Typography variant="body2" color="text.secondary">
                                <BookmarkBorderIcon sx={{ color: '#7D7878', }} />
                            </Typography>
                        </Box>
                    </Stack>
                </Box><br />
                <Box style={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography gutterBottom component="div" style={{ color: " #27BA44", textTransform: "uppercase", }}  >
                        new
                    </Typography>
                    <Box >
                        <Typography gutterBottom component="div" style={{ color: " #27BA44", textTransform: "uppercase", }}  >
                            register
                        </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

