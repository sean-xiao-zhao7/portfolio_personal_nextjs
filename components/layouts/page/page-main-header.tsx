import { ReactNode } from "react";

/**
 * Page main header for regular pages. 
 */
export default function PageMainHeader({ children }: { children: ReactNode }) {
    return <h1 className="font-header text-6xl p-8 bg-stone-800 light:bg-stone-50 light:border-b light:border-stone-100">
        {children}
    </h1>
}