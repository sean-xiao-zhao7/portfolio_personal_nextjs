import { JSX } from "react";

import PageBody from "@/components/layouts/containers/page-body";
import PageMainHeader from "@/components/layouts/headers/page-main-header";
import ImageItemTextRight from "@/components/images/image-item-text-right";
import VerticalList, {
    VerticalListItem,
} from "@/components/widgets/vertical-list";

export default async function AIPage() {
    const imageJSXList: JSX.Element[] = [
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1795211295/akira_4_vcufu5.png"
            }
            alt="AKIRA"
            captionTitle="AKIRA"
            captionBody="A tribute to the 1988 animated movie."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770755974/rain1_ybd80y.png"
            }
            alt="Rain 1"
            captionTitle="After School Rain"
            captionBody="A girl playing violin in front of a fountain. Red roses are in very near foreground with large depths of field. Inspired by high school animes with after-school music activity. Niji v6 is very good at rain effects, and also red roses; but it is not good at the statue and the shape of the bow."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770755973/angel1_kwebza.png"
            }
            alt="Angel 1"
            captionTitle="Golden Angel"
            captionBody="A single character VS a simple clouds background. Using a style-grid for Niji 6, which excelled at rays of light and feathers of her wings. The style-grid allowed different prompts with simliar facial features."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770754359/shinobu_5_h6bvok.png"
            }
            alt="Shinobu 5"
            captionTitle="Shinobu (Infinity Castle)"
            captionBody="Combining Shinobu and lily pond, while butterflies reflect the colours. A white background gradient allows Niji v7 to focus on her facial features. A top down view conveys the sad feelings of the movie. Kimetsu characters are very well trained by Niji."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770754386/dany3_bjt8ff.png"
            }
            alt="Dany 3"
            captionTitle="Queen of Dragons"
            captionBody="A difficult task as GoT is not well-translated into anime by default. Niji v7 is very good at writing English words in various fonts on white background. The dragons can be either flat black art, or 3D anime style dragons like from Berserk."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770754347/iris_5_ffkxng.png"
            }
            alt="Iris Out"
            captionTitle="Iris Out"
            captionBody="2025 peak Reze year. Pure red background allows Niji6 to fully depict human characters' features, especially in a manga style. Reze is looking at viewer sideways, giving the flower because she was not able to receive it from Denji. Reze is designed to be an attractive girl, but it is easy to overdo it. Niji6 is not good a writing words, but the simple red background made it easier."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770755655/supergirlfly4_rzmdiy.png"
            }
            alt="Super Girl"
            captionTitle="Supergirl"
            captionBody="An amazing Niji6 style grid using realistic cloud and blue sun light; not flexible for most other scenes. The style grid also contains clean anime style with big eyes; this worked for supergirl's innocent personality."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770754331/kiki_7_nqxw79.png"
            }
            alt="Kiki"
            captionTitle="Kiki in Stockholm"
            captionBody="The challenge is to make Studio Ghibli images that do not look identical to real Studio Ghibli images. This image uses realistic Stockholm background, as the movie is inspired partially by Sweden, Belgium, Italy and the Netherlands. Pushing Niji6 to its limits of generating massive amount of small objects, while maintainng clear foreground character features."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770756936/dryflower0_ctrall.png"
            }
            alt="Dry Flower"
            captionTitle="Dry Flower"
            captionBody="The type of image Niji is best at. No special requirements, just a girl sitting holding a glass vase of Ajisai flowers - the type of flower that often appears in Japanese media. Adding specifically the Bolivian Salt Flats to achieve the blue clear reflective surface. 'Dry Flower' is a viral pop ballad sang by a man from a girl's perspective about breakup."
        />,
        <ImageItemTextRight
            src={
                "https://res.cloudinary.com/dvayupwmu/image/upload/v1770756934/gakko3_dg2jtw.png"
            }
            alt="Gakko"
            captionTitle="Otona Blue"
            captionBody="Testing Niji7's generation of many objects, especially multiple humans. Atarashi Gakko members are not high school girls but they dress simliar to them, so they need to look more mature. Street cats reflect the spontaneous personalities of the humans."
        />,
    ];

    const imageItemList: VerticalListItem[] = [
        ...imageJSXList.map((jsx, index) => {
            return { element: jsx, key: index };
        }),
    ];

    return (
        <>
            <PageMainHeader>Nijijourney Illustrations</PageMainHeader>
            <PageBody>
                <VerticalList listItems={imageItemList} />
            </PageBody>
        </>
    );
}
