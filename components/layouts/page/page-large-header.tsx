import { ReactNode } from "react";

export default function PageLargeHeader({ children }: { children: ReactNode }) {
    return <div className="flex justify-start font-sans">
        <h1 className="max-w-xs text-6xl font-semibold leading-10 tracking-tight pb-2">
            {children}
        </h1>
    </div>
}