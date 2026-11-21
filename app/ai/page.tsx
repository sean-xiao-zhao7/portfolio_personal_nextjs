import PageBody from "@/components/layouts/containers/page-body";
import PageMainHeader from "@/components/layouts/headers/page-main-header";
import ImageItemAI from "@/components/images/image-item-ai";
import VerticalList, {
    VerticalListItem,
} from "@/components/widgets/vertical-list";

// data
import aiImages from "@/data/ai_images.json";

export default async function AIPage() {
    const imageItemList: VerticalListItem[] =
        aiImages.items.map((image) => {
            return { element: <ImageItemAI {...image} />, key: image.alt };
        });

    return (
        <>
            <PageMainHeader>Nijijourney Illustrations</PageMainHeader>
            <PageBody>
                <VerticalList listItems={imageItemList} />
            </PageBody>
        </>
    );
}
