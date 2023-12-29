
interface Props {
    src: string,
    alt?: string,
};
export const ReanCode101Logo = ({ src, alt, ...props }: Props) => {
    return (
        <img
            {...props}
            className="h-10 mr-3 sm:h-12 rounded-full "
            src={src}
            alt={alt}
        />
    );
};
