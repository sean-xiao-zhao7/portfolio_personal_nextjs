import { ReactNode } from "react";

/**
 * Page body for regular pages 
 */
export default function PageBody({ children }: { children: ReactNode }) {
    return <div className="font-body text-xl p-12 bg-stone-900">
        {children}
    </div>
}