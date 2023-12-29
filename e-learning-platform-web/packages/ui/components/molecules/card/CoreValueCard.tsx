interface Props {
    src: string,
    desc: string,
}
export function CoreValueCard({ src, desc }: Props) {
    return (
        <div
            style={{
                boxShadow:
                    "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px",
                borderRadius: "5px",
            }}
        >
            <div className=" flex justify-center">
                <div className=" rounded-lg max-w-sm"><br />
                    <img
                        style={{
                            width: 150,
                            height: 150,
                            display: 'block',
                            margin: '0 auto'
                        }}
                        src={src}
                        alt="profile"
                    />
                    <h5 className="text-gray-700 text-base text-center p-5">
                        {desc}
                    </h5>
                </div>
            </div>
        </div>
    );
};