import React from "react";
import Head from "next/head";
const Header = ({ href }) => {
    return (
        <Head>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />
            <link
                rel="shortcut icon"
                href="https://cdn-icons-png.flaticon.com/512/3573/3573187.png"
                type="image/x-icon"
            />
            <link
                rel="stylesheet"
                href="https://video-react.github.io/assets/video-react.css"
            />
            <title>Leanghak Coder</title>
        </Head>
    );
};

export default Header;
