import { ReactNode } from "react";

export default function PageBodyNoBorder({ children }: { children: ReactNode }) {
    return <div className="justify-center text-lg mt-4 pt-4">
        {children}
    </div>
}