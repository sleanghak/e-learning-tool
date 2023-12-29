import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Stack, Grid, TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { RCFooter, RCGuestAppBar } from "./../components/templates";
import { RCTypograpy, RCTitle } from "../components/atoms";
import { RCIconTypography } from "../components/molecules/rc-typography";
import { dataContact } from "./../utils/constant/contact";

const Contact = ({}) => {
  const classes = useStyles();
  const [subject, setSubject] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSubject(event.target.value as string);
  };
  return (
    <Box className={classes.root}>
      <RCGuestAppBar />
      <br />
      <Grid
        sx={{ mb: 3, ml: 0, mr: 0, mt: 3 }}
        container
        justifyContent={"center"}
      >
        <Grid item xs={11}>
          <Box className={classes.container}>
            {/* contact by */}
            <Grid container rowSpacing={4} columnSpacing={2}>
              <Grid item xs={12} sm={5}>
                <Box className={classes.con_by}>
                  <Stack spacing={{ xs: 2, sm: 3, md: 4, lg: 5 }}>
                    <Box className={classes.center}>
                      <RCTitle>You Can Contact Us By</RCTitle>
                    </Box>

                    {dataContact.map((item, index) => {
                      return (
                        <RCIconTypography
                          key={index}
                          icon={item.icon}
                          title={item.title}
                        />
                      );
                    })}
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Box className={classes.map_frame}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.7599126025025!2d104.93824967416265!3d11.279051049723455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109614e40ff6789%3A0xfeb5ca3515ffbea3!2z4Z6c4Z634Z6R4Z-S4Z6Z4Z624Z6b4Z-Q4Z6Z4Z6f4Z6Y4Z-S4Z6P4Z-B4Z6F4Z6P4Z-B4Z6H4Z-E4Z6g4Z-K4Z674Z6T4Z6f4Z-C4Z6T4Z6A4Z-S4Z6a4Z624Z-G4Z6E4Z6Z4Z-J4Z684Z6c!5e0!3m2!1skm!2skh!4v1685172556221!5m2!1skm!2skh"
                    loading="lazy"
                    className={classes.iframeMap}
                  />
                </Box>
              </Grid>
            </Grid>

            {/* contact information*/}
            <Grid container rowSpacing={4} columnSpacing={2}>
              <Grid item xs={12}>
                <Box className={classes.con_infor}>
                  <RCTitle>Contact Suppor</RCTitle>
                  <br />
                  <RCTypograpy>
                    Whether you&apos;re interested in our partner program,
                    advertising service or a custom solution, we&apos;re here to
                    help you find the right plan to support your need. Tell us
                    about you and we&apos;ll be in touch.
                  </RCTypograpy>
                </Box>
              </Grid>

              <Grid item xs={0} sm={12} md={6}>
                <Box className={classes.con_img} />
              </Grid>

              <Grid item xs={12} md={6}>
                <form>
                  <Stack spacing={4}>
                    <TextField
                      variant="standard"
                      fullWidth
                      required
                      type="text"
                      size="small"
                      label="Full Name"
                      name="name"
                    />
                    <TextField
                      variant="standard"
                      fullWidth
                      required
                      type="email"
                      size="small"
                      label="Email"
                      name="email"
                    />

                    <FormControl fullWidth>
                      <InputLabel>Subject&apos;s</InputLabel>
                      <Select
                        variant="standard"
                        size="small"
                        required
                        value={subject}
                        label="Subject"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Web Development</MenuItem>
                        <MenuItem value={20}>Mobile Development</MenuItem>
                      </Select>
                    </FormControl>
                    <TextField
                      variant="outlined"
                      fullWidth
                      required
                      type="text"
                      size="small"
                      multiline
                      rows={10}
                      label="Message"
                      name="message"
                    />
                  </Stack>
                  <Box>
                    <Button
                      className={classes.button}
                      variant="contained"
                      type="submit"
                    >
                      Send Messenger
                    </Button>
                  </Box>
                </form>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      {/* compoment footer */}
      <RCFooter />
    </Box>
  );
};

export default Contact;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    width: "100%",
    marginTop: 20,
    padding: "0px 30px",
    // [theme.breakpoints.down("md")]: {
    //   padding: "0px 20px",
    //   marginTop: 60,
    // },
    // [theme.breakpoints.down("sm")]: {
    //   padding: "0px 10px",
    //   marginTop: 40,
    // },
  },
  con_by: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  center: {
    // [theme.breakpoints.down("sm")]: {
    //   display: "flex",
    //   justifyContent: "center",
    // },
  },
  map_frame: {
    width: "100%",
    height: 500,
    // [theme.breakpoints.down("md")]: {
    //   height: 400,
    // },
    // [theme.breakpoints.down("sm")]: {
    //   height: 300,
    // },
  },
  iframeMap: {
    width: "100%",
    height: "100%",
    border: "none",
    // boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
  },
  con_infor: {
    margin: "0px auto",
    marginTop: 30,
    marginBottom: 20,
    textAlign: "center",
    // [theme.breakpoints.down("md")]: {
    //   marginTop: 30,
    //   marginBottom: 10,
    // },
    // [theme.breakpoints.down("sm")]: {
    //   marginTop: 20,
    //   marginBottom: 5,
    // },
  },
  con_img: {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    backgroundImage: "url(/contact_img.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  button: {
    width: "auto",
    color: "#FFF",
    marginTop: 20,
    display: "flex",
    justifyContent: "left",
  },
}));
