import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import { Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, } from '@mui/material';
import { makeStyles } from '@mui/styles';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles((theme) => ({

}));

const ListItemCollapse = ({ children, title, icon }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <Box className={classes.root}>
            <ListItemButton
                onClick={handleClick}
            >
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
                <Box sx={{ flex: 1 }} />
                {open ? <ExpandLess sx={{ transform: 'rotate(180deg)' }} /> : <ExpandMore sx={{ transform: 'rotate(-90deg)' }} />}
            </ListItemButton>
            <Collapse
                in={open} timeout="auto" unmountOnExit
            >
                <List sx={{ p: 0 }}>
                    {children}
                </List>
            </Collapse>
        </Box>
    );
}

export default ListItemCollapse;

ListItemCollapse.propTypes = {

};

ListItemCollapse.defaultProps = {

};