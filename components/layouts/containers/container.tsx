import { JSX } from "react";

export default function Container({
    margin,
    padding,
    children,
}: {
    margin?: string;
    padding?: string;
    children: JSX.Element | JSX.Element[];
}) {
    return <div className={`${margin ?? ""} ${padding ?? ""}`}>{children}</div>;
}
