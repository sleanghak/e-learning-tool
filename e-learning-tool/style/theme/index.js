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
            main: '#0D99FF',
            contrastText: '#000000'
        },
        secondary: {
            main: red[700]
        },
        warning: {
            main: '#FFC107',
            contrastText: '#000'
        },
        info: {
            main: '#29b6f6'
        },
        success: {
            main: '#66bb6a'
        },
        error: {
            main: '#f44336'
        },
        black: {
            main: '#000'
        },
        white: {
            main: '#fff'
        }
    },
    typography: {
        fontFamily: 'Arial',
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