import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    List,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link as ScrollLink } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 180,
    },
    sticky_box: {
        width: '100%',
        position: 'sticky',
        top: 0,
        paddingTop: 10,
    },
    drawer_list: {
        marginTop: 10,
        borderLeft: '3px solid #5DE2E7',
        padding: '0px 20px',
    },
    drawer_item: {
        width: '100%',
        display: 'block',
        padding: '10px 25px',
        borderRadius: 50,
        marginBottom: 10,
        cursor: 'pointer',
        '&:hover, &.active': {
            background: '#F8F8F8',
        },
    },
}));

const Bookmark = ({
    bookmark
}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box className={classes.sticky_box}>
                <List className={classes.drawer_list}>
                    {bookmark.map((item, index) => (
                        < ScrollLink
                            offset={-40}
                            spy={true}
                            key={index}
                            activeClass="active"
                            className={classes.drawer_item}
                            to={item.section}
                            smooth={true}
                            duration={500}
                        >
                            <Typography>
                                {item.text}
                            </Typography>
                        </ScrollLink>
                    ))}
                </List>
            </Box>
        </Box >
    );
}

export default Bookmark;

Bookmark.propTypes = {
    bookmark: PropTypes.array.isRequired,
};

Bookmark.defaultProps = {
};