
interface Props {

};


export function Map({ }: Props) {
    return (
        <>
            <iframe
                style={{
                    width: '100%',
                    height:400,
                }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.576243015731!2d104.94625941424982!3d11.292528552544184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31096163f4e8c2e3%3A0xcc81509da2761476!2z4Z6f4Z624Z6b4Z624Z6D4Z674Z-G4Z6A4Z-S4Z6a4Z624Z-G4Z6E4Z6Z4Z-J4Z684Z6c!5e0!3m2!1skm!2skh!4v1671075832403!5m2!1skm!2skh" loading="lazy" />
        </>
    );
};