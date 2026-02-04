import { ReactNode } from "react";

/**
 * Page body for regular pages 
 */
export default function PageBody({ children }: { children: ReactNode }) {
    return <div className="text-xl p-12 font-body bg-stone-900 light:bg-white">
        {children}
    </div>
}