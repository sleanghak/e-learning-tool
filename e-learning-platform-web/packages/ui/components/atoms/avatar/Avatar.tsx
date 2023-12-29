interface Props {
    /**
     * url or local path of image
     */
    src: string,
    /**
     * Alternative text when src is not working
     */
    alt?: string,

}
export const Avatar = ({ src, alt, ...props }: Props) => {
    return (
        <img
            {...props}
            src={src}
            className="h-10 mr-3 rounded-full "
            alt={alt}
        />
    )
}
// "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"