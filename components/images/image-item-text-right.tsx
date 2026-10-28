import Image from "next/image";

import SuspenseLoader from "../widgets/suspense-loader";
import ContainerMidShadow from "../layouts/containers/container-mid-shadow";
import CursiveText from "../text/cursive-text";
import ContentDivider from "../widgets/content-divider";

export default function ImageItemTextRight({
    src,
    alt,
    captionBody,
    captionTitle,
}: {
    src: string;
    alt: string;
    captionBody: string;
    captionTitle: string;
}) {
    return (
        <ContainerMidShadow flex margin="mb-5">
            <div className="h-100 md:w-100 md:h-100 relative flex items-center text-center">
                <SuspenseLoader>
                    <Image
                        src={src}
                        alt={alt}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </SuspenseLoader>
            </div>
            <div className="p-5">
                <CursiveText fontSize={"text-5xl"}>{captionTitle}</CursiveText>
                <ContentDivider />
                <p>{captionBody}</p>
            </div>
        </ContainerMidShadow>
    );
}
