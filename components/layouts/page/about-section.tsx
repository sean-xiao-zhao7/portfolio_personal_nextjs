import { ReactNode } from "react";
import ContentDivider from "@/components/widgets/content-divider";

export default function AboutSection({ h2Content, h3Content, children }: { h2Content: string, h3Content: string, children: ReactNode }) {
    return <>
        <h2 className="text-2xl pb-1">{h2Content}</h2>
        <h3>{h3Content}</h3>
        <ContentDivider />
        <div className="flex flex-col gap-4 text-xl">
            {children}
        </div>
    </>
}