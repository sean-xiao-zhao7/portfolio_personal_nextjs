import { Suspense } from 'react'
import Image from "next/image"

import PageBody from "@/components/layouts/page/page-body"
import PageMainHeader from "@/components/layouts/page/page-header"
import LoadingSpinner from '@/components/widgets/loading-spinner'

export default function AIPage() {
    return <>
        <PageMainHeader>Gen A.I.</PageMainHeader>
        <PageBody>
            <Suspense fallback={<div className='flex justify-center-safe'>
                <LoadingSpinner />
            </div>}>
                <div className="relative w-100 h-120">
                    <Image src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770326249/marigold6_rehsep.png'} alt='Marigold 6' fill />
                </div>
            </Suspense>
        </PageBody>
    </>
}