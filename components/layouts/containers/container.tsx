import { JSX } from "react";

export default function Container({
    margin,
    padding,
    children,
}: {
    margin?: String;
    padding?: String;
    children: JSX.Element | JSX.Element[];
}) {
    return <div className={`${margin ?? ""} ${padding ?? ""}`}>{children}</div>;
}
