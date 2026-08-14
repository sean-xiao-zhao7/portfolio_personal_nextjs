import Image from "next/image";

import SuspenseLoader from '../widgets/suspense-loader';
import ContainerMidShadow from "../layouts/containers/container-mid-shadow";
import PageMainHeader from "../layouts/headers/page-main-header";

export default function ImageItemPreviewFullWidth({ src, alt, captionBody, captionTitle }: { src: string, alt: string, captionBody: string, captionTitle: string }) {
    return <ContainerMidShadow flex margin="mb-10">
        <div className="h-100 md:w-1/2 md:h-200 relative flex items-center text-center">
            <SuspenseLoader>
                <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
            </SuspenseLoader>
        </div>
        <div className="p-8">
            <PageMainHeader padding="pb-8">{captionTitle}</PageMainHeader>
            {captionBody}
        </div>
    </ContainerMidShadow>
}