import { ReactElement } from "react";

interface Props {
    // Use with icon SVG (Typeof icon SVG )
    icon: string | ReactElement;
    desc: string;
};

export function ListTypography({ icon, desc }: Props) {
    return (
        <div>
            <ul role="list" className="space-y-3 my-5">
                <li className="flex space-x-3">
                    <div>
                        {icon}
                    </div>
                    <span className="text-base font-normal leading-tight ">
                        {desc}
                    </span>
                </li>
            </ul>
        </div>
    );
};