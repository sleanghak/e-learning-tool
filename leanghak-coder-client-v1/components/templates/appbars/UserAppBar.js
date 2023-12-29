import React from "react";
import PropTypes from "prop-types";
import { Toolbar, } from "@mui/material";
import { LeanghakCoderLogo } from './../../atoms';
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button} from '@mui/material';
import { Menu, MenuItem, } from '@mui/material';
import { AccountMenu } from './../../molecules/menus';
import { UserDrawer } from './../layouts';

const UserAppBar = ({ }) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box className={classes.root} position="static" >
            <Toolbar className={classes.toolbar} >
                <Box sx={{ display: { xs: 'flex', md: 'flex', lg: 'none' }, }}>
                    <UserDrawer />
                </Box>

                <LeanghakCoderLogo href="/home" />
                <Box className={classes.menus}>
                    <Box sx={{ display: { xs: 'none', md: 'none', lg: 'flex' }, marginRight: 4 }}>
                        <Button className={classes.text} variant="text" href="/home">Home</Button>
                        <Button className={classes.text} variant="text" endIcon={<ExpandMoreIcon />}
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            Tutorial
                        </Button>
                        <Button className={classes.text} variant="text" href="/users/alumni">Alumni</Button>
                        <Button className={classes.text} variant="text" href="/users/student-projects">Student&apos;s Project</Button>
                        <Button className={classes.text} variant="text" href="/users/about">About</Button>
                        <Button className={classes.text} variant="text" href="/users/contact">Contact</Button>
                    </Box>
                    {/* User Account Menu */}
                    <Box>
                        <AccountMenu />
                    </Box>
                </Box>
            </Toolbar>


            {/* ------------- select menu ------------ */}

            <React.Fragment>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem href="!#" onClick={handleClose}>
                        HTML Tutorial
                    </MenuItem>
                    <MenuItem href="!#" onClick={handleClose}>
                        CSS Tutorial
                    </MenuItem>
                    <MenuItem href="!#" onClick={handleClose}>
                        Tailwindcss
                    </MenuItem>
                    <MenuItem href="!#" onClick={handleClose}>
                        Bootstrap
                    </MenuItem>
                    <MenuItem href="!#" onClick={handleClose}>
                        C Programming
                    </MenuItem>
                    <MenuItem href="!#" onClick={handleClose}>
                        JavaScript
                    </MenuItem>
                    <MenuItem href="!#" onClick={handleClose}>
                        Figma
                    </MenuItem>

                </Menu>
            </React.Fragment>


        </Box>
    );
};

export default UserAppBar;

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f9fafb',
        borderBottom: ' 1px solid #eaeaea',
    },
    toolbar: {
        // height: 50,
        boxSizing: 'border-box',
    },
    menus: {
        display: "flex",
        marginLeft: "auto",
        alignItems: "center",
        gap: 5,
    },
    text: {
        textTransform: 'none',
        color: '#25265EB3',
    },
}));


UserAppBar.defaultProps = {

};

UserAppBar.propTypes = {

};