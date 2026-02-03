import { ReactNode } from "react";

/**
 * Page header for home page or pages with emphasis 
 */
export default function PageLargeHeader({ children }: { children: ReactNode }) {
    return <h1 className="font-header text-7xl px-12 py-8 bg-stone-800 light:bg-stone-50 light:border-b-1 light:border-stone-100">
        {children}
    </h1>
}