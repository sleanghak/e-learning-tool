
import React from 'react';
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { Box, Avatar, Typography, Button } from '@mui/material';
import { IconButton } from '@mui/material';
import Divider from '@mui/material/Divider';
import { ListItemButton, ListItemIcon, ListItemText, List, SwipeableDrawer } from '@mui/material';
import { navItems, noUserItems } from "../../../utils/constant/userMenu";
import ListItemCollapse from "../../molecules/menus/ListItemCollapse";
import { Paragraph } from './../../../components/atoms/typographys';
import { useRouter } from "next/router";
import Link from "next/link";
import { Dialog, DialogActions, DialogContent, Slide, } from '@mui/material';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from '@mui/icons-material/Menu';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function UserDrawer({
    onCloseFunc,
    user, }) {

    const [openDialog, setOpenDialog] = React.useState(false);
    const classes = useStyles();
    const router = useRouter();
    const role = user?.data?.role || null;
    const navs = role == "user" ? navItems : noUserItems;

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    // For Dialog
    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleCloses = () => {
        setOpenDialog(false);
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className={classes.root}>
                <div className={classes.profile}>
                    <Avatar
                        className={classes.logo}
                        alt=""
                        src="leanghak-coder.png"
                    />
                    <Typography sx={{ display: "block" }} align="center" variant="body">
                        {"Leanghak Coder"}
                    </Typography>
                    <Typography sx={{ display: "block" }} align="center" variant="body">
                        {"info@leanghakcoder.com"}
                    </Typography>
                </div>
                <Divider />
                <div className={classes.container}>
                    <List>
                        {navs.map((item, index) => {
                            return (
                                <Box key={index}>
                                    {" "}
                                    {item.sublist ? (
                                        <ListItemCollapse title={item.label} icon={item.icon}>
                                            {item.sublist.map((item, index) => {
                                                return (
                                                    <Link href={item.path} key={index}>
                                                        <ListItemButton
                                                            sx={{ p: "16px 0 16px 40px" }}
                                                            onClick={onCloseFunc}
                                                        >
                                                            {item.label}
                                                        </ListItemButton>
                                                    </Link>
                                                );
                                            })}
                                        </ListItemCollapse>
                                    ) : (
                                        <Link href={item.path}>
                                            <ListItemButton onClick={onCloseFunc}>
                                                <ListItemIcon>{item.icon}</ListItemIcon>
                                                <ListItemText primary={item.label} />
                                            </ListItemButton>
                                        </Link>
                                    )}
                                </Box>
                            );
                        })}

                        {/*Click Open Dialog Logout */}
                        <Box>
                            <ListItemButton onClick={handleClickOpen} >
                                <ListItemIcon>
                                    <ExitToAppIcon color="error" />
                                </ListItemIcon>
                                <ListItemText primary="Logout" />
                            </ListItemButton>
                        </Box>
                    </List>
                </div>
            </div>
        </Box>
    );

    return (
        <Box>
            {['left',].map((anchor) => (
                <React.Fragment key={anchor}>
                    <IconButton
                        onClick={toggleDrawer(anchor, true)}
                        size="medium"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}


            {/*Dialog Logout  */}
            <Box>
                <Dialog
                    open={openDialog}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloses}
                >
                    <DialogContent>
                        <Paragraph title='Do you want to log out your account?' />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloses}>Cancel</Button>
                        <Button color="error" onClick={() => router.push("/")}>Logout</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </Box>
    );
}



const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 250,
        maxWidth: 300,
    },
    logo: {
        marginTop: 16,
        width: 80,
        height: 80,
        margin: "0px auto",
        marginBottom: 16,
    },
    profile: {
        marginBottom: 16,
    },
}));


UserDrawer.defaultProps = {

};

UserDrawer.propTypes = {

};
