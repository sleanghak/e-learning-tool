import React from 'react';
import Head from 'next/head';
import { appName } from "../../../utils/constant/app";
export function Header() {
    return (
        <Head>
            <meta
                name="viewport"
                content="minimum-scale=1, initial-scale=1, width=device-width"
            />
            <link
                rel="shortcut icon"
                href="https://yt3.ggpht.com/T3aH4jLpXB1cRIlbxuecFD2j0coaLpQ_E_u7aAF4296B0O0uam5mKUC3WAxXn3In55lN9hcvJDMhSg=s500-c-fcrop64=1,00000000ffffffff-nd-v1"
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

