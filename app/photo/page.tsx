import PageMainHeader from "@/components/layouts/page/page-header";
import PageBody from "@/components/layouts/page/page-body";
import ImageItem from "@/components/images/image-item";

export default function PhotoPage() {
    return <>
        <PageMainHeader>Photography</PageMainHeader>
        <PageBody>
            <div className="flex flex-wrap gap-4 justify-center">
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1771360707/w1_0_gyujb3.png'} alt='W1 #1' width="w-180" height="h-120" />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1771360707/p1_0_bogt7x.png'} alt='P1 #1' width="w-180" height="h-120" />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1771360703/f1_0_hxwlrt.png'} alt='P1 #1' width="w-180" height="h-120" />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1771360701/miura_3_etc8y1.png'} alt='P1 #1' width="w-180" height="h-120" />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1771363099/revuelto_3_qh6zki.png'} alt='P1 #1' width="w-180" height="h-120" />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1771360700/f1_6_d2w9sy.png'} alt='W1 #1' width="w-180" height="h-120" />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1771360700/sv_1_gustk3.png'} alt='P1 #1' width="w-180" height="h-120" />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1771360694/f1_2_vig_g7xppw.png'} alt='P1 #1' width="w-180" height="h-120" />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1771360701/f1_1_bk3o7m.png'} alt='P1 #1' width="w-180" height="h-120" />
                <ImageItem src={'https://res.cloudinary.com/dvayupwmu/image/upload/v1771362068/utopia_1_ghwhp1.png'} alt='P1 #1' width="w-180" height="h-120" />
            </div>
        </PageBody>
    </>
}