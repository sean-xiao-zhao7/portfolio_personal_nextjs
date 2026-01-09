import { ReactNode } from "react";

export default function PageMainHeader({ children }: { children: ReactNode }) {
    return <div className="flex justify-center font-sans">
        <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight border-b-1 border-stone-700 light:border-stone-300">
            {children}
        </h1>
    </div>
}