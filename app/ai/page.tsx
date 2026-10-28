import { JSX } from "react";

import PageBody from "@/components/layouts/containers/page-body";
import PageMainHeader from "@/components/layouts/headers/page-main-header";
import ImageItemTextRight from "@/components/images/image-item-text-right";
import VerticalList, {
    VerticalListItem,
} from "@/components/widgets/vertical-list";

export default function AIPage() {
    const imageJSXList: JSX.Element[] = [
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770755974/rain1_ybd80y.png"
            }
            alt="Rain 1"
            captionTitle="Rain"
            captionBody="A girl playing violin in front of a fountain."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770755973/angel1_kwebza.png"
            }
            alt="Angel 1"
            captionTitle="Angel"
            captionBody="An angel with wings and sword under stormy clouds."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770754359/shinobu_5_h6bvok.png"
            }
            alt="Shinobu 5"
            captionTitle="Shinobu #2"
            captionBody="Shinobu sitting beside a lotus pond."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770754386/dany3_bjt8ff.png"
            }
            alt="Dany 3"
            captionTitle="Queen of Dragons"
            captionBody="Daenrys holding Valyrian blade in a minimalist painting style."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770754347/iris_5_ffkxng.png"
            }
            alt="Iris Out 5"
            captionTitle="Iris Out"
            captionBody="Reze as the subject of Iris Out song."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770755655/supergirlfly4_rzmdiy.png"
            }
            alt="Super Girl flying 4"
            captionTitle="Supergirl Flying"
            captionBody="Supergirl wearing an old jacket as she flies."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770754331/kiki_7_nqxw79.png"
            }
            alt="Kiki 7"
            captionTitle="Kiki in Stockholm"
            captionBody="Kiki flies on a broom with Chichi above Stockholm."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770756936/dryflower0_ctrall.png"
            }
            alt="Dry Flower 0"
            captionTitle="Dry Flower"
            captionBody="A girl holding a vase of dried Ajisai flowers sitting on the Bolivian salt flats."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770756934/gakko3_dg2jtw.png"
            }
            alt="Gakko 3"
            captionTitle="Otona Blue"
            captionBody="Atarashi Gakko running with cats in streets."
        />,
    ];

    const imageItemList: VerticalListItem[] = [
        ...imageJSXList.map((jsx, index) => {
            return { element: jsx, key: index };
        }),
    ];

    return (
        <>
            <PageMainHeader>Midjourney Illustrations</PageMainHeader>
            <PageBody>
                <VerticalList listItems={imageItemList} />
            </PageBody>
        </>
    );
}
