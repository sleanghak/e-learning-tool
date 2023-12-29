import React, { ReactNode, useState } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

interface Props {
  title: string;
  icon: string | ReactNode;
}

const RCIconTypography = ({ title, icon }: Props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.icon}>{icon}</Box>
      <Typography variant="primary">{title}</Typography>
    </Box>
  );
};
export default RCIconTypography;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "end",
  },
  icon: {
    display: "flex",
    marginRight: 30,
    // [theme.breakpoints.down("md")]: {
    //   marginRight: 20,
    // },
    // [theme.breakpoints.down("sm")]: {
    //   marginRight: 10,
    // },
  },
}));
