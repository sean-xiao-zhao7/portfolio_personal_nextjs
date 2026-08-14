import PageBody from "@/components/layouts/page/page-body"
import PageMainHeader from "@/components/layouts/page/page-main-header"
import ImageItemPreviewFullWidth from "@/components/images/image-item-preview-full-width"

export default function AIPage() {
    return <>
        <PageMainHeader>A.I. Illustrations</PageMainHeader>
        <PageBody>
            <ImageItemPreviewFullWidth src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770755974/rain1_ybd80y.png'} alt='Rain 1' width="w-full" height="h-144" captionTitle="Rain" captionBody="A girl playing violin in front of a fountain." />
            <ImageItemPreviewFullWidth src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770755973/angel1_kwebza.png'} alt='Angel 1' width="w-120" height="h-144" captionTitle="Angel" captionBody="An angel with wings and sword under stormy clouds." />
            <ImageItemPreviewFullWidth src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770754359/shinobu_5_h6bvok.png'} alt='Shinobu 5' width="w-120" height="h-144" captionTitle="Shinobu #2" captionBody="Shinobu sitting beside a lotus pond." />
            <ImageItemPreviewFullWidth src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770754386/dany3_bjt8ff.png'} alt='Dany 3' width="w-120" height="h-144" captionTitle="Queen of Dragons" captionBody="Daenrys holding Valyrian blade in a minimalist painting style." />
            <ImageItemPreviewFullWidth src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770754347/iris_5_ffkxng.png'} alt='Iris Out 5' width="w-120" height="h-144" captionTitle="Iris Out" captionBody="Reze as the subject of Iris Out song." />
            <ImageItemPreviewFullWidth src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770755655/supergirlfly4_rzmdiy.png'} alt='Super Girl flying 4' width="w-120" height="h-144" captionTitle="Supergirl Flying" captionBody="Supergirl wearing an old jacket as she flies." />
            <ImageItemPreviewFullWidth src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770754331/kiki_7_nqxw79.png'} alt='Kiki 7' width="w-120" height="h-144" captionTitle="Kiki in Stockholm" captionBody="Kiki flies on a broom with Chichi above Stockholm." />
            <ImageItemPreviewFullWidth src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770756936/dryflower0_ctrall.png'} alt='Dry Flower 0' width="w-120" height="h-144" captionTitle="Dry Flower" captionBody="A girl holding a vase of dried Ajisai flowers sitting on the Bolivian salt flats." />
            <ImageItemPreviewFullWidth src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1770756934/gakko3_dg2jtw.png'} alt='Gakko 3' width="w-120" height="h-144" captionTitle="Otona Blue" captionBody="Atarashi Gakko running with cats in streets." />
        </PageBody>
    </>
}