import { ReactNode } from "react";

export default function CursiveText({
    fontSize = "",
    children,
}: {
    fontSize?: String;
    children: ReactNode;
}) {
    return <span className={`font-header ${fontSize}`}>{children}</span>;
}
