interface Props {
    src: string,
    alt?: string,
    title: string,
}
export function EnrollCard({ src, alt, title, }: Props) {
    return (
        <div className=" max-sm:w-[100%] sm:w-[100%] md:w-[70%] lg:w-[70%]">
            <div className="flex items-center justify-center rounded-full ">
                <div>
                    <img
                        className="p-9"
                        src={src}
                        alt={alt}
                    />
                </div>
            </div><br />
            <div className=" text-center">
                <p style={{
                    fontFamily: 'Roboto',
                    fontSize: 16,
                }} className="font-sans text-xl text-gray-700 mb-2 ">
                    {title}
                </p>
            </div>
        </div>

    );
}