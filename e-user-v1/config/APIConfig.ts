import { NextConfig } from "next";

export const apiConfig: NextConfig = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
    responseLimit: false,
  },
};
