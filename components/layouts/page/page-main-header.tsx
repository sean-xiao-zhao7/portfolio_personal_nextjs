import { ReactNode } from "react";

/**
 * Page header for regular pages. 
 */
export default function PageMainHeader({ children }: { children: ReactNode }) {
    return <div className="flex justify-start font-sans">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            {children}
        </h1>
    </div>
}