import React from "react";
import { ButtonBase, Card, Box } from "@mui/material";
import { Typography } from "@mui/material";
import Image from "next/image";

export default function CardVideo({ coverFileName, name, onPlay, opacity }) {
  return (
    <Card
      sx={{
        maxWidth: "350px",
        width: "100%",
      }}
    >
      <Box
        sx={{
          opacity: opacity,
          backgroundImage: `url('${coverFileName}')`,
          width: "100%",
          height: "140px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonBase
          onClick={onPlay}
          sx={{
            zIndex: 25,
            color: "red",
            display: "flex",
          }}
        >
          <Image
            src="/icons/youtube.png"
            width={40}
            height={40}
            alt="play icon"
          />
        </ButtonBase>
      </Box>
      <Box sx={{ p: 1 }}>
        <Typography
          noWrap
          sx={{ fontSize: 16 }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {name}
        </Typography>
      </Box>
    </Card>
  );
}
