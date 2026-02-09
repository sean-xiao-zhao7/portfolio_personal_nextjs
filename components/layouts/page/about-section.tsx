import ContentDivider from "@/components/widgets/content-divider";

export default function AboutSection({ h2Content, h3Content, mainText }: { h2Content: string, h3Content: string, mainText: string }) {
    return <>
        <h2>{h2Content}</h2>
        <h3>{h3Content}</h3>
        <ContentDivider />
        <div>
            {mainText}
        </div>
    </>
}