import React from "react";
import styles from './../../styles/Typography.module.css';
import { Typography } from '@mui/material';

interface Props {
    children: string;
};

export default function RCTitle({ children }: Props) {
    return (
        <Typography className={styles.title} component="h1" variant="h5">
            {children}
        </Typography>
    );
};
