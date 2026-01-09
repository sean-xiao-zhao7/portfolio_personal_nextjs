import { ReactNode } from "react";

export default function PageBody({ children }: { children: ReactNode }) {
    return <div className="flex justify-center font-sans">
        {children}
    </div>
}