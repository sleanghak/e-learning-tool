import React from "react";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
interface Props {
  children: string;
  children1: string;
  children2: string;
}
export default function RCButton({ children, children1, children2 }: Props) {
  return (
    <div>
      <div>
        <h3>
          <li>Outline button</li>
        </h3>
        <Button
          style={{ width: "300px", color: "black", borderRadius: "50px" }}
          variant="outlined"
        >
          {children}
        </Button>
      </div>
      <div>
        <h3>
          <li>Icon button</li>
        </h3>
        <Button
          style={{ width: "400px", color: "black", borderRadius: "50px" }}
          variant="outlined"
          startIcon={<GoogleIcon />}
        >
          {children1}
        </Button>
      </div>
      <div>
        <h3>
          <li>Contained button</li>
        </h3>
        <Button
          style={{
            width: "350px",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "50px",
          }}
          variant="outlined"
        >
          {children2}
        </Button>
      </div>
    </div>
  );
}
