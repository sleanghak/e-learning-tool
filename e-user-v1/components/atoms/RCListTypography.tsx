import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { RCTypograpy } from './../atoms';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface Props {
    title: string;
    desc: string;
}

export default function RCListTypography({ title, desc }: Props) {
    return (
        <>
            <Box>
                <Stack direction="row" spacing={2}>
                    <CheckCircleOutlineIcon sx={{ color: "#118AEF", fontSize: 20 }} />
                    <Typography gutterBottom variant="title" component="div">
                        {title}
                    </Typography>
                </Stack>
                <Box sx={{ textIndent: 35 }}>
                    <RCTypograpy children={desc} />
                </Box>
            </Box><br />
        </>
    );
};
