import { ReactNode } from "react";

export default function ContainerMidShadow({ children, margin, flex = false }: { children: ReactNode, flex?: boolean, margin?: string }) {
    return <div className={`relative shadow-xl ${(margin ? margin : '')} ${(flex ? 'flex' : '')} bg-stone-800 light:bg-stone-50`}>
        {children}
    </div>
}