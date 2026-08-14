import { ReactNode } from "react";

export default function ContainerMidShadow({ children, margin, flex = false }: { children: ReactNode, flex?: boolean, margin?: number }) {
    return <div className={`relative shadow-xl ${(margin ? 'm-' + margin : '')} ${(flex ? 'flex' : '')}`}>
        {children}
    </div>
}