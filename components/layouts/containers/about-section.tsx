import { ReactNode } from "react";
import ContentDivider from "@/components/widgets/content-divider";

export default function AboutSection({ h2Content, h3Content, children }: { h2Content: string, h3Content: string, children: ReactNode }) {
    return <>
        <h2 className="text-3xl pb-4">{h2Content}</h2>   
        <h2 className="text-3xl">{h3Content}</h2>
        <ContentDivider />
        <div className="flex flex-col gap-4 text-2xl md:text-xl">
            {children}
        </div>
    </>
}