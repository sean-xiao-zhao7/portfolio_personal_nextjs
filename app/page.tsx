import PageLargeBody from "@/components/layouts/page/page-large-body";
import PageLargeHeader from "@/components/layouts/page/page-large-header";
import PageParagraph from "@/components/layouts/page/page-paragraph";

export default function Home() {
  return <>
    <PageLargeHeader>
      Welcome to Cyan Jean's Portfolio
    </PageLargeHeader>
    <PageLargeBody>
      <PageParagraph>
        Welcome to my homepage! Use the menu on left to explore.
      </PageParagraph>
      <PageParagraph>
        Quote of the day: ""
      </PageParagraph>
    </PageLargeBody>
  </>
}
