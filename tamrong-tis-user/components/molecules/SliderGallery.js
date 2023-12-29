import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Stack } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { toDateFormat } from "../../utils/func/toDateFormat";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 5,
  },
  main_image: {
    width: "100%",
    height: "60vh",
    display: "flex",
    backgroundPosition: "center",
    backgroundSize: "cover",
    alignItems: "end",
  },
  title: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
}));

export default function SliderGallery({ imgs }) {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);
  const handleChange = (cur, prev) => {
    setIndex(cur);
  };

  return (
    <Box className={classes.root}>
      <Stack direction='row' spacing={1} p={1}>
        <Box sx={{ width: { xs: "100%", sm: "75%" } }}>
          <Carousel
            index={index}
            onChange={handleChange}
            interval={4000}
            animation="slide"
            indicators={false}
            stopAutoPlayOnHover
            swipe
          >
            {imgs.map((item, index) => {
              return (
                <Box key={index}>
                  <Box
                    sx={{ backgroundImage: `url('${item.coverFileName}')` }}
                    className={classes.main_image}
                  >
                    <Box className={classes.title}>
                      <Typography variant="h6">{item.name}</Typography>
                      <Box flex={1} />
                      <Typography sx={{ display: {xs: 'none', sm :'flex'} }}>{toDateFormat(item.date)}</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ p: "10px 20px 0 20px" }}>
                    <Typography>{item.description}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Carousel>
        </Box>
        <ImageList
          sx={{
            width: { xs: "100%", sm: "25%" },
            height: "60vh",
            display: { xs: "none", sm: "block" },
          }}
          cols={1}
          gap="13px"
        >
          {imgs.map((item, i) => (
            <ImageListItem key={i}>
              <Box
                onClick={() => setIndex(i)}
                sx={{
                  backgroundImage: `url('${item.coverFileName}')`,
                  width: "100%",
                  height: "140px",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: index != i ? 0.5 : 1,
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Box>
  );
}
