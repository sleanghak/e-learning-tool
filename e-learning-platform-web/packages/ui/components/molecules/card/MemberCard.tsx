interface Props {
    href: string,
    src: string,
    title: string,
    desc: string,
}
export function MemberCard({ href, src, title, desc }: Props) {
    return (
        <div className="flex justify-center">
            <a href={href} >
                <div className="rounded-lg max-w-sm">
                    <img
                        style={{
                            width: "100%",
                            height: "40vh",
                            borderRadius: "5px",
                        }}
                        src={src}
                        alt="profile"
                    />
                    <div className="p-5 text-center">
                        <p className="text-black-900 text-base font-medium">
                            {title}
                        </p>
                        <h5 style={{ color: ' #7665A0' }} className="text-base">
                            {desc}
                        </h5>
                    </div>
                </div>
            </a>
        </div>
    );
};