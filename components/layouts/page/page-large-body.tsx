import { ReactNode } from "react";

/**
 * Page body for home page and pages with emphasis.
 */
export default function PageLargeBody({ children }: { children: ReactNode }) {
    return <div className="justify-center text-2xl mt-4 pt-4">
        {children}
    </div>
}