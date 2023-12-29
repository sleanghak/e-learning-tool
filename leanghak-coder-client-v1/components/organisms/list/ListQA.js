import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Box } from '@mui/material';
import { Paragraph } from '../../atoms/typographys';


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function ListQA({ title, desc }) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Accordion>
                <AccordionSummary >
                    <Typography
                        className={classes.title}
                        variant="title"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Paragraph title={desc} />
                </AccordionDetails>
            </Accordion>

        </Box>
    );
};
const useStyles = makeStyles(({
    root: {
        width: '100%',
    },

    title: {
        color: '#25265EB3',
        fontFamily: 'Barlow',
        // fontWeight: 600,
    },

}));
