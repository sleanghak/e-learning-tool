import React from "react";
import PropTypes from "prop-types";
import { Box, Stack, } from '@mui/material';
import { Button, Typography } from '@mui/material';

export default function NameLesson({
    title
}) {
    return (
        <Box>
            <Stack
                sx={{ ml: 2, mr: 2, mt: 3 }}
                direction={"row"}
                justifyContent="space-between"
            >
                <Typography variant="h6" gutterBottom component="div">
                    {title}
                </Typography>
                <Button size="small" variant="outlined">
                    View all
                </Button>
            </Stack>
        </Box>
    );
};



NameLesson.propTypes = {
    title: PropTypes.string.isRequired,

};

NameLesson.defaultProps = {
    title: "Web Development",
};
