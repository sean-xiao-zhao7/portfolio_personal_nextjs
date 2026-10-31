import Link from "next/link";
import { ReactNode } from "react";

/**
 * A single main menu item on the left.
 */
export default function MainMenuItem({
    href,
    icon,
    children,
}: {
    href: string;
    icon: ReactNode;
    children: ReactNode;
}) {
    return (
        <li>
            <Link
                href={href}
                className="md:w-60 font-header md:text-4xl text-3xl md:px-10 md:py-8 px-2 py-4 flex md:flex-row flex-col items-center md:text-left text-center hover:bg-stone-800 light:hover:bg-stone-200"
            >
                <div className="md:mr-3">{icon}</div> {children}
            </Link>
        </li>
    );
}
