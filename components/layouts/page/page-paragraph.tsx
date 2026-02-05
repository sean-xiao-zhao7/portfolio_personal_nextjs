import { ReactNode } from "react";

export default function PageParagraph({ children }: { children: ReactNode }) {
    return <p className="p-8 my-8 last:mb-0 first:mt-0 rounded-md bg-stone-800 light:bg-stone-50">
        {children}
    </p>
}