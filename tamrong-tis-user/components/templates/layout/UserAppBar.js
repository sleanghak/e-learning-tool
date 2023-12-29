import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import {
    AppBar,
    Badge,
    Box,
    Button,
    IconButton,
    Stack,
    Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

// icon
import MenuIcon from "@mui/icons-material/Menu";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";

// component
import TamrongTisLogo from '../../atoms/TamrongTisLogo';
// import LinkPage from '../../molecules/tabs/LinkPage';
// import { AccountMenu } from '../../molecules/menus/AccountMenu';
import AccountMenu from '../../molecules/menus/AccountMenu';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    appBar: {
        width: '100%',
        background: '#FFFFFF',
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    },
    container: {
        width: '100%',
    },
    line: {
        width: '100%',
        background: '#5DE2E7'
    },
    toolbar: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    menuIcon: {
        color: '#999999',
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },

}));


const Navbar = ({
    user,
    onMobile,
    openDrawerFunc,
}) => {
    const classes = useStyles();
    const router = useRouter();
    const role = user?.data?.role;
    return (
        <Box className={classes.root}>
            <AppBar
                className={classes.appBar}
                position="static"
                elevation={0}
                sx={{ boxShadow: "0px -1px 8px rgba(0, 0, 0, 0.25)" }}
            >
                <Box className={classes.container} sx={{ height: { xs: '60px', md: '110px' } }}>
                    <Box className={classes.line} sx={{ height: { xs: '5px', md: '10px' } }} />
                    {/* toolbar */}
                    <Box className={classes.toolbar} sx={{ p: { xs: '0 16px', lg: '0 40px' }, height: { xs: '50px', md: '100px' } }}>
                        {/* Logo */}
                        {onMobile ? (
                            <Box className={classes.logo}>
                                <TamrongTisLogo href="/" />
                                <Box sx={{ display: { xs: 'none', lg: 'flex' }, flexDirection: 'column', ml: 2, minWidth: '281px' }}>
                                    <Typography variant='logo'>
                                        SabaiCode
                                    </Typography>
                                    <Typography variant='primary'>
                                        Coding and STEM for the Youngters
                                    </Typography>
                                </Box>
                            </Box>
                        ) : (
                            <IconButton onClick={openDrawerFunc}>
                                <MenuIcon />
                            </IconButton>
                        )}
                        {/* Page Link */}
                        <Box flex={1} />
                        {/* <Box className={classes.page} sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <LinkPage
                                data={role == "user" ? navItems : noUserItems}
                            />
                        </Box> */}
                        {/* Other icons */}
                        <Stack direction='row' alignItems='center' ml={2} >
                            {role == "user" && (
                                <Stack direction='row' spacing={2}>
                                    <Box>
                                        <Badge badgeContent={4} color="secondary">
                                            <CircleNotificationsIcon color="action" />
                                        </Badge>
                                    </Box>
                                  
                                </Stack>
                            )}
                            <Box sx={{ ml: 2 }}>

                                <AccountMenu user={user} />

                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </AppBar>
        </Box>
    );
}
export default Navbar;

Navbar.propTypes = {

};

Navbar.defaultProps = {

};
