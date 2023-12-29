import React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography, Box } from "@mui/material";

export default function ListImage({ imgs, title }) {
    const classes = useStyles();
    return (
        <ImageList
            sx={{ width: "100%", height: "100%" }}
            className={classes.root}
            cols={3}
        >
            {images.map((item, index) => (
                <ImageListItem key={item.img}>
                    <img
                        width={"100%"}
                        sx={{ height: 150 }}
                        src={item.img}
                        alt={item.title}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
       
    },
  
}));

ListImage.propTypes = {
    title: PropTypes.string.isRequired,

};

ListImage.defaultProps = {
    title: "",

};


const images = [
    {
        img: "https://midu.dev//images/og/bootcamp-full-stack-gratis-2021.jpg",
        title: "video title ",
        alt: "imgVideo"
    },
    {
        img: "https://midu.dev//images/og/bootcamp-full-stack-gratis-2021.jpg",
        title: "video title ",
        alt: "imgVideo"
    },
    {
        img: "https://www.spaceo.ca/wp-content/uploads/2021/05/what-is-full-stack-development.jpg",
        title: "video title ",
        alt: "imgVideo"
    },
    {
        img: "https://mtaindia.org/blog/wp-content/uploads/2022/03/mm.png",
        title: "video title ",
        alt: "imgVideo"
    },
    {
        img: "https://mtaindia.org/blog/wp-content/uploads/2022/03/mm.png",
        title: "video title ",
        alt: "imgVideo"
    },
    {
        img: "https://mtaindia.org/blog/wp-content/uploads/2022/03/mm.png",
        title: "video title ",
        alt: "imgVideo"
    },
    {
        img: "https://mtaindia.org/blog/wp-content/uploads/2022/03/mm.png",
        title: "video title ",
        alt: "imgVideo"
    },
 
];


