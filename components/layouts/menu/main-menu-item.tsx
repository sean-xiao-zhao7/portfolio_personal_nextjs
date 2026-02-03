import Link from "next/link";
import { ReactNode } from "react";

/**
 * A single main menu item on the left.
 */
export default function MainMenuItem({ href, icon, children }: {
    href: string, icon: ReactNode, children: ReactNode
}) {
    return <li><Link href={href} className="font-header text-4xl flex flex-col items-center">{icon} {children}</Link></li>
}