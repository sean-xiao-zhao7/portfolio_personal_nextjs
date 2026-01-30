import { ReactNode } from "react";

/**
 * Page header for home page or pages with emphasis 
 */
export default function PageLargeHeader({ children }: { children: ReactNode }) {
    return <div className="flex justify-start font-header">
        <h1 className="max-w-xs text-7xl leading-10 tracking-tight pt-2 pb-4">
            {children}
        </h1>
    </div>
}