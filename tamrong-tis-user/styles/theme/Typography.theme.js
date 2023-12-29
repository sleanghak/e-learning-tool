const typographyTheme = {
    variants: [
        {
            props: { variant: 'primary' },
            style: {
                fontFamily: 'Arial',
                fontWeight: '400',
            },
        },
        {
            props: { variant: 'secondary' },
            style: {
                fontFamily: 'Arial',
                fontSize: 15,
                color: '#787878',
                fontWeight: '400',
            },
        },
        {
            props: { variant: 'title' },
            style: {
                fontFamily: 'Arial',
                fontSize: '20px',
                fontWeight: '700',
            },
        },
        {
            props: { variant: 'logo' },
            style: {
                fontFamily: 'Cambria',
                fontSize: '2rem',
                fontWeight: '700',
            },
        },
    ],
};

export default typographyTheme;