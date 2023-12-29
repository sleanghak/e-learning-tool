
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Button, IconButton, Snackbar } from '@mui/material';
import { Box, Stack, } from '@mui/material';
import { Title } from "../atoms/typographys";
import { FacebookShareButton } from "react-share";
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';

export default function CopyLink() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const textToCopy = "https://sleanghak.github.io/chapey-dang-veng/";

    const copyToClipboard = async (text) => {
        try {
            await navigator.clipboard.writeText(text)
            console.log("copy successfully");
            setOpen(true);
        } catch (err) {
            console.log("copy unsuccessfully ");
            setOpen(false);
        }
    };


    return (
        <Box className={classes.root}>
            <Box textAlign='center'>
                <Title title="Share your invite" />
            </Box><br />
            <Box className={classes.center} >
                <Stack direction="row" spacing={2}>
                    <Box className={classes.input}>
                        {"https://sleanghak.github.io/..."}
                    </Box>
                    <Box>
                        <Button
                            color="primary" 
                            variant="text"
                            onClick={() => copyToClipboard(textToCopy)}
                        >
                            Copy Link
                        </Button>
                    </Box>
                    <Box>
                        <FacebookShareButton
                            url='https://github.com/sleanghak'
                            hashtag={'#Leanhgak_Coder'}
                        >
                            <IconButton>
                                <ShareRoundedIcon color="primary" />
                            </IconButton>
                        </FacebookShareButton>
                    </Box>

                </Stack>
            </Box>
            <Snackbar
                className={classes.alert}
                open={open}
                onClose={handleClose}
                message="Text copied to clipboard!"
            />
        </Box>
    );
};


const useStyles = makeStyles(({
    root: {
        boxShadow: ' 0px 0px 2px rgba(0,0,0,.1)',
        padding: '24px 14px',
        color: '#25265EB3',
        backgroundColor: 'rgba(17, 138, 239, 0.03)',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
    input: {
        border: '1px solid #e2edf9',
        boxShadow: '0px 3px 10px rgba(40,109,245,.1)',
        padding: 7,
        backgroundColor: '#FFF',
        borderRadius: 5,
    }
}));

CopyLink.defaultProps = {
    profile: PropTypes.string.isRequired,

};

CopyLink.propTypes = {
    profile: "https://www.susla.edu/assets/susla/images/WebDevelopmentImage.jpeg",
};
