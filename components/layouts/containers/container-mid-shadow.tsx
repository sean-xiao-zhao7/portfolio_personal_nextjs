import { ReactNode } from "react";

export default function ContainerMidShadow({ children, margin, flex = false }: { children: ReactNode, flex?: boolean, margin?: string }) {
    return <div className={`relative shadow-xl ${(margin ? margin : '')} ${(flex ? 'flex' : '')}`}>
        {children}
    </div>
}