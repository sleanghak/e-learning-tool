import React from 'react';
import { fireAuth } from '../../services/firebase';
import { ProgressBar } from './../../components/atoms/progress';
import { useRouter } from 'next/router'
import { Box } from '@mui/material';

const AuthGuard = ({ children }) => {

    const [loading, setLoading] = React.useState(true)
    const router = useRouter();
    React.useEffect(() => {
        fireAuth.onAuthStateChanged((user) => {
            // has user
            if (user) {
                console.log(user.email)
                setLoading(false)
            }
            // no user
            else {
                router.push('/')
                setLoading(false)
            }
        })
    })

    if (loading) {
        return (
            <Box>
                <ProgressBar />
            </Box>
        )
    }
    return (
        <Box>
            {children}
        </Box>
    );
}

export default AuthGuard;
