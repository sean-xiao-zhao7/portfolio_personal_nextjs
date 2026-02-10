import PageBody from "@/components/layouts/page/page-body"
import PageMainHeader from "@/components/layouts/page/page-header"
import ImageItem from '@/components/images/image-item'

export default function AIPage() {
    return <>
        <PageMainHeader>Gen A.I. - Midjourney</PageMainHeader>
        <PageBody>
            <div className="flex flex-wrap gap-10 justify-center">
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770326249/marigold6_rehsep.png'} alt='Marigold 6' />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770326249/supergirlfly3_ctekqg.png'} alt='Super Girl flying 3' />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770326249/cyberpunk7_ufovag.png'} alt='Cyberpunk 7' />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770754359/shinobu_5_h6bvok.png'} alt='Shinobu 5' />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770754386/dany3_bjt8ff.png'} alt='Dany 3' />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770754347/iris_5_ffkxng.png'} alt='Iris Out 5' />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770754331/kiki_7_nqxw79.png'} alt='Kiki 7' />
            </div>
        </PageBody>
    </>
}