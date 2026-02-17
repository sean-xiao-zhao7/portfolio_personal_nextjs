import Image from "next/image";
import SuspenseLoader from '../widgets/suspense-loader';

export default function ImageItem({ src, alt, width, height }: { src: string, alt: string, width: string, height: string }) {
    return <div className={`relative ${width} ${height} shadow-xl`}>
        <SuspenseLoader>
            <Image src={src} alt={alt} fill className='shadow-xl' />
        </SuspenseLoader>
    </div>
}