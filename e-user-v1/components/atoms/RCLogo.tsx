import React from "react";
import { makeStyles } from '@mui/styles';
import { Avatar, Box } from "@mui/material";
import { RCTitle, RCTypograpy } from './../../components/atoms';
import Link from "next/link";

interface Props {
    href: string;
};

export default function RCLogo({ href }: Props) {
    const classes = useStyles();
    return (
        <Box sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }}>
            <Box className={classes.root}>
                <Link href={href}>
                    <Avatar
                        alt="logo"
                        src="reancode101.png"
                        sx={{ width: 60, height: 60 }}
                    />
                </Link>

                <Box sx={{ flexDirection: 'column', ml: 2, minWidth: '281px' }}>
                    <RCTitle children='ReanCode101' />
                    <RCTypograpy children=' Beginners for the Youngsters' />
                </Box>
            </Box>
        </Box>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
}));

