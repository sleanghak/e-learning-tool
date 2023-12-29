import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";
import Image from 'next/image';
import Link from "next/link";
const ELearningToolLogo = ({ src }) => {
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

export default ELearningToolLogo;


ELearningToolLogo.propTypes = {
    src: PropTypes.string.isRequired,
};

ELearningToolLogo.defaultProps = {
    src: "/images/eltLogo.jpg",
};
