import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Stack, Typography } from "@mui/material";
import { Card, CardContent, CardMedia } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

interface Props {
  image: string;
  level: string;
  title: string;
  star: string;
  learner: string;
  lesson: string;
}

export default function RCCourseCard({
  image,
  level,
  title,
  star,
  learner,
  lesson,
}: Props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cardMedia}
        sx={{ height: 210 }}
        image={image}
        title="poster"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {level}
        </Typography>
        <Typography variant="title">{title}</Typography>

        <Box className={classes.center}>
          <Stack direction="row" spacing={1}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography color="warning" variant="body2">
                {star}
              </Typography>

              <StarIcon color="warning" sx={{ ml: 1 }} />
            </Box>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {learner} Learners
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ({lesson} Lessons)
          </Typography>
        </Box>
        <br />
        <Box className={classes.center}>
          <BookmarkBorderIcon color="disabled" />
          <Box>
            <Typography
              gutterBottom
              component="div"
              className={classes.register}
            >
              register
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    border:'0px',
    // maxWidth: 345,
  },
  cardMedia: {
    borderRadius: 5,
  },
  center: {
    display: "flex",
    justifyContent: "space-between",
  },
  register: {
    textTransform: "uppercase",
  },
}));
