const buttonTheme = {
    styleOverrides: {
        root: {
            color: '#000000',
            textTransform: 'none',
            borderRadius: 50
        },
    },
    variants: [
        {
            props: { variant: 'contained' },
            style: {
                boxShadow: 'none',
                padding: '5px 50px',
                borderRadius: 50,
                '&:hover': {
                    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)',
                },
            },
        },
        {
            props: { variant: 'outlined' },
            style: {
                boxShadow: 'none',
                padding: '5px 50px',
                borderRadius: 50,
                border: '1px solid #66ccff',
                '&:hover': {
                    border: '1px solid #33bbff',
                    boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)',
                }
            },
        },
    ],
};

export default buttonTheme;