import { ReactNode } from "react";

export default function PageParagraph({
    padding,
    margin,
    children,
}: {
    padding?: string;
    margin?: string;
    children: ReactNode;
}) {
    return (
        <div
            className={`${padding ? padding : "p-6 md:p-8"} ${
                margin ? margin : "my-6 md:my-7"
            } last:mb-0 first:mt-0 rounded-sm shadow-md bg-stone-800 light:bg-stone-50`}
        >
            {children}
        </div>
    );
}
