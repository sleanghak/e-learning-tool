import React from 'react';
import { makeStyles } from "@mui/styles";
import { Box, Grid } from '@mui/material';
import { Title, Paragraph, TitleAnimate } from "../components/atoms/typographys";
import { Footer } from "../components/templates/layouts";
import { GuestAppBar } from "../components/templates/appbars";
import { invite } from './../utils/constant/invite';
import { InviteCard } from './../components/molecules/cards';
import { CopyLink } from './../components/molecules';
import { HeaderInvite } from './../components/molecules/header';
import { ListQA } from './../components/organisms/list';
import { questions } from './../utils/constant/lists';

export default function Invite() {
    const classes = useStyles();
    return (
        <Box>
            {/*import form component AppBar */}
            <Box>
                <GuestAppBar />
            </Box>

            {/*import form component HeaderInvite */}
            <Box>
                <HeaderInvite />
            </Box><br />
            <Box sx={{ display: { xs: 'none', md: 'flex', lg: 'flex' }, }}>
                <Box className={classes.line} />
            </Box><br />
            <Box >
                < CopyLink />
            </Box><br />

            <Box textAlign='center'>
                <TitleAnimate>
                    <Title title='How it works?' />
                </TitleAnimate>
            </Box>
            <Grid sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }} container justifyContent={"center"}>
                <Grid item xs={12} sm={11}>
                    <Grid container spacing={1}>
                        {invite.map((data, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                    <Box sx={{ ml: 1, mr: 1, mt: 1, }}>
                                        <InviteCard
                                            key={index}
                                            profile={data.profile}
                                            desc={data.desc}
                                        />
                                    </Box>
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>

            <Box textAlign='center'>
                <TitleAnimate>
                    <Title title='Frequently Asked Questions' />
                </TitleAnimate >
            </Box>

            <Box sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }}>
                {questions.map((data, index) => {
                    return (
                        <Box sx={{ ml: 1, mr: 1, mt: 1, }} key={index}>
                            <ListQA
                                key={index}
                                title={data.title}
                                desc={data.desc}
                            />
                        </Box>
                    );
                })}
            </Box>

            {/* import form component Footer */}
            <Footer />
        </Box>
    );
};

const useStyles = makeStyles(({
    root: {

    },

    line: {
        margin: '0 auto',
        backgroundColor: "#FFC107",
        width: '50%',
        height: 4,
        borderRadius: 5,
        backgroundImage: 'linear-gradient(83deg, #55ACEE,#FFC107, #f16fa1)',
    },
}));
