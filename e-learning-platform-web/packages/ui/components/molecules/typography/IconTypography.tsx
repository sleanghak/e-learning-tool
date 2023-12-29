interface Props {
    icon: string;
    alt: string;
    title: string;
};

export function IconTypography({ icon, alt, title }: Props) {
    return (
        <div>
            <ul role="list" className="space-y-3 my-5">
                <li className="flex space-x-3">
                    <div>
                        <img className=" w-5 h-5" src={icon} alt={alt} />
                    </div>
                    <span className=" font-medium truncate">
                        {title}
                    </span>
                </li>
            </ul>
        </div>
    );
};