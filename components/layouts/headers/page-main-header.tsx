import { ReactNode } from "react";

/**
 * Page main header for regular pages. 
 */
export default function PageMainHeader({ padding, children }: { padding?: string, children: ReactNode }) {
    return <h1 className={`font-header text-6xl ${padding ? padding : 'p-8'} bg-stone-800 light:bg-stone-50 light:border-b light:border-stone-100`}>
        {children}
    </h1 >
}