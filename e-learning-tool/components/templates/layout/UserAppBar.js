import { AppBar, IconButton, Toolbar, Badge } from "@mui/material";
import { Avatar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccountMenu from './../../molecules/menus';
import { HorizontalTabs } from "../../molecules/tabs";
import { navItems } from "../../../utils/constant/navItems";
import ELearningToolLogo from './../../atoms/ELearningToolLogo';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


const UserAppBar = ({ onMobile, openDrawerFunc, openSearchFunc }) => {
    const classes = useStyles();

    return (
        <AppBar color="white" position="static">
            <Toolbar className={classes.root}>
                {onMobile ? (
                    <ELearningToolLogo href="/" />
                ) : (
                    <IconButton onClick={openDrawerFunc}>
                        <MenuIcon />
                    </IconButton>
                )}

                <div className={classes.menus}>
                    <IconButton onClick={openSearchFunc} color="primary">
                        <SearchIcon />
                    </IconButton>

                    {onMobile && <HorizontalTabs data={navItems} isDynamic={false} />}
                    <div>
                        <Badge sx={{ mr: 2 }} badgeContent={4} color="secondary">
                            <FavoriteBorderIcon />
                        </Badge>
                    </div>
                    <div>
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon color="action" />
                        </Badge>
                    </div>
                    <div>
                        <AccountMenu />
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default UserAppBar;

const useStyles = makeStyles((theme) => ({
    root: {
        height: 80,
    },
    menus: {
        display: "flex",
        marginLeft: "auto",
        alignItems: 'center',
        gap: 5
    },
}));