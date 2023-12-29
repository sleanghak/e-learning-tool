const typographyTheme = {
    variants: [
        {
            props: { variant: 'primary' },
            style: {
                fontFamily: 'Roboto',
                // fontWeight: '400',
            },
        },
        {
            props: { variant: 'secondary' },
            style: {
                fontFamily: 'Roboto',
                fontSize: 15,
                color: '#7D7878',
                // fontWeight: '400',
            },
        },
        {
            props: { variant: 'title' },
            style: {
                fontFamily: 'Barlow',
                fontSize: '20px',
                fontWeight: '600',
            },
        },
        {
            props: { variant: 'logo' },
            style: {
                fontFamily: 'Barlow',
                fontSize: '2rem',
                fontWeight: '700',
            },
        },
    ],
};

export default typographyTheme;