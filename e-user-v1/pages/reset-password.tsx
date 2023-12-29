import React from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Box, TextField, Grid, Stack } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { RCTypograpy, RCTitle } from "../components/atoms";
import Link from "@mui/material/Link";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function ResetPassword() {
  const classes = useStyles();
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <Box className={classes.root}>
      <Box className={classes.paper}>
        <Box>
          <Image
            className={classes.logo}
            src="/reancode101.png"
            alt="logo"
            width={80}
            height={80}
          />
        </Box>

        {/* description register */}
        <Box textAlign={"center"}>
          <RCTitle>Forgot your password?</RCTitle>
          <br />
          <RCTypograpy>
            Enter your email address associated with your account below and
            we&apos;ll send you password reset instructions.
          </RCTypograpy>
        </Box>
        <br />

        {/* form register */}
        <form className={classes.form}>
          <Stack spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                size="small"
                fullWidth
                required
                label="Email"
                name="email"
                type="email"
                variant="standard"
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Button type="submit" fullWidth variant="outlined">
                Send Recovery Email
              </Button>
            </Grid>
            {/* <Typography color="error" variant="body2" gutterBottom>{""}</Typography> */}

            <Link className={classes.link} href="/login">
              <Typography>Just remember?Return to signIn</Typography>
            </Link>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
    maxWidth: 510,
    margin: "0px auto",
    padding: 5,
  },
  logo: {
    borderRadius: 5,
  },
  paper: {
    margin: "8px 4px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: 1,
  },
  link: {
    textDecoration: "none",
    color: " #118AEF",
  },
}));
