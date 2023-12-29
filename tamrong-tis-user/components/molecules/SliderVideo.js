import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Stack } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Typography } from "@mui/material";
import { toDateFormat } from "../../utils/func/toDateFormat";
import { PlayVideoCard } from "./cards";
import CardVideo from "../organisms/cards/CardVideo";
const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: 5,
  },
  title: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.25)",
  },
}));

export default function SliderVideo({ videos }) {
  const classes = useStyles();
  const [video, setVideo] = React.useState(null);

  const handlePlay = (newVideo) => {
    setVideo(newVideo);
  };
  React.useEffect(() => {
    if (videos.length > 0) {
      console.log("Render");
      setVideo(videos[0]);
    }
  }, [videos]);

  return (
    <Box sx={{ mb: 3 }} className={classes.root}>
      <Stack direction={"row"} sx={{ p: 1 }} spacing={1}>
        <Box sx={{ width: { xs: "100%", sm: "75%" } }}>
          {video && (
            <>
              <Box>
                <PlayVideoCard
                  fileName={video.fileName}
                  coverFileName={video.coverFileName}
                  isPlay={true}
                />
              </Box>
              <Box className={classes.title}>
                <Typography variant="h6">{video.name}</Typography>
                <Box flex={1} />
                <Typography sx={{ display: { xs: "none", sm: "flex" } }}>
                  {toDateFormat(video.date)}
                </Typography>
              </Box>
              <Box sx={{ p: "10px 20px 0 20px" }}>
                <Typography>{video.description}</Typography>
              </Box>
            </>
          )}
        </Box>

        <ImageList
          sx={{
            width: { xs: "100%", sm: "25%" },
            height: "60vh",
            display: { xs: "none", sm: "block" },
          }}
          cols={1}
        >
          {videos.map((item, i) => (
            <ImageListItem key={i}>
              <Box sx={{ mb: 1 }}>
                <CardVideo
                  onPlay={() => handlePlay(item)}
                  opacity={video?._id != item._id ? "0.5" : 1}
                  coverFileName={item.coverFileName}
                  name={item.name}
                />
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
      </Stack>
    </Box>
  );
}
