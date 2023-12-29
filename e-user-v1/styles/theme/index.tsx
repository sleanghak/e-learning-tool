import React from "react";
import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";
import { tabsTheme, tabTheme } from "./tabs.theme";
import typographyTheme from './Typography.theme';
import buttonTheme from "./Button.theme";
import cardTheme from './Card.theme';
import { listItemTheme } from "./list.theme";
const theme = createTheme({
    palette: {
        primary: {
            main: '#118AEF',
            contrastText: '#000'
        },
        secondary: {
            main: red[700]
        },
        warning: {
            main: '#FFC107',
            contrastText: '#000'
        },
        success: {
            main: '#27BA44'
        },
        error: {
            main: '#F81818'
        },
        disabled: {
            main: '#7D7878'
        },
        black: {
            main: '#000'
        },
        white: {
            main: '#FFF'
        }
    },
    typography: {
        fontFamily: 'Roboto',
        fontWeightLight: 300,
        fontWeightMedium: 500,
        fontWeightRegular: 400,
        fontWeightBold: 600,
    },
    components: {
        MuiButton: buttonTheme,
        MuiTab: tabTheme,
        MuiTabs: tabsTheme,
        MuiTypography: typographyTheme,
        MuiButton: buttonTheme,
        MuiCard: cardTheme,
        MuiListItem: listItemTheme
    }
})
export default theme;