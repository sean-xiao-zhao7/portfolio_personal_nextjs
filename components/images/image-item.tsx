import Image from "next/image";
import SuspenseLoader from '../widgets/suspense-loader';

export default function ImageItem({ src, alt }: { src: string, alt: string }) {
    return <div className="relative w-120 h-144 shadow-xl">
        <SuspenseLoader>
            <Image src={src} alt={alt} fill className='shadow-xl' />
        </SuspenseLoader>
    </div>
}