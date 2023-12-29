import { ReactNode } from "react";

export interface Props {
    children?: string | ReactNode,
}
export const Typography = ({ children, ...props }: Props) => {
    return (
        <div>
            <div className="className=" space-y-3 my-5>
                <p {...props} className="text-gray-700 text-base">
                    {children}
                </p>
            </div>
        </div>
    );
};


