import React from "react";
import PropTypes from "prop-types";
import { Box, CardHeader } from '@mui/material';
import { Menu, MenuItem, ListItemIcon, Avatar } from '@mui/material';
import { Divider, IconButton, Button, Tooltip } from '@mui/material';
import { useRouter } from "next/router";
import { Dialog, DialogActions, DialogContent, Slide, } from '@mui/material';
import { Paragraph } from './../../../components/atoms/typographys';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AccountMenu() {
    const [openDialog, setOpenDialog] = React.useState(false);
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // For Dialog
    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleCloses = () => {
        setOpenDialog(false);
    };
    return (
        <Box>
            <React.Fragment>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}></Avatar>
                        </IconButton>
                    </Tooltip>
                </Box>
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
                    <>
                        <CardHeader
                            avatar={
                                <Avatar>

                                </Avatar>
                            }
                            title="Leanghak Coder"
                            subheader="infor@leanghakcoder.com"
                        />
                    </>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <AddToPhotosIcon fontSize="small" />
                        </ListItemIcon>
                        Post
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>

                    {/*Click Open  Dialog Logout*/}
                    <MenuItem onClick={handleClickOpen} >
                        <ListItemIcon>
                            <Logout color="error" fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </React.Fragment>

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

AccountMenu.propTypes = {
    // imgPath: PropTypes.string.isRequired,
};

AccountMenu.defaultProps = {
    // imgPath: "https://cdn-icons-png.flaticon.com/512/3573/3573187.png",
};



