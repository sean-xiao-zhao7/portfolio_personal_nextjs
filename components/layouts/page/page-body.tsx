import { ReactNode } from "react";

/**
 * Page body for regular pages 
 */
export default function PageBody({ children }: { children: ReactNode }) {
    return <div className="justify-center text-lg mt-6 pt-6 border-t-1 border-stone-700 light:border-stone-200">
        {children}
    </div>
}