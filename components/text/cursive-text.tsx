import { ReactNode } from "react";

export default function CursiveText({ children }: { children: ReactNode }) {
    return <span className="font-header">{children}</span>;
}
