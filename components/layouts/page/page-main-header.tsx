import { ReactNode } from "react";

/**
 * Page header for regular pages. 
 */
export default function PageMainHeader({ children }: { children: ReactNode }) {
    return <h1 className="font-header text-6xl px-12 py-8 bg-stone-800">
        {children}
    </h1>
}