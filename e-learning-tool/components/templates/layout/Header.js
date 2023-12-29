import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { appName } from "../../../utils/constant/app";
const Header = ({ href }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
      <link
        rel="shortcut icon"
        href={href}
        type="image/x-icon"
      />
      <link
        rel="stylesheet"
        href="https://video-react.github.io/assets/video-react.css"
      />
      <title>{appName}</title>
    </Head>
  );
};

export default Header;

Header.propTypes = {
  href: PropTypes.string.isRequired,
};

Header.defaultProps = {
  href: "/images/eltLogo.jpg",
};

