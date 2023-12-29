import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "@/utils/auth/cookies";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  setCookie(res, "reancode-101", "api-middlewar", {
    path: "/",
    maxAge: 2592000, // expire after 30d
  });
  res.end(res.getHeader("Set-Cookie"));
};

export default handler;
