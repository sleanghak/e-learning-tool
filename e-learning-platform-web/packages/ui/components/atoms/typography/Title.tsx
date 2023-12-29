import { ReactNode } from "react";

export interface Props {
    children?: string | ReactNode,
}
export const Title = ({ children, ...props }: Props) => {
    return (
        <div>
            <p {...props} className="text-black-900 uppercase text-base font-medium">
                {children}
            </p>
        </div>
    );
};