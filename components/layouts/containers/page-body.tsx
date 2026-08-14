import { ReactNode } from "react";

/**
 * Page body for regular pages 
 */
export default function PageBody({ children }: { children: ReactNode }) {
    return <div className="text-xl p-0 py-6 md:p-8 font-body bg-stone-900 light:bg-white">
        {children}
    </div>
}