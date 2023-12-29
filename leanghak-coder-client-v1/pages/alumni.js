import React from 'react';
import { makeStyles } from "@mui/styles";
import { Box, Grid } from '@mui/material';
import { Title, Paragraph } from "../components/atoms/typographys";
import { Footer } from "../components/templates/layouts";
import { GuestAppBar } from "../components/templates/appbars";
import { StudentCard } from './../components/organisms/cards';
import { inforAlumni } from './../utils/constant/alumni';

export default function Alumni() {
    const classes = useStyles();
    return (
        <Box>
            {/* AppBar */}
            <Box>
                <GuestAppBar />
            </Box>

            {/* card component import from student card */}
            <Box textAlign="center">
                <Title title='Alumni' />
            </Box>
            <Grid sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }} container justifyContent={"center"}>
                <Grid item xs={12} sm={11}>
                    <Grid container spacing={1}>
                        {inforAlumni.map((data, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                    <Box sx={{ ml: 1, mr: 1, mt: 1 }}>
                                        <StudentCard
                                            key={index}
                                            href={`/alumni`}
                                            bgImage={data.bgImage}
                                            profile={data.profile}
                                            name={data.name}
                                            title={data.title}
                                            course={data.course}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>

            {/* Footer */}
            <Box>
                <Footer />
            </Box>
        </Box>
    );
};



const useStyles = makeStyles(({
    root: {
        width: "100%",
    },

}));

