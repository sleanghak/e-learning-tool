
import React from "react";
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import { Menu, MenuItem, Divider, ListItemIcon, CircularProgress, } from "@mui/material";
import Settings from "@mui/icons-material/Settings";
import LockResetIcon from "@mui/icons-material/LockReset";
import Logout from "@mui/icons-material/Logout";
import { useRouter } from "next/router";
const AccountMenu = ({ user }) => {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});
    const open = Boolean(anchorEl);
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    React.useEffect(() => {
      
    }, [user]);

    return (
        <>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleOpen}
                    size="small"
                    sx={{ ml: 0.5 }}
                    aria-controls={open ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                >
                    <Avatar
                        src={currentUser?.coverFileName}
                        sx={{ width: 32, height: 32 }}
                    />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        "&:before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
                <MenuItem button onClick={() => router.push("/setting/personal")}>
                    <Avatar
                        src={currentUser?.coverFileName}
                        sx={{ width: 32, height: 32 }}
                    />{" "}
                    Personal Profile
                </MenuItem>

                <Divider />
                <MenuItem button onClick={() => router.push("/setting/notification")}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Notification
                </MenuItem>
                <MenuItem button onClick={() => router.push("/setting/password")}>
                    <ListItemIcon>
                        <LockResetIcon fontSize="small" />
                    </ListItemIcon>
                    Password
                </MenuItem>
                <MenuItem button onClick={() => router.push("/setting/password")}>
                    <ListItemIcon>
                        <LockResetIcon fontSize="small" />
                    </ListItemIcon>
                    light mode
                </MenuItem>
                <MenuItem button onClick={()=>router.push("/")} color="secondary">
                    <ListItemIcon>
                        {loading ? (
                            <CircularProgress size={20} />
                        ) : (
                            <Logout color="secondary" fontSize="small" />
                        )}
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

export default AccountMenu;
