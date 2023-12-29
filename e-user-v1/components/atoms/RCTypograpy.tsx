import React from "react";
import styles from './../../styles/Typography.module.css';
import { Typography } from '@mui/material';

interface Props {
    children: string;
};

export default function RCTypograpy({ children }: Props) {
    return (
        <Typography className={styles.typography} variant="body1" gutterBottom>
            {children}
        </Typography>
    );
};
