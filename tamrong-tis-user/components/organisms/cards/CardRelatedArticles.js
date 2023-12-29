import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Stack } from "@mui/material";
import { Typography, Paper } from "@mui/material";
import { Box } from "@mui/material";
export default function CardRelatedArticles({
    coverFileName,
    description,
    name,
    date,
}) {
    return (
        <Box>
            <Card
                sx={{ p: 1 }}
            >
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1}
                    width='100%'
                    sx={{ alignItems: { xs: 'center', sm: 'start' } }}
                >
                    <Box sx={{
                        maxWidth: '300px', width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                        <img
                            style={{ width: '100%', height: 'auto' }}
                            src={coverFileName}
                        />
                    </Box>
                    <Box flex={1} p={2}>
                        <Typography>
                            {description}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            sx={{ mt: 3 }}
                        >
                            {/* {toDateFormat(date)} */}
                        </Typography>
                    </Box>
                </Stack>
            </Card>
        </Box>
    );
};


CardRelatedArticles.propTypes = {
    coverFileName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

CardRelatedArticles.defaultProps = {
    coverFileName: "https://miro.medium.com/max/1400/1*aTYOTFS4Vkr-nwHNML3GvQ.jpeg",
    description: "Hello",
};

