import React from "react";
import styles from './../../../styles/Responsive.module.css'
import PropTypes from "prop-types";
import { Typography } from '@mui/material';
// import makeStyles from '@mui/styles/makeStyles';

export default function Title({ title }) {
  // const classes = useStyles();

  return (
    <Typography className={styles.title} component="h1" variant="h5">
      {title}
    </Typography>
  );
};

// const useStyles = makeStyles(({
//   root: {

//   },
// }));

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

Title.defaultProps = {
  title: "Hello! My name is Title",
};