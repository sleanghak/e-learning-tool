import React from "react";
import { makeStyles } from "@mui/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography, Box, useMediaQuery, useTheme, } from "@mui/material";
import Image from "next/image";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  more: {
    position: "absolute",
    cursor: "pointer",
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, -50%)',
  },
}));
export default function ListImage({ imgs }) {
  const classes = useStyles();
  const theme = useTheme();
  const cols1 = useMediaQuery(theme.breakpoints.down('sm'));
  const cols2 = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <ImageList
      sx={{ width: "100%" }}
      className={classes.root}
      cols={cols1 ? 1 : cols2 ? 2 : 3}
    >
      {imgs.map((item, index) => (
        <ImageListItem key={item.img}>
          {index == 11 ? (
            <Box>
              <img
                style={{ opacity: "0.4", cursor: "pointer" }}
                width={"100%"}
                src={item.coverFileName}
                alt={item.title}
              />
              <Typography
                className={classes.more}
                variant="h6"
              >
                More...
              </Typography>
            </Box>
          ) : (
            <img
              width={"100%"}
              src={item.coverFileName}
              alt={item.name}
            />
          )}
        </ImageListItem>
      ))}
    </ImageList>
  );
}
