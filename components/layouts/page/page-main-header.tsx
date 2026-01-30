import { ReactNode } from "react";

/**
 * Page header for regular pages. 
 */
export default function PageMainHeader({ children }: { children: ReactNode }) {
    return <div className="flex justify-start font-header">
        <h1 className="max-w-xs text-6xl leading-10 tracking-tight">
            {children}
        </h1>
    </div>
}