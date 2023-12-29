
import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";
import Link from "next/link";
const TamrongTisLogo = ({ src }) => {
    return (
        <Link href="/">
            <Avatar
                alt="Logo"
                src={src}
                sx={{ width: 56, height: 56 }}
            />
        </Link >
    );
};

export default TamrongTisLogo;

TamrongTisLogo.propTypes = {
    src: PropTypes.string.isRequired,
};

TamrongTisLogo.defaultProps = {
    src: "/images/trt-logo.png",
};
