import Image from "next/image";
import SuspenseLoader from '../widgets/suspense-loader';
import PageBody from "../layouts/page/page-body";
import PageParagraph from "../layouts/page/page-paragraph";

export default function ImageItemPreviewFullWidth({ src, alt, captionBody, captionTitle, width, height }: { src: string, alt: string, captionBody: string, captionTitle: string, width: string, height: string }) {
    return <PageBody>
        <div className={`relative w-full h-200 shadow-xl`}>
            <SuspenseLoader>
                <Image src={src} alt={alt} fill objectFit="cover" className='shadow-xl' />
            </SuspenseLoader>
        </div>
        <PageParagraph>
            <h2>{captionTitle}</h2>
            {captionBody}
        </PageParagraph>
    </PageBody>
}