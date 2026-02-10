import { Suspense } from 'react'
import Image from "next/image";
import LoadingSpinner from '../widgets/loading-spinner';

export default function ImageItem({ src, alt }: { src: string, alt: string }) {
    return <div className="relative w-120 h-144 shadow-xl">
        <Suspense fallback={<div className='flex justify-center-safe items-center-safe'><LoadingSpinner /></div>}>
            <Image src={src} alt={alt} fill className='shadow-xl' />
        </Suspense>
    </div>
}