import React from "react";
import { styled, alpha } from '@mui/material/styles';
import { makeStyles } from "@mui/styles";
import { Toolbar, Button,} from "@mui/material";
import { RCLogo } from '../atoms';
import { Box, MenuItem, ListItemIcon } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    // borderRadius: theme.shape.borderRadius,
    border: '1px solid #eaeaea',
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        height: 15,
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));



const RCGuestAppBar = ({ }) => {
    const classes = useStyles();
    return (
        <Box className={classes.root} position="static" >
            <Toolbar className={classes.toolbar} >
                <RCLogo href="/" />
                
                <MenuItem>
                    <ListItemIcon>
                        <MenuIcon fontSize="small" />
                    </ListItemIcon>
                    Explore
                </MenuItem>

                <Box className={classes.center}>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Box>

                <Box className={classes.menus}>
                    <Button href="/login">
                        Login
                    </Button>
                </Box>
            </Toolbar>
        </Box>
    );
};

export default RCGuestAppBar;

const useStyles = makeStyles((theme) => ({
    root: {
        borderTop:'4px solid #118AEF',
        backgroundColor: '#f9fafb',
        borderBottom: ' 1px solid #eaeaea',
        padding: 5,
    },
    toolbar: {
        // height: 50,
        boxSizing: 'border-box',
    },
    center: {
        // [theme.breakpoints.down("sm")]: {
        //     display: "flex",
        //     justifyContent: "right",
        // },
    },
    menus: {
        display: "flex",
        marginLeft: "auto",
        alignItems: "center",
        gap: 5,
    },

}));
