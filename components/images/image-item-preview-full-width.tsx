import Image from "next/image";

import SuspenseLoader from '../widgets/suspense-loader';
import ContainerMidShadow from "../layouts/containers/container-mid-shadow";
import PageMainHeader from "../layouts/headers/page-main-header";

export default function ImageItemPreviewFullWidth({ src, alt, captionBody, captionTitle }: { src: string, alt: string, captionBody: string, captionTitle: string }) {
    return <ContainerMidShadow flex margin="mb-10">
        <div className="w-1/2 h-200 relative">
            <SuspenseLoader>
                <Image src={src} alt={alt} fill objectFit="cover" />
            </SuspenseLoader>
        </div>
        <div className="p-8">
            <PageMainHeader padding="pb-8">{captionTitle}</PageMainHeader>
            {captionBody}
        </div>
    </ContainerMidShadow>
}