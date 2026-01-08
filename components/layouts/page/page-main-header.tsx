import { ReactNode } from "react";

export default function PageMainHeader({ children }: { children: ReactNode }) {
    return <div className="flex min-h-screen justify-center font-sans">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">
            {children}
        </h1>
    </div>
}