import { ReactNode } from "react";

/**
 * Page body for home page and pages with emphasis.
 */
export default function PageLargeBody({ children }: { children: ReactNode }) {
    return <div className="text-xl p-12 font-body font-normal bg-stone-900 light:bg-white">
        {children}
    </div>
}