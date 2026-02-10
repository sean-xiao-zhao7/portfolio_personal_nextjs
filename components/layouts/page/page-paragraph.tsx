import { ReactNode } from "react";

export default function PageParagraph({ children }: { children: ReactNode }) {
    return <div className="p-10 my-10 last:mb-0 first:mt-0 rounded-sm shadow-md bg-stone-800 light:bg-stone-50">
        {children}
    </div>
}